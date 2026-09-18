import { createServerFn } from "@tanstack/react-start";

export type DeliveryLookup = {
  pincode: string;
  serviceable: boolean;
  city: string | null;
  state: string | null;
  message: string;
};

export const checkDeliveryPincode = createServerFn({ method: "GET" })
  .inputValidator((input: { pincode: string }) => {
    const pincode = String(input.pincode ?? "").replace(/\D/g, "");
    if (pincode.length !== 6) throw new Error("Please enter a valid 6-digit pincode.");
    return { pincode };
  })
  .handler(async ({ data }): Promise<DeliveryLookup> => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${data.pincode}`, {
        headers: { accept: "application/json" },
      });
      const payload = (await response.json()) as Array<{
        Status?: string;
        PostOffice?: Array<{ District?: string; State?: string }> | null;
      }>;
      const entry = payload?.[0];
      const office = entry?.PostOffice?.[0];
      if (entry?.Status !== "Success" || !office) {
        return {
          pincode: data.pincode,
          serviceable: false,
          city: null,
          state: null,
          message: "We could not find this pincode. Please check the number and try again.",
        };
      }
      return {
        pincode: data.pincode,
        serviceable: true,
        city: office.District ?? null,
        state: office.State ?? null,
        message: "Delivery available",
      };
    } catch {
      return {
        pincode: data.pincode,
        serviceable: false,
        city: null,
        state: null,
        message: "Pincode check is unavailable right now. Delivery options are confirmed at checkout.",
      };
    }
  });

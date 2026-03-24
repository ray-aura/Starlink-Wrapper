import { z } from "zod";
declare const _default: z.ZodObject<{
    circuitId: z.ZodString;
    customerVlans: z.ZodArray<z.ZodNumber>;
    serviceVlan: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-L2VpnSetCircuitRequest.d.ts.map
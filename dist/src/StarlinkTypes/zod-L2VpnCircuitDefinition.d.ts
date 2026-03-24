import { z } from "zod";
declare const _default: z.ZodObject<{
    circuitId: z.ZodOptional<z.ZodString>;
    customerVlans: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    serviceVlan: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-L2VpnCircuitDefinition.d.ts.map
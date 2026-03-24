import { z } from "zod";
declare const _default: z.ZodObject<{
    accountNumber: z.ZodOptional<z.ZodString>;
    regionCode: z.ZodOptional<z.ZodString>;
    accountName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    activeSuspensions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-AccountResponseV2.d.ts.map
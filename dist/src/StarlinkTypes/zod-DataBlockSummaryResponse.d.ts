import { z } from "zod";
declare const _default: z.ZodObject<{
    productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    startDate: z.ZodOptional<z.ZodString>;
    expirationDate: z.ZodOptional<z.ZodString>;
    count: z.ZodOptional<z.ZodNumber>;
    dataAmount: z.ZodOptional<z.ZodNumber>;
    dataUnitType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-DataBlockSummaryResponse.d.ts.map
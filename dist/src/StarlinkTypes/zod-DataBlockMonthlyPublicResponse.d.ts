import { z } from "zod";
declare const _default: z.ZodObject<{
    startDate: z.ZodOptional<z.ZodString>;
    endDate: z.ZodOptional<z.ZodString>;
    serviceLineUsage: z.ZodOptional<z.ZodArray<z.ZodObject<{
        serviceLineNumber: z.ZodOptional<z.ZodString>;
        consumedAmountGB: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-DataBlockMonthlyPublicResponse.d.ts.map
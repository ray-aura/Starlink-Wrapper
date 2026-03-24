import { z } from "zod";
declare const _default: z.ZodObject<{
    serviceLineNumbers: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    previousBillingCycles: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    activeServiceLinesOnly: z.ZodOptional<z.ZodBoolean>;
    queryStartDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-QueryDataUsageRequest.d.ts.map
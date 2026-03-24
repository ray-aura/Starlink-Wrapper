import { z } from "zod";
declare const _default: z.ZodObject<{
    errors: z.ZodOptional<z.ZodReadonly<z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodOptional<z.ZodReadonly<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>>>;
    warnings: z.ZodOptional<z.ZodReadonly<z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodOptional<z.ZodReadonly<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
        errorMessage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>>>;
    information: z.ZodOptional<z.ZodReadonly<z.ZodNullable<z.ZodArray<z.ZodString>>>>;
    isValid: z.ZodOptional<z.ZodReadonly<z.ZodBoolean>>;
    content: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productReferenceId: z.ZodOptional<z.ZodString>;
        periodStart: z.ZodOptional<z.ZodString>;
        periodEnd: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-PartialPeriodResponseListServiceResponse.d.ts.map
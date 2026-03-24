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
        nickname: z.ZodOptional<z.ZodString>;
        uploadDate: z.ZodOptional<z.ZodString>;
        fileContentId: z.ZodOptional<z.ZodString>;
        fileContentHash: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RouterLocalContentResponseListServiceResponse.d.ts.map
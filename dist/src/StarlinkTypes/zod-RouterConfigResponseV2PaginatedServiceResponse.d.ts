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
    content: z.ZodOptional<z.ZodObject<{
        pageIndex: z.ZodOptional<z.ZodNumber>;
        limit: z.ZodOptional<z.ZodNumber>;
        isLastPage: z.ZodOptional<z.ZodBoolean>;
        results: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            configId: z.ZodOptional<z.ZodString>;
            nickname: z.ZodOptional<z.ZodString>;
            routerConfigJson: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>>;
        totalCount: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RouterConfigResponseV2PaginatedServiceResponse.d.ts.map
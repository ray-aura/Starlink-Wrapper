import { z } from "zod";
declare const _default: z.ZodObject<{
    pageIndex: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    isLastPage: z.ZodOptional<z.ZodBoolean>;
    results: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        configId: z.ZodOptional<z.ZodString>;
        nickname: z.ZodOptional<z.ZodString>;
        routerConfigJson: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>>>;
    totalCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RouterConfigResponseV2Paginated.d.ts.map
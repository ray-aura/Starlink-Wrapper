import { z } from "zod";
declare const _default: z.ZodObject<{
    pageIndex: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    isLastPage: z.ZodOptional<z.ZodBoolean>;
    results: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        subjectId: z.ZodString;
        email: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
    }, z.core.$strict>>>>;
    totalCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-UserResponsePaginated.d.ts.map
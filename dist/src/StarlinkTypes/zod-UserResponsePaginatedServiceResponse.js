import { z } from "zod";
export default z
    .object({
    errors: z
        .array(z
        .object({
        memberNames: z.array(z.string()).nullable().readonly().optional(),
        errorMessage: z.string().nullable().optional(),
    })
        .strict())
        .nullable()
        .readonly()
        .optional(),
    warnings: z
        .array(z
        .object({
        memberNames: z.array(z.string()).nullable().readonly().optional(),
        errorMessage: z.string().nullable().optional(),
    })
        .strict())
        .nullable()
        .readonly()
        .optional(),
    information: z.array(z.string()).nullable().readonly().optional(),
    isValid: z.boolean().readonly().optional(),
    content: z
        .object({
        pageIndex: z.number().int().optional(),
        limit: z.number().int().optional(),
        isLastPage: z.boolean().optional(),
        results: z
            .array(z
            .object({
            subjectId: z
                .string()
                .min(1)
                .describe("Unique subject ID given to this user."),
            email: z.string().min(1).describe("User email."),
            roles: z
                .array(z.string())
                .describe("List of User roles which map to permissions on the specified account."),
        })
            .strict())
            .nullable()
            .optional(),
        totalCount: z.number().int().optional(),
    })
        .strict()
        .optional(),
})
    .strict();
//# sourceMappingURL=zod-UserResponsePaginatedServiceResponse.js.map
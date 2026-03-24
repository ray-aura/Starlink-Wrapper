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
        accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiredPermission: z.ZodOptional<z.ZodObject<{
            featureAccess: z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>, z.ZodLiteral<7>, z.ZodLiteral<8>, z.ZodLiteral<9>, z.ZodLiteral<10>, z.ZodLiteral<11>, z.ZodLiteral<12>, z.ZodLiteral<13>, z.ZodLiteral<14>, z.ZodLiteral<15>]>;
            permission: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>]>;
        }, z.core.$strict>>;
        featureAccessString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        permissionString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-UserLacksRequiredPermissionServiceResponse.d.ts.map
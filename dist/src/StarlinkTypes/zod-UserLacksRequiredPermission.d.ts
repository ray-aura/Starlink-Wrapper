import { z } from "zod";
declare const _default: z.ZodObject<{
    accountId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiredPermission: z.ZodOptional<z.ZodObject<{
        featureAccess: z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>, z.ZodLiteral<7>, z.ZodLiteral<8>, z.ZodLiteral<9>, z.ZodLiteral<10>, z.ZodLiteral<11>, z.ZodLiteral<12>, z.ZodLiteral<13>, z.ZodLiteral<14>, z.ZodLiteral<15>]>;
        permission: z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>]>;
    }, z.core.$strict>>;
    featureAccessString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    permissionString: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-UserLacksRequiredPermission.d.ts.map
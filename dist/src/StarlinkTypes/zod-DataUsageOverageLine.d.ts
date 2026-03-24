import { z } from "zod";
declare const _default: z.ZodObject<{
    restricted: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>, z.ZodLiteral<7>, z.ZodLiteral<8>, z.ZodLiteral<9>, z.ZodLiteral<10>]>>;
    unrestricted: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>, z.ZodLiteral<4>, z.ZodLiteral<5>, z.ZodLiteral<6>, z.ZodLiteral<7>, z.ZodLiteral<8>, z.ZodLiteral<9>, z.ZodLiteral<10>]>>;
    pricePerGB: z.ZodOptional<z.ZodNumber>;
    usageLimitGB: z.ZodOptional<z.ZodNumber>;
    overageAmountGB: z.ZodOptional<z.ZodNumber>;
    consumedAmountGB: z.ZodOptional<z.ZodNumber>;
    overagePrice: z.ZodOptional<z.ZodNumber>;
    productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dataOverageType: z.ZodOptional<z.ZodUnion<readonly [z.ZodLiteral<0>, z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    activeFrom: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-DataUsageOverageLine.d.ts.map
import { z } from "zod";
declare const _default: z.ZodObject<{
    topUpProduct: z.ZodOptional<z.ZodObject<{
        productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        price: z.ZodOptional<z.ZodNumber>;
        isoCurrencyCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dataAmount: z.ZodOptional<z.ZodNumber>;
        dataUnit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
    dataBlockProducts: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        price: z.ZodOptional<z.ZodNumber>;
        isoCurrencyCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        dataAmount: z.ZodOptional<z.ZodNumber>;
        dataUnit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-DataProductsResponse.d.ts.map
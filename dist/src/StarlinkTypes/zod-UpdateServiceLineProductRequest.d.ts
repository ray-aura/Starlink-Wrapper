import { z } from "zod";
declare const _default: z.ZodObject<{
    productReferenceId: z.ZodString;
    recurringDataBlocks: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strict>>>>;
    existingDataPoolId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    delayUpdate: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-UpdateServiceLineProductRequest.d.ts.map
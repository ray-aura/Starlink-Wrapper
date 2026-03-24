import { z } from "zod";
declare const _default: z.ZodObject<{
    recurringDataBlocks: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strict>>>>;
    existingDataPoolId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RecurringDataBlocksRequest.d.ts.map
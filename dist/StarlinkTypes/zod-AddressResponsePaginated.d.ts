import { z } from "zod";
declare const _default: z.ZodObject<{
    pageIndex: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    isLastPage: z.ZodOptional<z.ZodBoolean>;
    results: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        addressReferenceId: z.ZodOptional<z.ZodString>;
        addressLines: z.ZodOptional<z.ZodArray<z.ZodString>>;
        locality: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        administrativeArea: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        administrativeAreaCode: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        regionCode: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        formattedAddress: z.ZodOptional<z.ZodString>;
        latitude: z.ZodOptional<z.ZodNumber>;
        longitude: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>>>>;
    totalCount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-AddressResponsePaginated.d.ts.map
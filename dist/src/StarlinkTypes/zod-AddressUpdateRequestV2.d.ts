import { z } from "zod";
declare const _default: z.ZodObject<{
    addressLines: z.ZodArray<z.ZodString>;
    locality: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    administrativeArea: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    administrativeAreaCode: z.ZodString;
    region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    regionCode: z.ZodString;
    postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    formattedAddress: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-AddressUpdateRequestV2.d.ts.map
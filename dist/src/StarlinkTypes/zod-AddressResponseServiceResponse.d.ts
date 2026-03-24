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
    }, z.core.$strict>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-AddressResponseServiceResponse.d.ts.map
import { z } from "zod";
declare const _default: z.ZodObject<{
    tailNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seatCount: z.ZodOptional<z.ZodNumber>;
    airlineIataCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    aircraftIataCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    airlineIcaoCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    aircraftIcaoCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stcNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-AviationMetadataResponse.d.ts.map
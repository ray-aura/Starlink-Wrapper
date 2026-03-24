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
        routerId: z.ZodOptional<z.ZodString>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        userTerminalId: z.ZodOptional<z.ZodString>;
        configId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        hardwareVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastBonded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RouterResponseV2ServiceResponse.d.ts.map
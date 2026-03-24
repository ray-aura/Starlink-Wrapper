import { z } from "zod";
declare const _default: z.ZodObject<{
    productId: z.ZodOptional<z.ZodString>;
    activatedDate: z.ZodOptional<z.ZodString>;
    deactivatedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isInOptInCoolDown: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-OptInResponse.d.ts.map
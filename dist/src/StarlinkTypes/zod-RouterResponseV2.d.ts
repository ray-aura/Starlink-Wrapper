import { z } from "zod";
declare const _default: z.ZodObject<{
    routerId: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    userTerminalId: z.ZodOptional<z.ZodString>;
    configId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    hardwareVersion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastBonded: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strict>;
export default _default;
//# sourceMappingURL=zod-RouterResponseV2.d.ts.map
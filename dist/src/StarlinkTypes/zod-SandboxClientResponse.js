import { z } from "zod";
export default z.object({ "clientId": z.string().nullable().optional(), "sandboxId": z.number().int().optional(), "expiry": z.string().datetime({ offset: true }).optional() }).strict();
//# sourceMappingURL=zod-SandboxClientResponse.js.map
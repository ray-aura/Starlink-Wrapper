import { z } from "zod";
export default z.object({ "memberNames": z.array(z.string()).nullable().readonly().optional(), "errorMessage": z.string().nullable().optional() }).strict();
//# sourceMappingURL=zod-ValidationResult.js.map
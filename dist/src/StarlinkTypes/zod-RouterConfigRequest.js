import { z } from "zod";
export default z.object({ "nickname": z.string().nullable().describe("Nickname").optional(), "routerConfigJson": z.string().min(1).describe("Router config json contents") }).strict();
//# sourceMappingURL=zod-RouterConfigRequest.js.map
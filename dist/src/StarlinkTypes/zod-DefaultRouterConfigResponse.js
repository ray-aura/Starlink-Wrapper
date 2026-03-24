import { z } from "zod";
export default z.object({ "configId": z.string().nullable().describe("Router configId that will be assigned to routers when they are first added to this account. Does not affect routers that are assigned no config.").optional() }).strict();
//# sourceMappingURL=zod-DefaultRouterConfigResponse.js.map
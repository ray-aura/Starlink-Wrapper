import { z } from "zod";
export default z.object({ "configId": z.string().nullable().describe("Config id (or none) to assign to routers").optional(), "routerIds": z.array(z.string()).describe("RouterIds to immediately update") }).strict();
//# sourceMappingURL=zod-AssignRoutersConfigRequest.js.map
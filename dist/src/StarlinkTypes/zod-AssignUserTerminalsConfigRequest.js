import { z } from "zod";
export default z.object({ "configId": z.string().nullable().describe("Config id (or none) to assign to user terminals").optional(), "userTerminalIds": z.array(z.string()).describe("UserTerminalIds to immediately update") }).strict();
//# sourceMappingURL=zod-AssignUserTerminalsConfigRequest.js.map
import { z } from "zod";
export default z.object({ "healthy": z.boolean().describe("True if client systems are healthy, false otherwise.") }).strict();
//# sourceMappingURL=zod-SandboxHeartbeatRequest.js.map
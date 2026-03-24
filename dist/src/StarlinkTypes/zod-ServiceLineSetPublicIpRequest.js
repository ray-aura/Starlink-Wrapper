import { z } from "zod";
export default z.object({ "publicIp": z.boolean().describe("If public IP should be enabled or not") }).strict();
//# sourceMappingURL=zod-ServiceLineSetPublicIpRequest.js.map
import { z } from "zod";
export default z.object({ "configId": z.string().describe("Config Id.").optional(), "nickname": z.string().describe("Nickname for this config. Must be less than 100 characters.").optional(), "routerConfigJson": z.string().describe("Config in JSON format.").optional() }).strict();
//# sourceMappingURL=zod-RouterConfigResponseV2.js.map
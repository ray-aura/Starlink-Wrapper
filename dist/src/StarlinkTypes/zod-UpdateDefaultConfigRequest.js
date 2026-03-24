import { z } from "zod";
export default z.object({ "configId": z.string().min(1).describe("ConfigId or none to set as account default config. Use empty string to clear default config setting.") }).strict();
//# sourceMappingURL=zod-UpdateDefaultConfigRequest.js.map
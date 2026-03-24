import { z } from "zod";
export default z.object({ "deviceId": z.string().min(1).describe("User terminal Id, kit serial number, or dish serial number. Ex: 12345678-12345678-12345678") }).strict();
//# sourceMappingURL=zod-DeviceIdRequest.js.map
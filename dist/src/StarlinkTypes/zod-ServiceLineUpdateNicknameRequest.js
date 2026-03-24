import { z } from "zod";
export default z.object({ "nickname": z.string().min(1).describe("New nickname for the existing service line.") }).strict();
//# sourceMappingURL=zod-ServiceLineUpdateNicknameRequest.js.map
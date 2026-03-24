import { z } from "zod";
export default z.object({ "roles": z.array(z.string()).nullable().describe("Contact roles on the account.").optional(), "phoneNumber": z.string().nullable().describe("Contact phone number.").optional() }).strict();
//# sourceMappingURL=zod-UpdateContactOnAccountRequest.js.map
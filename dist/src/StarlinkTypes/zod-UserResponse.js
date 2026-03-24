import { z } from "zod";
export default z.object({ "subjectId": z.string().min(1).describe("Unique subject ID given to this user."), "email": z.string().min(1).describe("User email."), "roles": z.array(z.string()).describe("List of User roles which map to permissions on the specified account.") }).strict();
//# sourceMappingURL=zod-UserResponse.js.map
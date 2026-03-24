import { z } from "zod";
export default z.object({ "accountNumber": z.string().nullable().optional(), "serviceAccountClientId": z.string().nullable().optional(), "serviceAccountSecret": z.string().nullable().optional() }).strict();
//# sourceMappingURL=zod-CreateManagedCustomerResponse.js.map
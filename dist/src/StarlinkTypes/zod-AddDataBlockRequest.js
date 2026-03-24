import { z } from "zod";
export default z.object({ "productId": z.string().min(1).describe("Product Id for data blocks"), "count": z.number().int().describe("Quantity of the specified data block to add") }).strict();
//# sourceMappingURL=zod-AddDataBlockRequest.js.map
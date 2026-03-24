import { z } from "zod";
export default z.object({ "productId": z.string().nullable().optional(), "price": z.number().optional(), "isoCurrencyCode": z.string().nullable().optional(), "dataAmount": z.number().optional(), "dataUnit": z.string().nullable().optional() }).strict();
//# sourceMappingURL=zod-DataProductResponse.js.map
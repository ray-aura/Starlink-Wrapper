import { z } from "zod";
export default z.object({ "serviceLineNumber": z.string().describe("Service line number.").optional(), "consumedAmountGB": z.number().describe("GB amount that the service line consumed from the block.").optional() }).strict();
//# sourceMappingURL=zod-DataBlockServiceLineUsagePublicResponse.js.map
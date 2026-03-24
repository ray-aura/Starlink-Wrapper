import { z } from "zod";
export default z.object({ "date": z.string().datetime({ offset: true }).optional(), "priorityGB": z.number().optional(), "optInPriorityGB": z.number().optional(), "standardGB": z.number().optional(), "nonBillableGB": z.number().optional() }).strict();
//# sourceMappingURL=zod-DataUsageDailyV2.js.map
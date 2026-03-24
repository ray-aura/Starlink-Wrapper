import { z } from "zod";
export default z.object({ "circuitId": z.string().nullable().describe("Starlink generated Id of L2VPN circuit.").optional(), "popName": z.string().nullable().describe("Starlink PoP associated with this circuit.").optional() }).strict();
//# sourceMappingURL=zod-L2VpnCircuitResponse.js.map
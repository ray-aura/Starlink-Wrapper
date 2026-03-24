import { z } from "zod";
export default z.object({ "certificateBase64Pem": z.string().min(1).describe("Certificate base64 encoded pem string to match on for deletion of the corresponding certificate and key pair") }).strict();
//# sourceMappingURL=zod-DeleteTlsConfigRequest.js.map
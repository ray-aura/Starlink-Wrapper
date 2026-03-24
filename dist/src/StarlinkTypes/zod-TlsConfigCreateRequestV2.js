import { z } from "zod";
export default z.object({ "certificateBase64Pem": z.string().min(1).describe("TLS certificate in PEM format, base64 encoded."), "keyBase64Pem": z.string().min(1).describe("TLS key in PEM format, base64 encoded. Must match the public key of the certificate.") }).strict();
//# sourceMappingURL=zod-TlsConfigCreateRequestV2.js.map
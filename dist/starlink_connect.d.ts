import type { StarlinkArgs } from "./Types.ts";
declare class Starlink_Connect {
    private baseURL;
    private credentialsMap;
    constructor(configurations: StarlinkArgs | [StarlinkArgs]);
    private fetchAccessToken;
    private getHeader;
    private IsAccessTokenExpired;
    Request(accountNumber: string, url: string, method: "GET" | "POST" | "PUT" | "DELETE", body?: {}): Promise<any>;
}
export default Starlink_Connect;
//# sourceMappingURL=starlink_connect.d.ts.map
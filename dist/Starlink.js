import Starlink_Connect from "./starlink_connect.js";
import zodAccountResponseV2 from "./StarlinkTypes/zod-AccountResponseV2.js";
export default class Starlink {
    static instance;
    starlinkConnect;
    constructor(configurations) {
        this.starlinkConnect = new Starlink_Connect(configurations);
    }
    static getInstance(configurations) {
        if (!Starlink.instance) {
            Starlink.instance = new Starlink(configurations);
        }
        return Starlink.instance;
    }
    async getAccount(accountNumber) {
        let url = "account";
        let response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        console.log(response);
        return zodAccountResponseV2.parse(response);
    }
}
//# sourceMappingURL=Starlink.js.map
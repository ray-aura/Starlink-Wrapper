import Starlink_Connect from "./starlink_connect.js";
import type { StarlinkArgs } from "./Types.js";
export default class Starlink {
    private static instance;
    protected starlinkConnect: Starlink_Connect;
    private constructor();
    static getInstance(configurations: StarlinkArgs | [StarlinkArgs]): Starlink;
    getAccount(accountNumber: string): Promise<{
        accountNumber?: string | undefined;
        regionCode?: string | undefined;
        accountName?: string | null | undefined;
        activeSuspensions?: string[] | null | undefined;
    }>;
}
//# sourceMappingURL=Starlink.d.ts.map
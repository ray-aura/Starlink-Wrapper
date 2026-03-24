import Starlink_Connect from "./starlink_connect.js";
import { AccountResponseV2ServiceResponseSchema, AddressResponsePaginatedServiceResponseSchema, AddressResponseServiceResponseSchema, CreateManagedCustomerResponseServiceResponseSchema, DefaultRouterConfigResponseServiceResponseSchema, L2VpnCircuitResponseListServiceResponseSchema, OptInResponseServiceResponseSchema, PartialPeriodResponseListServiceResponseSchema, RouterConfigResponseV2PaginatedServiceResponseSchema, RouterConfigResponseV2ServiceResponseSchema, RouterLocalContentResponseListServiceResponseSchema, AddRouterLocalContentResponseV2ServiceResponseSchema, RouterResponseV2ServiceResponseSchema, SandboxClientResponsePaginatedServiceResponseSchema, ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema, ServiceLineResponsePaginatedServiceResponseSchema, ServiceLineResponseServiceResponseSchema, ServiceResponseSchema, SubscriptionProductResponsePaginatedServiceResponseSchema, UserResponsePaginatedServiceResponseSchema, UserResponseServiceResponseSchema, UserTerminalResponseV2PaginatedServiceResponseSchema, } from "./StarlinkTypes/schemas.js";
class Starlink {
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
        const url = "account";
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return AccountResponseV2ServiceResponseSchema.parse(response);
    }
    async DataUsageQuery(accountNumber, page = 0, limit = 50, queryDataUsageRequest = {
        activeServiceLinesOnly: true,
    }) {
        const url = "data-usage/query";
        const params = new URLSearchParams({ page: `${page}`, limit: `${limit}` });
        console.log(`${url}?${params.toString()}`);
        const response = await this.starlinkConnect.Request(accountNumber, `${url}${params.toString()}`, "POST", queryDataUsageRequest);
        return ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema.parse(response);
    }
    async getProducts(accountNumber, page = 0) {
        const url = "products";
        const params = new URLSearchParams({ page: `${page}` });
        const response = await this.starlinkConnect.Request(accountNumber, `${url}${params.toString() ? `?${params.toString()}` : ""}`, "GET");
        return SubscriptionProductResponsePaginatedServiceResponseSchema.parse(response);
    }
    async getAddresses(accountNumber, addressIds, metadata, page = 0) {
        const url = "addresses";
        const params = new URLSearchParams();
        params.set("page", `${page}`);
        if (addressIds) {
            addressIds.forEach((id) => params.append("addressIds", id));
        }
        if (metadata) {
            params.set("metadata", metadata);
        }
        const response = await this.starlinkConnect.Request(accountNumber, `${url}${params.toString() ? `?${params.toString()}` : ""}`, "GET");
        return AddressResponsePaginatedServiceResponseSchema.parse(response);
    }
    async createAddress(accountNumber, address) {
        const url = "addresses";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", address);
        return AddressResponseServiceResponseSchema.parse(response);
    }
    async getAddress(accountNumber, addressReferenceId) {
        const url = `addresses/${addressReferenceId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return AddressResponseServiceResponseSchema.parse(response);
    }
    async updateAddress(accountNumber, addressReferenceId, address) {
        const url = `addresses/${addressReferenceId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", address);
        return AddressResponseServiceResponseSchema.parse(response);
    }
    async getContacts(accountNumber, page = 0) {
        const url = "contacts";
        const params = new URLSearchParams({ page: `${page}` });
        const response = await this.starlinkConnect.Request(accountNumber, `${url}?${params.toString()}`, "GET");
        return UserResponsePaginatedServiceResponseSchema.parse(response);
    }
    async createContact(accountNumber, contact) {
        const url = "contacts";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", contact);
        return UserResponseServiceResponseSchema.parse(response);
    }
    async deleteContact(accountNumber, subjectId) {
        const url = `contacts/${subjectId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "DELETE");
        return ServiceResponseSchema.parse(response);
    }
    async updateContact(accountNumber, subjectId, contact) {
        const url = `contacts/${subjectId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", contact);
        return UserResponseServiceResponseSchema.parse(response);
    }
    async createManagedCustomer(accountNumber, customer) {
        const url = "managed/customers";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", customer);
        return CreateManagedCustomerResponseServiceResponseSchema.parse(response);
    }
    async getRouter(accountNumber, routerId) {
        const url = `/routers/${routerId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return RouterResponseV2ServiceResponseSchema.parse(response);
    }
    async getRouterConfigs(accountNumber, page = 0) {
        const url = "/routers/configs";
        const params = new URLSearchParams({ page: `${page}` });
        const response = await this.starlinkConnect.Request(accountNumber, `${url}?${params.toString()}`, "GET");
        return RouterConfigResponseV2PaginatedServiceResponseSchema.parse(response);
    }
    async createRouterConfig(accountNumber, config) {
        const url = "routers/configs";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", config);
        return RouterConfigResponseV2ServiceResponseSchema.parse(response);
    }
    async getRouterConfig(accountNumber, configId) {
        const url = `routers/configs/${configId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return RouterConfigResponseV2ServiceResponseSchema.parse(response);
    }
    async updateRouterConfig(accountNumber, configId, config) {
        const url = `routers/configs/${configId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", config);
        return RouterConfigResponseV2ServiceResponseSchema.parse(response);
    }
    async assignRoutersConfig(accountNumber, request) {
        const url = "routers/configs/assign";
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async getDefaultRouterConfig(accountNumber) {
        const url = "routers/configs/default";
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
    }
    async setDefaultRouterConfig(accountNumber, request) {
        const url = "routers/configs/default";
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async getTlsConfigs(accountNumber, page = 0) {
        const url = "routers/configs/tls";
        const params = new URLSearchParams({ page: `${page}` });
        const response = await this.starlinkConnect.Request(accountNumber, `${url}?${params.toString()}`, "GET");
        return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
    }
    async createTlsConfig(accountNumber, request) {
        const url = "routers/configs/tls";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", request);
        return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
    }
    async deleteTlsConfig(accountNumber, request) {
        const url = "routers/configs/tls";
        const response = await this.starlinkConnect.Request(accountNumber, url, "DELETE", request);
        return ServiceResponseSchema.parse(response);
    }
    async uploadRouterLocalContent(accountNumber, fileContent, fileName) {
        const url = "routers/local-content";
        const formData = new FormData();
        const blob = new Blob([fileContent]);
        formData.append("File", blob, fileName);
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", formData);
        return AddRouterLocalContentResponseV2ServiceResponseSchema.parse(response);
    }
    async getRouterLocalContentFiles(accountNumber) {
        const url = "routers/local-content";
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return RouterLocalContentResponseListServiceResponseSchema.parse(response);
    }
    async getSandboxClients(accountNumber, sandboxId, expiryAfter, page = 0) {
        const url = "routers/sandbox/clients";
        const params = new URLSearchParams({ page: `${page}` });
        if (sandboxId !== undefined) {
            params.set("sandboxId", `${sandboxId}`);
        }
        if (expiryAfter) {
            params.set("expiryAfter", expiryAfter);
        }
        const response = await this.starlinkConnect.Request(accountNumber, `${url}?${params.toString()}`, "GET");
        return SandboxClientResponsePaginatedServiceResponseSchema.parse(response);
    }
    async batchUpdateSandboxClients(accountNumber, requests) {
        const url = "routers/sandbox/clients";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", requests);
        return ServiceResponseSchema.parse(response);
    }
    async sendSandboxHeartbeat(accountNumber, request) {
        const url = "routers/sandbox/heartbeat";
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async rebootRouter(accountNumber, routerId) {
        const url = `routers/${routerId}/reboot`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST");
        return ServiceResponseSchema.parse(response);
    }
    async getServiceLines(accountNumber, addressReferenceId, searchString, dataPoolId, page = 0, orderByCreatedDateDescending = true) {
        const url = "service-lines";
        const params = new URLSearchParams({
            page: `${page}`,
            orderByCreatedDateDescending: `${orderByCreatedDateDescending}`,
        });
        if (addressReferenceId) {
            params.set("addressReferenceId", addressReferenceId);
        }
        if (searchString) {
            params.set("searchString", searchString);
        }
        if (dataPoolId) {
            params.set("dataPoolId", dataPoolId);
        }
        const response = await this.starlinkConnect.Request(accountNumber, `${url}?${params.toString()}`, "GET");
        return ServiceLineResponsePaginatedServiceResponseSchema.parse(response);
    }
    async createServiceLine(accountNumber, request) {
        const url = "service-lines";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", request);
        return ServiceLineResponseServiceResponseSchema.parse(response);
    }
    async getServiceLine(accountNumber, serviceLineNumber) {
        const url = `service-lines/${serviceLineNumber}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return ServiceLineResponseServiceResponseSchema.parse(response);
    }
    async deactivateServiceLine(accountNumber, serviceLineNumber, reasonForCancellation, endNow = false) {
        const url = `service-lines/${serviceLineNumber}`;
        const params = new URLSearchParams({ endNow: `${endNow}` });
        if (reasonForCancellation) {
            params.set("reasonForCancellation", reasonForCancellation);
        }
        const response = await this.starlinkConnect.Request(accountNumber, `${url}${params.toString() ? `?${params.toString()}` : ""}`, "DELETE");
        return ServiceResponseSchema.parse(response);
    }
    async setServiceLineNickname(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/nickname`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceLineResponseServiceResponseSchema.parse(response);
    }
    async updateServiceLineProduct(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/product`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async setServiceLinePublicIp(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/public-ip`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async optInPriorityData(accountNumber, serviceLineNumber) {
        const url = `service-lines/${serviceLineNumber}/data/opt-in`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST");
        return OptInResponseServiceResponseSchema.parse(response);
    }
    async optOutPriorityData(accountNumber, serviceLineNumber) {
        const url = `service-lines/${serviceLineNumber}/data/opt-out`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST");
        return OptInResponseServiceResponseSchema.parse(response);
    }
    async addUserTerminalToServiceLine(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/user-terminals`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", request);
        return ServiceResponseSchema.parse(response);
    }
    async removeUserTerminalFromServiceLine(accountNumber, serviceLineNumber, deviceId) {
        const url = `service-lines/${serviceLineNumber}/user-terminals/${deviceId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "DELETE");
        return ServiceResponseSchema.parse(response);
    }
    async setServiceLineRecurringDataBlocks(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/data/recurring`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async addServiceLineTopUpData(accountNumber, serviceLineNumber, request) {
        const url = `service-lines/${serviceLineNumber}/data/top-up`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", request);
        return ServiceResponseSchema.parse(response);
    }
    async getBillingPartialPeriods(accountNumber, serviceLineNumber) {
        const url = `service-lines/${serviceLineNumber}/billing-cycles/partial-periods`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return PartialPeriodResponseListServiceResponseSchema.parse(response);
    }
    async getUserTerminals(accountNumber, serviceLineNumbers, userTerminalIds, hasServiceLine, searchString, page = 0) {
        const url = "user-terminals";
        const params = new URLSearchParams({ page: `${page}` });
        if (serviceLineNumbers) {
            serviceLineNumbers.forEach((sl) => params.append("serviceLineNumbers", sl));
        }
        if (userTerminalIds) {
            userTerminalIds.forEach((ut) => params.append("userTerminalIds", ut));
        }
        if (hasServiceLine !== undefined) {
            params.set("hasServiceLine", `${hasServiceLine}`);
        }
        if (searchString) {
            params.set("searchString", searchString);
        }
        const response = await this.starlinkConnect.Request(accountNumber, `${url}${params.toString() ? `?${params.toString()}` : ""}`, "GET");
        return UserTerminalResponseV2PaginatedServiceResponseSchema.parse(response);
    }
    async addUserTerminal(accountNumber, request) {
        const url = "user-terminals";
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST", request);
        return ServiceResponseSchema.parse(response);
    }
    async removeUserTerminal(accountNumber, deviceId) {
        const url = `user-terminals/${deviceId}`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "DELETE");
        return ServiceResponseSchema.parse(response);
    }
    async rebootUserTerminal(accountNumber, deviceId) {
        const url = `user-terminals/${deviceId}/reboot`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "POST");
        return ServiceResponseSchema.parse(response);
    }
    async assignUserTerminalsConfig(accountNumber, request) {
        const url = "user-terminals/configs/assign";
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", request);
        return ServiceResponseSchema.parse(response);
    }
    async getL2VpnCircuits(accountNumber) {
        const url = "user-terminals/l2vpn";
        const response = await this.starlinkConnect.Request(accountNumber, url, "GET");
        return L2VpnCircuitResponseListServiceResponseSchema.parse(response);
    }
    async setUserTerminalL2VpnVlan(accountNumber, deviceId, circuits) {
        const url = `/user-terminals/${deviceId}/l2vpn`;
        const response = await this.starlinkConnect.Request(accountNumber, url, "PUT", circuits);
        return ServiceResponseSchema.parse(response);
    }
}
export default Starlink;
//# sourceMappingURL=Starlink.js.map
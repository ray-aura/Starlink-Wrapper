import Starlink_Connect from "./starlink_connect.js";
import type {
  AddressCreateRequest,
  AddressUpdateRequest,
  AssignRoutersConfigRequest,
  AssignUserTerminalsConfigRequest,
  CreateContactOnAccountRequest,
  CreateManagedCustomerRequest,
  DeleteTlsConfigRequest,
  DeviceIdRequest,
  L2VpnSetCircuitRequest,
  QueryDataUsageRequest,
  RecurringDataBlocksRequest,
  RouterConfigRequest,
  SandboxHeartbeatRequest,
  ServiceLineCreateRequest,
  ServiceLineSetPublicIpRequest,
  ServiceLineUpdateNicknameRequest,
  StarlinkArgs,
  TlsConfigCreateRequest,
  UpdateBatchSandboxClientRequest,
  UpdateContactOnAccountRequest,
  UpdateDefaultConfigRequest,
  UpdateServiceLineProductRequest,
} from "./Types.js";
import {
  AccountResponseV2ServiceResponseSchema,
  AddressResponsePaginatedServiceResponseSchema,
  AddressResponseServiceResponseSchema,
  CreateManagedCustomerResponseServiceResponseSchema,
  DefaultRouterConfigResponseServiceResponseSchema,
  L2VpnCircuitResponseListServiceResponseSchema,
  OptInResponseServiceResponseSchema,
  PartialPeriodResponseListServiceResponseSchema,
  RouterConfigResponseV2PaginatedServiceResponseSchema,
  RouterConfigResponseV2ServiceResponseSchema,
  RouterLocalContentResponseListServiceResponseSchema,
  AddRouterLocalContentResponseV2ServiceResponseSchema,
  RouterResponseV2ServiceResponseSchema,
  SandboxClientResponsePaginatedServiceResponseSchema,
  ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema,
  ServiceLineResponsePaginatedServiceResponseSchema,
  ServiceLineResponseServiceResponseSchema,
  ServiceResponseSchema,
  SubscriptionProductResponsePaginatedServiceResponseSchema,
  UserResponsePaginatedServiceResponseSchema,
  UserResponseServiceResponseSchema,
  UserTerminalResponseV2PaginatedServiceResponseSchema,
} from "./StarlinkTypes/schemas.js";

export default class Starlink {
  private static instance: Starlink;
  protected starlinkConnect: Starlink_Connect;

  private constructor(configurations: StarlinkArgs | StarlinkArgs[]) {
    this.starlinkConnect = new Starlink_Connect(configurations);
  }

  public static getInstance(): Starlink {
    if (!Starlink.instance) {
      throw new Error("Starlink V2 API was not initialized");
    }
    return Starlink.instance;
  }

  public static init(configurations: StarlinkArgs | StarlinkArgs[]) {
    if (Starlink.instance) {
      console.warn(
        "Package is already initialized and this configuration will be ingnored",
      );
      return Starlink.instance;
    }
    this.instance = new Starlink(configurations);
    return this.instance;
  }

  public async getAccount(accountNumber: string) {
    const url = "account";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return AccountResponseV2ServiceResponseSchema.parse(response);
  }

  public async DataUsageQuery(
    accountNumber: string,
    page: number = 0,
    limit: number = 50,
    queryDataUsageRequest: QueryDataUsageRequest = {
      activeServiceLinesOnly: true,
    },
  ) {
    const url = "data-usage/query";
    const params = new URLSearchParams({ page: `${page}`, limit: `${limit}` });

    //console.log(`${url}?${params.toString()}`);
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "POST",
      queryDataUsageRequest,
    );
    return ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema.parse(
      response,
    );
  }

  public async getProducts(accountNumber: string, page: number = 0) {
    const url = "products";
    const params = new URLSearchParams({ page: `${page}` });

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET",
    );
    return SubscriptionProductResponsePaginatedServiceResponseSchema.parse(
      response,
    );
  }

  public async getAddresses(
    accountNumber: string,
    addressIds?: string[],
    metadata?: string,
    page: number = 0,
  ) {
    const url = "addresses";
    const params = new URLSearchParams();
    params.set("page", `${page}`);
    if (addressIds) {
      addressIds.forEach((id) => params.append("addressIds", id));
    }
    if (metadata) {
      params.set("metadata", metadata);
    }

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET",
    );
    return AddressResponsePaginatedServiceResponseSchema.parse(response);
  }

  public async createAddress(
    accountNumber: string,
    address: AddressCreateRequest,
  ) {
    const url = "addresses";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      address,
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }

  public async getAddress(accountNumber: string, addressReferenceId: string) {
    const url = `addresses/${addressReferenceId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }

  public async updateAddress(
    accountNumber: string,
    addressReferenceId: string,
    address: AddressUpdateRequest,
  ) {
    const url = `addresses/${addressReferenceId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      address,
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }

  public async getContacts(accountNumber: string, page: number = 0) {
    const url = "contacts";
    const params = new URLSearchParams({ page: `${page}` });

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET",
    );
    return UserResponsePaginatedServiceResponseSchema.parse(response);
  }

  public async createContact(
    accountNumber: string,
    contact: CreateContactOnAccountRequest,
  ) {
    const url = "contacts";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      contact,
    );
    return UserResponseServiceResponseSchema.parse(response);
  }

  public async deleteContact(accountNumber: string, subjectId: string) {
    const url = `contacts/${subjectId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async updateContact(
    accountNumber: string,
    subjectId: string,
    contact: UpdateContactOnAccountRequest,
  ) {
    const url = `contacts/${subjectId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      contact,
    );
    return UserResponseServiceResponseSchema.parse(response);
  }

  public async createManagedCustomer(
    accountNumber: string,
    customer: CreateManagedCustomerRequest,
  ) {
    const url = "managed/customers";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      customer,
    );
    return CreateManagedCustomerResponseServiceResponseSchema.parse(response);
  }

  public async getRouter(accountNumber: string, routerId: string) {
    const url = `/routers/${routerId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return RouterResponseV2ServiceResponseSchema.parse(response);
  }

  public async getRouterConfigs(accountNumber: string, page: number = 0) {
    const url = "/routers/configs";
    const params = new URLSearchParams({ page: `${page}` });

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET",
    );
    return RouterConfigResponseV2PaginatedServiceResponseSchema.parse(response);
  }

  public async createRouterConfig(
    accountNumber: string,
    config: RouterConfigRequest,
  ) {
    const url = "routers/configs";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      config,
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }

  public async getRouterConfig(accountNumber: string, configId: string) {
    const url = `routers/configs/${configId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }

  public async updateRouterConfig(
    accountNumber: string,
    configId: string,
    config: RouterConfigRequest,
  ) {
    const url = `routers/configs/${configId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      config,
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }

  public async assignRoutersConfig(
    accountNumber: string,
    request: AssignRoutersConfigRequest,
  ) {
    const url = "routers/configs/assign";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async getDefaultRouterConfig(accountNumber: string) {
    const url = "routers/configs/default";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }

  public async setDefaultRouterConfig(
    accountNumber: string,
    request: UpdateDefaultConfigRequest,
  ) {
    const url = "routers/configs/default";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async getTlsConfigs(accountNumber: string, page: number = 0) {
    const url = "routers/configs/tls";
    const params = new URLSearchParams({ page: `${page}` });

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET",
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }

  public async createTlsConfig(
    accountNumber: string,
    request: TlsConfigCreateRequest,
  ) {
    const url = "routers/configs/tls";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request,
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }

  public async deleteTlsConfig(
    accountNumber: string,
    request: DeleteTlsConfigRequest,
  ) {
    const url = "routers/configs/tls";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async uploadRouterLocalContent(
    accountNumber: string,
    fileContent: string,
    fileName: string,
  ) {
    const url = "routers/local-content";
    const formData = new FormData();
    const blob = new Blob([fileContent]);
    formData.append("File", blob, fileName);

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      formData,
    );
    return AddRouterLocalContentResponseV2ServiceResponseSchema.parse(response);
  }

  public async getRouterLocalContentFiles(accountNumber: string) {
    const url = "routers/local-content";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return RouterLocalContentResponseListServiceResponseSchema.parse(response);
  }

  public async getSandboxClients(
    accountNumber: string,
    sandboxId?: number,
    expiryAfter?: string,
    page: number = 0,
  ) {
    const url = "routers/sandbox/clients";
    const params = new URLSearchParams({ page: `${page}` });
    if (sandboxId !== undefined) {
      params.set("sandboxId", `${sandboxId}`);
    }
    if (expiryAfter) {
      params.set("expiryAfter", expiryAfter);
    }

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET",
    );
    return SandboxClientResponsePaginatedServiceResponseSchema.parse(response);
  }

  public async batchUpdateSandboxClients(
    accountNumber: string,
    requests: UpdateBatchSandboxClientRequest[],
  ) {
    const url = "routers/sandbox/clients";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      requests,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async sendSandboxHeartbeat(
    accountNumber: string,
    request: SandboxHeartbeatRequest,
  ) {
    const url = "routers/sandbox/heartbeat";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async rebootRouter(accountNumber: string, routerId: string) {
    const url = `routers/${routerId}/reboot`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async getServiceLines(
    accountNumber: string,
    addressReferenceId?: string,
    searchString?: string,
    dataPoolId?: string,
    page: number = 0,
    orderByCreatedDateDescending: boolean = true,
  ) {
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

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET",
    );
    return ServiceLineResponsePaginatedServiceResponseSchema.parse(response);
  }

  public async createServiceLine(
    accountNumber: string,
    request: ServiceLineCreateRequest,
  ) {
    const url = "service-lines";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request,
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }

  public async getServiceLine(
    accountNumber: string,
    serviceLineNumber: string,
  ) {
    const url = `service-lines/${serviceLineNumber}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }

  public async deactivateServiceLine(
    accountNumber: string,
    serviceLineNumber: string,
    reasonForCancellation?: string,
    endNow: boolean = false,
  ) {
    const url = `service-lines/${serviceLineNumber}`;
    const params = new URLSearchParams({ endNow: `${endNow}` });
    if (reasonForCancellation) {
      params.set("reasonForCancellation", reasonForCancellation);
    }

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "DELETE",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async setServiceLineNickname(
    accountNumber: string,
    serviceLineNumber: string,
    request: ServiceLineUpdateNicknameRequest,
  ) {
    const url = `service-lines/${serviceLineNumber}/nickname`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }

  public async updateServiceLineProduct(
    accountNumber: string,
    serviceLineNumber: string,
    request: UpdateServiceLineProductRequest,
  ) {
    const url = `service-lines/${serviceLineNumber}/product`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async setServiceLinePublicIp(
    accountNumber: string,
    serviceLineNumber: string,
    request: ServiceLineSetPublicIpRequest,
  ) {
    const url = `service-lines/${serviceLineNumber}/public-ip`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async optInPriorityData(
    accountNumber: string,
    serviceLineNumber: string,
  ) {
    const url = `service-lines/${serviceLineNumber}/data/opt-in`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
    );
    return OptInResponseServiceResponseSchema.parse(response);
  }

  public async optOutPriorityData(
    accountNumber: string,
    serviceLineNumber: string,
  ) {
    const url = `service-lines/${serviceLineNumber}/data/opt-out`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
    );
    return OptInResponseServiceResponseSchema.parse(response);
  }

  public async addUserTerminalToServiceLine(
    accountNumber: string,
    serviceLineNumber: string,
    request: DeviceIdRequest,
  ) {
    const url = `service-lines/${serviceLineNumber}/user-terminals`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async removeUserTerminalFromServiceLine(
    accountNumber: string,
    serviceLineNumber: string,
    deviceId: string,
  ) {
    const url = `service-lines/${serviceLineNumber}/user-terminals/${deviceId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async setServiceLineRecurringDataBlocks(
    accountNumber: string,
    serviceLineNumber: string,
    request: RecurringDataBlocksRequest,
  ) {
    const url = `service-lines/${serviceLineNumber}/data/recurring`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async addServiceLineTopUpData(
    accountNumber: string,
    serviceLineNumber: string,
    request: { productId: string; count: number },
  ) {
    const url = `service-lines/${serviceLineNumber}/data/top-up`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async getBillingPartialPeriods(
    accountNumber: string,
    serviceLineNumber: string,
  ) {
    const url = `service-lines/${serviceLineNumber}/billing-cycles/partial-periods`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return PartialPeriodResponseListServiceResponseSchema.parse(response);
  }

  public async getUserTerminals(
    accountNumber: string,
    serviceLineNumbers?: string[],
    userTerminalIds?: string[],
    hasServiceLine?: boolean,
    searchString?: string,
    page: number = 0,
  ) {
    const url = "user-terminals";
    const params = new URLSearchParams({ page: `${page}` });
    if (serviceLineNumbers) {
      serviceLineNumbers.forEach((sl) =>
        params.append("serviceLineNumbers", sl),
      );
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

    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET",
    );
    return UserTerminalResponseV2PaginatedServiceResponseSchema.parse(response);
  }

  public async addUserTerminal(
    accountNumber: string,
    request: DeviceIdRequest,
  ) {
    const url = "user-terminals";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async removeUserTerminal(accountNumber: string, deviceId: string) {
    const url = `user-terminals/${deviceId}`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async rebootUserTerminal(accountNumber: string, deviceId: string) {
    const url = `user-terminals/${deviceId}/reboot`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
    );
    return ServiceResponseSchema.parse(response);
  }

  public async assignUserTerminalsConfig(
    accountNumber: string,
    request: AssignUserTerminalsConfigRequest,
  ) {
    const url = "user-terminals/configs/assign";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request,
    );
    return ServiceResponseSchema.parse(response);
  }

  public async getL2VpnCircuits(accountNumber: string) {
    const url = "user-terminals/l2vpn";

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET",
    );
    return L2VpnCircuitResponseListServiceResponseSchema.parse(response);
  }

  public async setUserTerminalL2VpnVlan(
    accountNumber: string,
    deviceId: string,
    circuits: L2VpnSetCircuitRequest[],
  ) {
    const url = `/user-terminals/${deviceId}/l2vpn`;

    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      circuits,
    );
    return ServiceResponseSchema.parse(response);
  }
}

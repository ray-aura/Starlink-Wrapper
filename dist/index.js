// src/starlink_connect.ts
var Starlink_Connect = class {
  baseURL = "https://web-api.starlink.com/enterprise/v2/";
  // maps AccountNumber -> credentialsMap
  credentialsMap;
  constructor(configurations) {
    this.credentialsMap = /* @__PURE__ */ new Map();
    if (Array.isArray(configurations)) {
      configurations.forEach((i) => {
        this.credentialsMap.set(i.AccountNumber, {
          ClientId: i.ClientId,
          ClientSecret: i.ClientSecret,
          AccessToken: null,
          TimeCreated: null
        });
      });
    } else {
      this.credentialsMap.set(configurations.AccountNumber, {
        ClientId: configurations.ClientId,
        ClientSecret: configurations.ClientSecret,
        AccessToken: null,
        TimeCreated: null
      });
    }
  }
  async fetchAccessToken(config) {
    const response = await fetch(
      "https://starlink.com/api/auth/connect/token",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          client_id: config.ClientId,
          client_secret: config.ClientSecret,
          grant_type: "client_credentials"
        })
      }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch access token: ${response.statusText}`);
    }
    let accessToken = await response.json();
    if (!accessToken) {
      throw new Error("Access token not received in the response.");
    }
    return accessToken?.access_token;
  }
  /*
   * Need to add better token use of token for the return type
   * Need to add check it see if token is still valid
   *
   *
   * */
  async getHeader(accountNumber) {
    let token = "";
    let configurations = this.credentialsMap.get(accountNumber);
    if (!configurations) {
      throw new Error("This account was not set up at initalisation");
    }
    if (!configurations.AccessToken || this.IsAccessTokenExpired(configurations.TimeCreated)) {
      token = await this.fetchAccessToken(configurations);
      this.credentialsMap.set(accountNumber, {
        AccessToken: token,
        TimeCreated: Date.now(),
        ClientSecret: configurations.ClientSecret,
        ClientId: configurations.ClientId
      });
    }
    return {
      Accept: "application/json",
      Authorization: `Bearer ${configurations.AccessToken || token}`,
      "Content-Type": "application/json"
    };
  }
  IsAccessTokenExpired(TimeCreated) {
    if (!TimeCreated) return true;
    let now = (Date.now() - TimeCreated) / 1e3;
    if (now >= 900) return true;
    return false;
  }
  async Request(accountNumber, url, method, body = {}) {
    let full_url = `${this.baseURL}${url}`;
    let headers = await this.getHeader(accountNumber);
    let options = {};
    if (method === "GET") {
      options = {
        method,
        headers
      };
    } else {
      options = {
        method,
        headers,
        body: JSON.stringify(body)
      };
    }
    console.log(options);
    for (let i = 0; i < 2; i++) {
      const response = await fetch(full_url, options);
      if (response.status === 401) {
        options.headers = await this.getHeader(accountNumber);
        continue;
      }
      if (response.ok) {
        return await response.json();
      } else {
        console.log(response);
        throw new Error(
          `Error when making request with status code : ${response.status}`
        );
      }
    }
  }
};
var starlink_connect_default = Starlink_Connect;

// src/StarlinkTypes/schemas.ts
import { z } from "zod";
var ValidationResultSchema = z.object({
  memberNames: z.array(z.string()).nullable(),
  errorMessage: z.string().nullable()
});
var ServiceResponseSchema = z.object({
  errors: z.array(ValidationResultSchema).nullable(),
  warnings: z.array(ValidationResultSchema).nullable(),
  information: z.array(z.string()).nullable(),
  isValid: z.boolean()
});
var AccountResponseV2Schema = z.object({
  accountNumber: z.string(),
  regionCode: z.string(),
  accountName: z.string().nullable(),
  activeSuspensions: z.array(z.string()).nullable()
});
var AccountResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: AccountResponseV2Schema
});
var AddressResponseSchema = z.object({
  addressReferenceId: z.string(),
  addressLines: z.array(z.string()),
  locality: z.string().nullable(),
  administrativeArea: z.string().nullable(),
  administrativeAreaCode: z.string(),
  region: z.string().nullable(),
  regionCode: z.string(),
  postalCode: z.string().nullable(),
  metadata: z.string().nullable(),
  formattedAddress: z.string(),
  latitude: z.number(),
  longitude: z.number()
});
var AddressResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddressResponseSchema
});
var AddressResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(AddressResponseSchema).nullable(),
  totalCount: z.number()
});
var AddressResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddressResponsePaginatedSchema
});
var UserResponseSchema = z.object({
  subjectId: z.string(),
  email: z.string(),
  roles: z.array(z.string())
});
var UserResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserResponseSchema
});
var UserResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(UserResponseSchema).nullable(),
  totalCount: z.number()
});
var UserResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserResponsePaginatedSchema
});
var UserLacksRequiredPermissionSchema = z.object({
  accountId: z.string().nullable(),
  requiredPermission: z.object({
    featureAccess: z.number(),
    permission: z.number()
  }),
  featureAccessString: z.string().nullable(),
  permissionString: z.string().nullable()
});
var UserLacksRequiredPermissionServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserLacksRequiredPermissionSchema
});
var DataProductResponseSchema = z.object({
  productId: z.string().nullable(),
  price: z.number(),
  isoCurrencyCode: z.string().nullable(),
  dataAmount: z.number(),
  dataUnit: z.string().nullable()
});
var DataProductsResponseSchema = z.object({
  topUpProduct: DataProductResponseSchema.nullable(),
  dataBlockProducts: z.array(DataProductResponseSchema).nullable()
});
var SubscriptionProductResponseSchema = z.object({
  productReferenceId: z.string(),
  name: z.string(),
  price: z.number(),
  isoCurrencyCode: z.string(),
  isSla: z.boolean(),
  maxNumberOfUserTerminals: z.number().nullable(),
  dataProducts: DataProductsResponseSchema.nullable()
});
var SubscriptionProductResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(SubscriptionProductResponseSchema).nullable(),
  totalCount: z.number()
});
var SubscriptionProductResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: SubscriptionProductResponsePaginatedSchema
});
var CreateManagedCustomerResponseSchema = z.object({
  accountNumber: z.string().nullable(),
  serviceAccountClientId: z.string().nullable(),
  serviceAccountSecret: z.string().nullable()
});
var CreateManagedCustomerResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: CreateManagedCustomerResponseSchema
});
var RouterResponseV2Schema = z.object({
  routerId: z.string(),
  nickname: z.string().nullable(),
  userTerminalId: z.string(),
  configId: z.string().nullable(),
  hardwareVersion: z.string().nullable(),
  lastBonded: z.string().nullable()
});
var RouterResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterResponseV2Schema
});
var RouterConfigResponseV2Schema = z.object({
  configId: z.string(),
  nickname: z.string(),
  routerConfigJson: z.string()
});
var RouterConfigResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterConfigResponseV2Schema
});
var RouterConfigResponseV2PaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(RouterConfigResponseV2Schema).nullable(),
  totalCount: z.number()
});
var RouterConfigResponseV2PaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterConfigResponseV2PaginatedSchema
});
var DefaultRouterConfigResponseSchema = z.object({
  configId: z.string().nullable()
});
var DefaultRouterConfigResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: DefaultRouterConfigResponseSchema
});
var RouterLocalContentResponseSchema = z.object({
  nickname: z.string(),
  uploadDate: z.string(),
  fileContentId: z.string(),
  fileContentHash: z.string()
});
var RouterLocalContentResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: z.array(RouterLocalContentResponseSchema).nullable()
});
var AddRouterLocalContentResponseV2Schema = z.object({
  nickname: z.string(),
  fileContentId: z.string(),
  fileContentHash: z.string()
});
var AddRouterLocalContentResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddRouterLocalContentResponseV2Schema
});
var SandboxClientResponseSchema = z.object({
  clientId: z.string().nullable(),
  sandboxId: z.number(),
  expiry: z.string()
});
var SandboxClientResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(SandboxClientResponseSchema).nullable(),
  totalCount: z.number()
});
var SandboxClientResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: SandboxClientResponsePaginatedSchema
});
var DataBucketTypeSchema = z.number();
var DataOverageTypeSchema = z.number();
var DataUsageOverageLineSchema = z.object({
  restricted: DataBucketTypeSchema,
  unrestricted: DataBucketTypeSchema,
  pricePerGB: z.number(),
  usageLimitGB: z.number(),
  overageAmountGB: z.number(),
  consumedAmountGB: z.number(),
  overagePrice: z.number(),
  productId: z.string().nullable(),
  dataOverageType: DataOverageTypeSchema,
  activeFrom: z.string().nullable()
});
var DataUsageDailyV2Schema = z.object({
  date: z.string(),
  priorityGB: z.number(),
  optInPriorityGB: z.number(),
  standardGB: z.number(),
  nonBillableGB: z.number()
});
var DataServicePlanSchema = z.object({
  isoCurrencyCode: z.string(),
  isMobilePlan: z.boolean(),
  activeFrom: z.string().nullable(),
  subscriptionActiveFrom: z.string().nullable(),
  subscriptionEndDate: z.string().nullable(),
  overageName: z.string().nullable(),
  overageDescription: z.string().nullable(),
  isOptedIntoOverage: z.boolean(),
  overageLineDeactivatedDate: z.string().nullable(),
  overageLine: DataUsageOverageLineSchema.nullable(),
  dataPoolUsage: z.any().nullable(),
  productId: z.string(),
  usageLimitGB: z.number(),
  dataCategoryMapping: z.record(z.string(), DataBucketTypeSchema)
});
var DataBlockSummaryResponseSchema = z.object({
  productId: z.string().nullable(),
  startDate: z.string(),
  expirationDate: z.string(),
  count: z.number(),
  dataAmount: z.number(),
  dataUnitType: z.string().nullable()
});
var ServiceLineDataBlocksSummaryResponseSchema = z.object({
  recurringBlocksCurrentBillingCycle: z.array(DataBlockSummaryResponseSchema).nullable(),
  recurringBlocksNextBillingCycle: z.array(DataBlockSummaryResponseSchema).nullable(),
  delayedProductRecurringBlocksNextCycle: z.array(DataBlockSummaryResponseSchema).nullable(),
  topUpBlocksOptInPurchase: z.array(DataBlockSummaryResponseSchema).nullable(),
  topUpBlocksOneTimePurchase: z.array(DataBlockSummaryResponseSchema).nullable()
});
var DataUsageBillingCycleV2Schema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  dailyDataUsage: z.array(DataUsageDailyV2Schema).nullable(),
  overageLines: z.array(DataUsageOverageLineSchema).nullable(),
  dataPoolUsage: z.array(z.any()).nullable(),
  totalPriorityGB: z.number(),
  totalStandardGB: z.number(),
  totalOptInPriorityGB: z.number(),
  totalNonBillableGB: z.number()
});
var DataPoolUsagePublicResponseSchema = z.object({
  accountNumber: z.string().nullable(),
  dataPoolId: z.string(),
  lastUpdated: z.string(),
  dataBlocks: z.array(z.any())
});
var ServiceLineDataUsageForBillingCyclesSchema = z.object({
  accountNumber: z.string().nullable(),
  serviceLineNumber: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  billingCycles: z.array(DataUsageBillingCycleV2Schema).nullable(),
  servicePlan: DataServicePlanSchema.nullable(),
  lastUpdated: z.string().nullable()
});
var ServiceLineDataUsageForBillingCyclesPaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(ServiceLineDataUsageForBillingCyclesSchema).nullable(),
  totalCount: z.number()
});
var ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineDataUsageForBillingCyclesPaginatedSchema
});
var AviationMetadataResponseSchema = z.object({
  tailNumber: z.string().nullable(),
  seatCount: z.number(),
  airlineIataCode: z.string().nullable(),
  aircraftIataCode: z.string().nullable(),
  airlineIcaoCode: z.string().nullable(),
  aircraftIcaoCode: z.string().nullable(),
  stcNumber: z.string().nullable()
});
var L2VpnCircuitResponseSchema = z.object({
  circuitId: z.string().nullable(),
  popName: z.string().nullable()
});
var L2VpnCircuitResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: z.array(L2VpnCircuitResponseSchema).nullable()
});
var L2VpnCircuitDefinitionSchema = z.object({
  circuitId: z.string(),
  customerVlans: z.array(z.number()),
  serviceVlan: z.number().nullable()
});
var RouterResponseV2ForUserTerminalSchema = z.object({
  routerId: z.string(),
  nickname: z.string().nullable(),
  userTerminalId: z.string(),
  configId: z.string().nullable(),
  hardwareVersion: z.string().nullable(),
  lastBonded: z.string().nullable()
});
var UserTerminalResponseV2Schema = z.object({
  userTerminalId: z.string(),
  nickname: z.string().nullable(),
  kitSerialNumber: z.string(),
  dishSerialNumber: z.string(),
  serviceLineNumber: z.string().nullable(),
  l2VpnCircuits: z.array(L2VpnCircuitDefinitionSchema),
  routers: z.array(RouterResponseV2ForUserTerminalSchema)
});
var UserTerminalResponseV2PaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(UserTerminalResponseV2Schema).nullable(),
  totalCount: z.number()
});
var UserTerminalResponseV2PaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserTerminalResponseV2PaginatedSchema
});
var ServiceLineResponseSchema = z.object({
  addressReferenceId: z.string(),
  serviceLineNumber: z.string(),
  nickname: z.string().nullable(),
  productReferenceId: z.string(),
  delayedProductId: z.string().nullable(),
  optInProductId: z.string().nullable(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  publicIp: z.boolean(),
  active: z.boolean(),
  aviationMetadata: AviationMetadataResponseSchema.nullable(),
  dataBlocks: ServiceLineDataBlocksSummaryResponseSchema.nullable()
});
var ServiceLineResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineResponseSchema
});
var ServiceLineResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(ServiceLineResponseSchema).nullable(),
  totalCount: z.number()
});
var ServiceLineResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineResponsePaginatedSchema
});
var PartialPeriodResponseSchema = z.object({
  productReferenceId: z.string(),
  periodStart: z.string(),
  periodEnd: z.string()
});
var PartialPeriodResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: z.array(PartialPeriodResponseSchema).nullable()
});
var OptInResponseSchema = z.object({
  productId: z.string(),
  activatedDate: z.string(),
  deactivatedDate: z.string().nullable(),
  isInOptInCoolDown: z.boolean()
});
var OptInResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: OptInResponseSchema
});

// src/Starlink.ts
var Starlink = class _Starlink {
  static instance;
  starlinkConnect;
  constructor(configurations) {
    this.starlinkConnect = new starlink_connect_default(configurations);
  }
  static getInstance() {
    if (!_Starlink.instance) {
      throw new Error("Starlink V2 API was not initialized");
    }
    return _Starlink.instance;
  }
  static init(configurations) {
    if (_Starlink.instance) {
      console.warn(
        "Package is already initialized and this configuration will be ingnored"
      );
      return _Starlink.instance;
    }
    return new _Starlink(configurations);
  }
  async getAccount(accountNumber) {
    const url = "account";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return AccountResponseV2ServiceResponseSchema.parse(response);
  }
  async DataUsageQuery(accountNumber, page = 0, limit = 50, queryDataUsageRequest = {
    activeServiceLinesOnly: true
  }) {
    const url = "data-usage/query";
    const params = new URLSearchParams({ page: `${page}`, limit: `${limit}` });
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "POST",
      queryDataUsageRequest
    );
    return ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema.parse(
      response
    );
  }
  async getProducts(accountNumber, page = 0) {
    const url = "products";
    const params = new URLSearchParams({ page: `${page}` });
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET"
    );
    return SubscriptionProductResponsePaginatedServiceResponseSchema.parse(
      response
    );
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
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET"
    );
    return AddressResponsePaginatedServiceResponseSchema.parse(response);
  }
  async createAddress(accountNumber, address) {
    const url = "addresses";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      address
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }
  async getAddress(accountNumber, addressReferenceId) {
    const url = `addresses/${addressReferenceId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }
  async updateAddress(accountNumber, addressReferenceId, address) {
    const url = `addresses/${addressReferenceId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      address
    );
    return AddressResponseServiceResponseSchema.parse(response);
  }
  async getContacts(accountNumber, page = 0) {
    const url = "contacts";
    const params = new URLSearchParams({ page: `${page}` });
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET"
    );
    return UserResponsePaginatedServiceResponseSchema.parse(response);
  }
  async createContact(accountNumber, contact) {
    const url = "contacts";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      contact
    );
    return UserResponseServiceResponseSchema.parse(response);
  }
  async deleteContact(accountNumber, subjectId) {
    const url = `contacts/${subjectId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE"
    );
    return ServiceResponseSchema.parse(response);
  }
  async updateContact(accountNumber, subjectId, contact) {
    const url = `contacts/${subjectId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      contact
    );
    return UserResponseServiceResponseSchema.parse(response);
  }
  async createManagedCustomer(accountNumber, customer) {
    const url = "managed/customers";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      customer
    );
    return CreateManagedCustomerResponseServiceResponseSchema.parse(response);
  }
  async getRouter(accountNumber, routerId) {
    const url = `/routers/${routerId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return RouterResponseV2ServiceResponseSchema.parse(response);
  }
  async getRouterConfigs(accountNumber, page = 0) {
    const url = "/routers/configs";
    const params = new URLSearchParams({ page: `${page}` });
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET"
    );
    return RouterConfigResponseV2PaginatedServiceResponseSchema.parse(response);
  }
  async createRouterConfig(accountNumber, config) {
    const url = "routers/configs";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      config
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }
  async getRouterConfig(accountNumber, configId) {
    const url = `routers/configs/${configId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }
  async updateRouterConfig(accountNumber, configId, config) {
    const url = `routers/configs/${configId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      config
    );
    return RouterConfigResponseV2ServiceResponseSchema.parse(response);
  }
  async assignRoutersConfig(accountNumber, request) {
    const url = "routers/configs/assign";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async getDefaultRouterConfig(accountNumber) {
    const url = "routers/configs/default";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }
  async setDefaultRouterConfig(accountNumber, request) {
    const url = "routers/configs/default";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async getTlsConfigs(accountNumber, page = 0) {
    const url = "routers/configs/tls";
    const params = new URLSearchParams({ page: `${page}` });
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET"
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }
  async createTlsConfig(accountNumber, request) {
    const url = "routers/configs/tls";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request
    );
    return DefaultRouterConfigResponseServiceResponseSchema.parse(response);
  }
  async deleteTlsConfig(accountNumber, request) {
    const url = "routers/configs/tls";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async uploadRouterLocalContent(accountNumber, fileContent, fileName) {
    const url = "routers/local-content";
    const formData = new FormData();
    const blob = new Blob([fileContent]);
    formData.append("File", blob, fileName);
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      formData
    );
    return AddRouterLocalContentResponseV2ServiceResponseSchema.parse(response);
  }
  async getRouterLocalContentFiles(accountNumber) {
    const url = "routers/local-content";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return RouterLocalContentResponseListServiceResponseSchema.parse(response);
  }
  async getSandboxClients(accountNumber, sandboxId, expiryAfter, page = 0) {
    const url = "routers/sandbox/clients";
    const params = new URLSearchParams({ page: `${page}` });
    if (sandboxId !== void 0) {
      params.set("sandboxId", `${sandboxId}`);
    }
    if (expiryAfter) {
      params.set("expiryAfter", expiryAfter);
    }
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}?${params.toString()}`,
      "GET"
    );
    return SandboxClientResponsePaginatedServiceResponseSchema.parse(response);
  }
  async batchUpdateSandboxClients(accountNumber, requests) {
    const url = "routers/sandbox/clients";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      requests
    );
    return ServiceResponseSchema.parse(response);
  }
  async sendSandboxHeartbeat(accountNumber, request) {
    const url = "routers/sandbox/heartbeat";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async rebootRouter(accountNumber, routerId) {
    const url = `routers/${routerId}/reboot`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST"
    );
    return ServiceResponseSchema.parse(response);
  }
  async getServiceLines(accountNumber, addressReferenceId, searchString, dataPoolId, page = 0, orderByCreatedDateDescending = true) {
    const url = "service-lines";
    const params = new URLSearchParams({
      page: `${page}`,
      orderByCreatedDateDescending: `${orderByCreatedDateDescending}`
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
      "GET"
    );
    return ServiceLineResponsePaginatedServiceResponseSchema.parse(response);
  }
  async createServiceLine(accountNumber, request) {
    const url = "service-lines";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }
  async getServiceLine(accountNumber, serviceLineNumber) {
    const url = `service-lines/${serviceLineNumber}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }
  async deactivateServiceLine(accountNumber, serviceLineNumber, reasonForCancellation, endNow = false) {
    const url = `service-lines/${serviceLineNumber}`;
    const params = new URLSearchParams({ endNow: `${endNow}` });
    if (reasonForCancellation) {
      params.set("reasonForCancellation", reasonForCancellation);
    }
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "DELETE"
    );
    return ServiceResponseSchema.parse(response);
  }
  async setServiceLineNickname(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/nickname`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceLineResponseServiceResponseSchema.parse(response);
  }
  async updateServiceLineProduct(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/product`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async setServiceLinePublicIp(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/public-ip`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async optInPriorityData(accountNumber, serviceLineNumber) {
    const url = `service-lines/${serviceLineNumber}/data/opt-in`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST"
    );
    return OptInResponseServiceResponseSchema.parse(response);
  }
  async optOutPriorityData(accountNumber, serviceLineNumber) {
    const url = `service-lines/${serviceLineNumber}/data/opt-out`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST"
    );
    return OptInResponseServiceResponseSchema.parse(response);
  }
  async addUserTerminalToServiceLine(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/user-terminals`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async removeUserTerminalFromServiceLine(accountNumber, serviceLineNumber, deviceId) {
    const url = `service-lines/${serviceLineNumber}/user-terminals/${deviceId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE"
    );
    return ServiceResponseSchema.parse(response);
  }
  async setServiceLineRecurringDataBlocks(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/data/recurring`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async addServiceLineTopUpData(accountNumber, serviceLineNumber, request) {
    const url = `service-lines/${serviceLineNumber}/data/top-up`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async getBillingPartialPeriods(accountNumber, serviceLineNumber) {
    const url = `service-lines/${serviceLineNumber}/billing-cycles/partial-periods`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return PartialPeriodResponseListServiceResponseSchema.parse(response);
  }
  async getUserTerminals(accountNumber, serviceLineNumbers, userTerminalIds, hasServiceLine, searchString, page = 0) {
    const url = "user-terminals";
    const params = new URLSearchParams({ page: `${page}` });
    if (serviceLineNumbers) {
      serviceLineNumbers.forEach(
        (sl) => params.append("serviceLineNumbers", sl)
      );
    }
    if (userTerminalIds) {
      userTerminalIds.forEach((ut) => params.append("userTerminalIds", ut));
    }
    if (hasServiceLine !== void 0) {
      params.set("hasServiceLine", `${hasServiceLine}`);
    }
    if (searchString) {
      params.set("searchString", searchString);
    }
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString() ? `?${params.toString()}` : ""}`,
      "GET"
    );
    return UserTerminalResponseV2PaginatedServiceResponseSchema.parse(response);
  }
  async addUserTerminal(accountNumber, request) {
    const url = "user-terminals";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async removeUserTerminal(accountNumber, deviceId) {
    const url = `user-terminals/${deviceId}`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "DELETE"
    );
    return ServiceResponseSchema.parse(response);
  }
  async rebootUserTerminal(accountNumber, deviceId) {
    const url = `user-terminals/${deviceId}/reboot`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "POST"
    );
    return ServiceResponseSchema.parse(response);
  }
  async assignUserTerminalsConfig(accountNumber, request) {
    const url = "user-terminals/configs/assign";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      request
    );
    return ServiceResponseSchema.parse(response);
  }
  async getL2VpnCircuits(accountNumber) {
    const url = "user-terminals/l2vpn";
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "GET"
    );
    return L2VpnCircuitResponseListServiceResponseSchema.parse(response);
  }
  async setUserTerminalL2VpnVlan(accountNumber, deviceId, circuits) {
    const url = `/user-terminals/${deviceId}/l2vpn`;
    const response = await this.starlinkConnect.Request(
      accountNumber,
      url,
      "PUT",
      circuits
    );
    return ServiceResponseSchema.parse(response);
  }
};
export {
  AccountResponseV2Schema,
  AccountResponseV2ServiceResponseSchema,
  AddRouterLocalContentResponseV2Schema,
  AddRouterLocalContentResponseV2ServiceResponseSchema,
  AddressResponsePaginatedSchema,
  AddressResponsePaginatedServiceResponseSchema,
  AddressResponseSchema,
  AddressResponseServiceResponseSchema,
  AviationMetadataResponseSchema,
  CreateManagedCustomerResponseSchema,
  CreateManagedCustomerResponseServiceResponseSchema,
  DataBlockSummaryResponseSchema,
  DataBucketTypeSchema,
  DataOverageTypeSchema,
  DataPoolUsagePublicResponseSchema,
  DataProductResponseSchema,
  DataProductsResponseSchema,
  DataServicePlanSchema,
  DataUsageBillingCycleV2Schema,
  DataUsageDailyV2Schema,
  DataUsageOverageLineSchema,
  DefaultRouterConfigResponseSchema,
  DefaultRouterConfigResponseServiceResponseSchema,
  L2VpnCircuitDefinitionSchema,
  L2VpnCircuitResponseListServiceResponseSchema,
  L2VpnCircuitResponseSchema,
  OptInResponseSchema,
  OptInResponseServiceResponseSchema,
  PartialPeriodResponseListServiceResponseSchema,
  PartialPeriodResponseSchema,
  RouterConfigResponseV2PaginatedSchema,
  RouterConfigResponseV2PaginatedServiceResponseSchema,
  RouterConfigResponseV2Schema,
  RouterConfigResponseV2ServiceResponseSchema,
  RouterLocalContentResponseListServiceResponseSchema,
  RouterLocalContentResponseSchema,
  RouterResponseV2ForUserTerminalSchema,
  RouterResponseV2Schema,
  RouterResponseV2ServiceResponseSchema,
  SandboxClientResponsePaginatedSchema,
  SandboxClientResponsePaginatedServiceResponseSchema,
  SandboxClientResponseSchema,
  ServiceLineDataBlocksSummaryResponseSchema,
  ServiceLineDataUsageForBillingCyclesPaginatedSchema,
  ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema,
  ServiceLineDataUsageForBillingCyclesSchema,
  ServiceLineResponsePaginatedSchema,
  ServiceLineResponsePaginatedServiceResponseSchema,
  ServiceLineResponseSchema,
  ServiceLineResponseServiceResponseSchema,
  ServiceResponseSchema,
  Starlink,
  SubscriptionProductResponsePaginatedSchema,
  SubscriptionProductResponsePaginatedServiceResponseSchema,
  SubscriptionProductResponseSchema,
  UserLacksRequiredPermissionSchema,
  UserLacksRequiredPermissionServiceResponseSchema,
  UserResponsePaginatedSchema,
  UserResponsePaginatedServiceResponseSchema,
  UserResponseSchema,
  UserResponseServiceResponseSchema,
  UserTerminalResponseV2PaginatedSchema,
  UserTerminalResponseV2PaginatedServiceResponseSchema,
  UserTerminalResponseV2Schema,
  ValidationResultSchema
};
//# sourceMappingURL=index.js.map
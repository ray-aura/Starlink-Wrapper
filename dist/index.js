"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AccountResponseV2Schema: () => AccountResponseV2Schema,
  AccountResponseV2ServiceResponseSchema: () => AccountResponseV2ServiceResponseSchema,
  AddRouterLocalContentResponseV2Schema: () => AddRouterLocalContentResponseV2Schema,
  AddRouterLocalContentResponseV2ServiceResponseSchema: () => AddRouterLocalContentResponseV2ServiceResponseSchema,
  AddressResponsePaginatedSchema: () => AddressResponsePaginatedSchema,
  AddressResponsePaginatedServiceResponseSchema: () => AddressResponsePaginatedServiceResponseSchema,
  AddressResponseSchema: () => AddressResponseSchema,
  AddressResponseServiceResponseSchema: () => AddressResponseServiceResponseSchema,
  AviationMetadataResponseSchema: () => AviationMetadataResponseSchema,
  CreateManagedCustomerResponseSchema: () => CreateManagedCustomerResponseSchema,
  CreateManagedCustomerResponseServiceResponseSchema: () => CreateManagedCustomerResponseServiceResponseSchema,
  DataBlockSummaryResponseSchema: () => DataBlockSummaryResponseSchema,
  DataBucketTypeSchema: () => DataBucketTypeSchema,
  DataOverageTypeSchema: () => DataOverageTypeSchema,
  DataPoolUsagePublicResponseSchema: () => DataPoolUsagePublicResponseSchema,
  DataProductResponseSchema: () => DataProductResponseSchema,
  DataProductsResponseSchema: () => DataProductsResponseSchema,
  DataServicePlanSchema: () => DataServicePlanSchema,
  DataUsageBillingCycleV2Schema: () => DataUsageBillingCycleV2Schema,
  DataUsageDailyV2Schema: () => DataUsageDailyV2Schema,
  DataUsageOverageLineSchema: () => DataUsageOverageLineSchema,
  DefaultRouterConfigResponseSchema: () => DefaultRouterConfigResponseSchema,
  DefaultRouterConfigResponseServiceResponseSchema: () => DefaultRouterConfigResponseServiceResponseSchema,
  L2VpnCircuitDefinitionSchema: () => L2VpnCircuitDefinitionSchema,
  L2VpnCircuitResponseListServiceResponseSchema: () => L2VpnCircuitResponseListServiceResponseSchema,
  L2VpnCircuitResponseSchema: () => L2VpnCircuitResponseSchema,
  OptInResponseSchema: () => OptInResponseSchema,
  OptInResponseServiceResponseSchema: () => OptInResponseServiceResponseSchema,
  PartialPeriodResponseListServiceResponseSchema: () => PartialPeriodResponseListServiceResponseSchema,
  PartialPeriodResponseSchema: () => PartialPeriodResponseSchema,
  RouterConfigResponseV2PaginatedSchema: () => RouterConfigResponseV2PaginatedSchema,
  RouterConfigResponseV2PaginatedServiceResponseSchema: () => RouterConfigResponseV2PaginatedServiceResponseSchema,
  RouterConfigResponseV2Schema: () => RouterConfigResponseV2Schema,
  RouterConfigResponseV2ServiceResponseSchema: () => RouterConfigResponseV2ServiceResponseSchema,
  RouterLocalContentResponseListServiceResponseSchema: () => RouterLocalContentResponseListServiceResponseSchema,
  RouterLocalContentResponseSchema: () => RouterLocalContentResponseSchema,
  RouterResponseV2ForUserTerminalSchema: () => RouterResponseV2ForUserTerminalSchema,
  RouterResponseV2Schema: () => RouterResponseV2Schema,
  RouterResponseV2ServiceResponseSchema: () => RouterResponseV2ServiceResponseSchema,
  SandboxClientResponsePaginatedSchema: () => SandboxClientResponsePaginatedSchema,
  SandboxClientResponsePaginatedServiceResponseSchema: () => SandboxClientResponsePaginatedServiceResponseSchema,
  SandboxClientResponseSchema: () => SandboxClientResponseSchema,
  ServiceLineDataBlocksSummaryResponseSchema: () => ServiceLineDataBlocksSummaryResponseSchema,
  ServiceLineDataUsageForBillingCyclesPaginatedSchema: () => ServiceLineDataUsageForBillingCyclesPaginatedSchema,
  ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema: () => ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema,
  ServiceLineDataUsageForBillingCyclesSchema: () => ServiceLineDataUsageForBillingCyclesSchema,
  ServiceLineResponsePaginatedSchema: () => ServiceLineResponsePaginatedSchema,
  ServiceLineResponsePaginatedServiceResponseSchema: () => ServiceLineResponsePaginatedServiceResponseSchema,
  ServiceLineResponseSchema: () => ServiceLineResponseSchema,
  ServiceLineResponseServiceResponseSchema: () => ServiceLineResponseServiceResponseSchema,
  ServiceResponseSchema: () => ServiceResponseSchema,
  Starlink: () => Starlink,
  SubscriptionProductResponsePaginatedSchema: () => SubscriptionProductResponsePaginatedSchema,
  SubscriptionProductResponsePaginatedServiceResponseSchema: () => SubscriptionProductResponsePaginatedServiceResponseSchema,
  SubscriptionProductResponseSchema: () => SubscriptionProductResponseSchema,
  UserLacksRequiredPermissionSchema: () => UserLacksRequiredPermissionSchema,
  UserLacksRequiredPermissionServiceResponseSchema: () => UserLacksRequiredPermissionServiceResponseSchema,
  UserResponsePaginatedSchema: () => UserResponsePaginatedSchema,
  UserResponsePaginatedServiceResponseSchema: () => UserResponsePaginatedServiceResponseSchema,
  UserResponseSchema: () => UserResponseSchema,
  UserResponseServiceResponseSchema: () => UserResponseServiceResponseSchema,
  UserTerminalResponseV2PaginatedSchema: () => UserTerminalResponseV2PaginatedSchema,
  UserTerminalResponseV2PaginatedServiceResponseSchema: () => UserTerminalResponseV2PaginatedServiceResponseSchema,
  UserTerminalResponseV2Schema: () => UserTerminalResponseV2Schema,
  ValidationResultSchema: () => ValidationResultSchema
});
module.exports = __toCommonJS(index_exports);

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
      Authorization: `Bearer ${configurations.AccessToken || token}`
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
    console.log(full_url);
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
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(
          `Error when making request with status code : ${response.status}`
        );
      }
    }
  }
};
var starlink_connect_default = Starlink_Connect;

// src/StarlinkTypes/schemas.ts
var import_zod = require("zod");
var ValidationResultSchema = import_zod.z.object({
  memberNames: import_zod.z.array(import_zod.z.string()).nullable(),
  errorMessage: import_zod.z.string().nullable()
});
var ServiceResponseSchema = import_zod.z.object({
  errors: import_zod.z.array(ValidationResultSchema).nullable(),
  warnings: import_zod.z.array(ValidationResultSchema).nullable(),
  information: import_zod.z.array(import_zod.z.string()).nullable(),
  isValid: import_zod.z.boolean()
});
var AccountResponseV2Schema = import_zod.z.object({
  accountNumber: import_zod.z.string(),
  regionCode: import_zod.z.string(),
  accountName: import_zod.z.string().nullable(),
  activeSuspensions: import_zod.z.array(import_zod.z.string()).nullable()
});
var AccountResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: AccountResponseV2Schema
});
var AddressResponseSchema = import_zod.z.object({
  addressReferenceId: import_zod.z.string(),
  addressLines: import_zod.z.array(import_zod.z.string()),
  locality: import_zod.z.string().nullable(),
  administrativeArea: import_zod.z.string().nullable(),
  administrativeAreaCode: import_zod.z.string(),
  region: import_zod.z.string().nullable(),
  regionCode: import_zod.z.string(),
  postalCode: import_zod.z.string().nullable(),
  metadata: import_zod.z.string().nullable(),
  formattedAddress: import_zod.z.string(),
  latitude: import_zod.z.number(),
  longitude: import_zod.z.number()
});
var AddressResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddressResponseSchema
});
var AddressResponsePaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(AddressResponseSchema).nullable(),
  totalCount: import_zod.z.number()
});
var AddressResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddressResponsePaginatedSchema
});
var UserResponseSchema = import_zod.z.object({
  subjectId: import_zod.z.string(),
  email: import_zod.z.string(),
  roles: import_zod.z.array(import_zod.z.string())
});
var UserResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserResponseSchema
});
var UserResponsePaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(UserResponseSchema).nullable(),
  totalCount: import_zod.z.number()
});
var UserResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserResponsePaginatedSchema
});
var UserLacksRequiredPermissionSchema = import_zod.z.object({
  accountId: import_zod.z.string().nullable(),
  requiredPermission: import_zod.z.object({
    featureAccess: import_zod.z.number(),
    permission: import_zod.z.number()
  }),
  featureAccessString: import_zod.z.string().nullable(),
  permissionString: import_zod.z.string().nullable()
});
var UserLacksRequiredPermissionServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserLacksRequiredPermissionSchema
});
var DataProductResponseSchema = import_zod.z.object({
  productId: import_zod.z.string().nullable(),
  price: import_zod.z.number(),
  isoCurrencyCode: import_zod.z.string().nullable(),
  dataAmount: import_zod.z.number(),
  dataUnit: import_zod.z.string().nullable()
});
var DataProductsResponseSchema = import_zod.z.object({
  topUpProduct: DataProductResponseSchema.nullable(),
  dataBlockProducts: import_zod.z.array(DataProductResponseSchema).nullable()
});
var SubscriptionProductResponseSchema = import_zod.z.object({
  productReferenceId: import_zod.z.string(),
  name: import_zod.z.string(),
  price: import_zod.z.number(),
  isoCurrencyCode: import_zod.z.string(),
  isSla: import_zod.z.boolean(),
  maxNumberOfUserTerminals: import_zod.z.number().nullable(),
  dataProducts: DataProductsResponseSchema.nullable()
});
var SubscriptionProductResponsePaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(SubscriptionProductResponseSchema).nullable(),
  totalCount: import_zod.z.number()
});
var SubscriptionProductResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: SubscriptionProductResponsePaginatedSchema
});
var CreateManagedCustomerResponseSchema = import_zod.z.object({
  accountNumber: import_zod.z.string().nullable(),
  serviceAccountClientId: import_zod.z.string().nullable(),
  serviceAccountSecret: import_zod.z.string().nullable()
});
var CreateManagedCustomerResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: CreateManagedCustomerResponseSchema
});
var RouterResponseV2Schema = import_zod.z.object({
  routerId: import_zod.z.string(),
  nickname: import_zod.z.string().nullable(),
  userTerminalId: import_zod.z.string(),
  configId: import_zod.z.string().nullable(),
  hardwareVersion: import_zod.z.string().nullable(),
  lastBonded: import_zod.z.string().nullable()
});
var RouterResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterResponseV2Schema
});
var RouterConfigResponseV2Schema = import_zod.z.object({
  configId: import_zod.z.string(),
  nickname: import_zod.z.string(),
  routerConfigJson: import_zod.z.string()
});
var RouterConfigResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterConfigResponseV2Schema
});
var RouterConfigResponseV2PaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(RouterConfigResponseV2Schema).nullable(),
  totalCount: import_zod.z.number()
});
var RouterConfigResponseV2PaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: RouterConfigResponseV2PaginatedSchema
});
var DefaultRouterConfigResponseSchema = import_zod.z.object({
  configId: import_zod.z.string().nullable()
});
var DefaultRouterConfigResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: DefaultRouterConfigResponseSchema
});
var RouterLocalContentResponseSchema = import_zod.z.object({
  nickname: import_zod.z.string(),
  uploadDate: import_zod.z.string(),
  fileContentId: import_zod.z.string(),
  fileContentHash: import_zod.z.string()
});
var RouterLocalContentResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: import_zod.z.array(RouterLocalContentResponseSchema).nullable()
});
var AddRouterLocalContentResponseV2Schema = import_zod.z.object({
  nickname: import_zod.z.string(),
  fileContentId: import_zod.z.string(),
  fileContentHash: import_zod.z.string()
});
var AddRouterLocalContentResponseV2ServiceResponseSchema = ServiceResponseSchema.extend({
  content: AddRouterLocalContentResponseV2Schema
});
var SandboxClientResponseSchema = import_zod.z.object({
  clientId: import_zod.z.string().nullable(),
  sandboxId: import_zod.z.number(),
  expiry: import_zod.z.string()
});
var SandboxClientResponsePaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(SandboxClientResponseSchema).nullable(),
  totalCount: import_zod.z.number()
});
var SandboxClientResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: SandboxClientResponsePaginatedSchema
});
var DataBucketTypeSchema = import_zod.z.number();
var DataOverageTypeSchema = import_zod.z.number();
var DataUsageOverageLineSchema = import_zod.z.object({
  restricted: DataBucketTypeSchema,
  unrestricted: DataBucketTypeSchema,
  pricePerGB: import_zod.z.number(),
  usageLimitGB: import_zod.z.number(),
  overageAmountGB: import_zod.z.number(),
  consumedAmountGB: import_zod.z.number(),
  overagePrice: import_zod.z.number(),
  productId: import_zod.z.string().nullable(),
  dataOverageType: DataOverageTypeSchema,
  activeFrom: import_zod.z.string().nullable()
});
var DataUsageDailyV2Schema = import_zod.z.object({
  date: import_zod.z.string(),
  priorityGB: import_zod.z.number(),
  optInPriorityGB: import_zod.z.number(),
  standardGB: import_zod.z.number(),
  nonBillableGB: import_zod.z.number()
});
var DataServicePlanSchema = import_zod.z.object({
  isoCurrencyCode: import_zod.z.string(),
  isMobilePlan: import_zod.z.boolean(),
  activeFrom: import_zod.z.string().nullable(),
  subscriptionActiveFrom: import_zod.z.string().nullable(),
  subscriptionEndDate: import_zod.z.string().nullable(),
  overageName: import_zod.z.string().nullable(),
  overageDescription: import_zod.z.string().nullable(),
  isOptedIntoOverage: import_zod.z.boolean(),
  overageLineDeactivatedDate: import_zod.z.string().nullable(),
  overageLine: DataUsageOverageLineSchema.nullable(),
  dataPoolUsage: import_zod.z.any().nullable(),
  productId: import_zod.z.string(),
  usageLimitGB: import_zod.z.number(),
  dataCategoryMapping: import_zod.z.record(import_zod.z.string(), DataBucketTypeSchema)
});
var DataBlockSummaryResponseSchema = import_zod.z.object({
  productId: import_zod.z.string().nullable(),
  startDate: import_zod.z.string(),
  expirationDate: import_zod.z.string(),
  count: import_zod.z.number(),
  dataAmount: import_zod.z.number(),
  dataUnitType: import_zod.z.string().nullable()
});
var ServiceLineDataBlocksSummaryResponseSchema = import_zod.z.object({
  recurringBlocksCurrentBillingCycle: import_zod.z.array(DataBlockSummaryResponseSchema).nullable(),
  recurringBlocksNextBillingCycle: import_zod.z.array(DataBlockSummaryResponseSchema).nullable(),
  delayedProductRecurringBlocksNextCycle: import_zod.z.array(DataBlockSummaryResponseSchema).nullable(),
  topUpBlocksOptInPurchase: import_zod.z.array(DataBlockSummaryResponseSchema).nullable(),
  topUpBlocksOneTimePurchase: import_zod.z.array(DataBlockSummaryResponseSchema).nullable()
});
var DataUsageBillingCycleV2Schema = import_zod.z.object({
  startDate: import_zod.z.string(),
  endDate: import_zod.z.string(),
  dailyDataUsage: import_zod.z.array(DataUsageDailyV2Schema).nullable(),
  overageLines: import_zod.z.array(DataUsageOverageLineSchema).nullable(),
  dataPoolUsage: import_zod.z.array(import_zod.z.any()).nullable(),
  totalPriorityGB: import_zod.z.number(),
  totalStandardGB: import_zod.z.number(),
  totalOptInPriorityGB: import_zod.z.number(),
  totalNonBillableGB: import_zod.z.number()
});
var DataPoolUsagePublicResponseSchema = import_zod.z.object({
  accountNumber: import_zod.z.string().nullable(),
  dataPoolId: import_zod.z.string(),
  lastUpdated: import_zod.z.string(),
  dataBlocks: import_zod.z.array(import_zod.z.any())
});
var ServiceLineDataUsageForBillingCyclesSchema = import_zod.z.object({
  accountNumber: import_zod.z.string().nullable(),
  serviceLineNumber: import_zod.z.string().nullable(),
  startDate: import_zod.z.string(),
  endDate: import_zod.z.string(),
  billingCycles: import_zod.z.array(DataUsageBillingCycleV2Schema).nullable(),
  servicePlan: DataServicePlanSchema.nullable(),
  lastUpdated: import_zod.z.string().nullable()
});
var ServiceLineDataUsageForBillingCyclesPaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(ServiceLineDataUsageForBillingCyclesSchema).nullable(),
  totalCount: import_zod.z.number()
});
var ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineDataUsageForBillingCyclesPaginatedSchema
});
var AviationMetadataResponseSchema = import_zod.z.object({
  tailNumber: import_zod.z.string().nullable(),
  seatCount: import_zod.z.number(),
  airlineIataCode: import_zod.z.string().nullable(),
  aircraftIataCode: import_zod.z.string().nullable(),
  airlineIcaoCode: import_zod.z.string().nullable(),
  aircraftIcaoCode: import_zod.z.string().nullable(),
  stcNumber: import_zod.z.string().nullable()
});
var L2VpnCircuitResponseSchema = import_zod.z.object({
  circuitId: import_zod.z.string().nullable(),
  popName: import_zod.z.string().nullable()
});
var L2VpnCircuitResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: import_zod.z.array(L2VpnCircuitResponseSchema).nullable()
});
var L2VpnCircuitDefinitionSchema = import_zod.z.object({
  circuitId: import_zod.z.string(),
  customerVlans: import_zod.z.array(import_zod.z.number()),
  serviceVlan: import_zod.z.number().nullable()
});
var RouterResponseV2ForUserTerminalSchema = import_zod.z.object({
  routerId: import_zod.z.string(),
  nickname: import_zod.z.string().nullable(),
  userTerminalId: import_zod.z.string(),
  configId: import_zod.z.string().nullable(),
  hardwareVersion: import_zod.z.string().nullable(),
  lastBonded: import_zod.z.string().nullable()
});
var UserTerminalResponseV2Schema = import_zod.z.object({
  userTerminalId: import_zod.z.string(),
  nickname: import_zod.z.string().nullable(),
  kitSerialNumber: import_zod.z.string(),
  dishSerialNumber: import_zod.z.string(),
  serviceLineNumber: import_zod.z.string().nullable(),
  l2VpnCircuits: import_zod.z.array(L2VpnCircuitDefinitionSchema),
  routers: import_zod.z.array(RouterResponseV2ForUserTerminalSchema)
});
var UserTerminalResponseV2PaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(UserTerminalResponseV2Schema).nullable(),
  totalCount: import_zod.z.number()
});
var UserTerminalResponseV2PaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserTerminalResponseV2PaginatedSchema
});
var ServiceLineResponseSchema = import_zod.z.object({
  addressReferenceId: import_zod.z.string(),
  serviceLineNumber: import_zod.z.string(),
  nickname: import_zod.z.string().nullable(),
  productReferenceId: import_zod.z.string(),
  delayedProductId: import_zod.z.string().nullable(),
  optInProductId: import_zod.z.string().nullable(),
  startDate: import_zod.z.string().nullable(),
  endDate: import_zod.z.string().nullable(),
  publicIp: import_zod.z.boolean(),
  active: import_zod.z.boolean(),
  aviationMetadata: AviationMetadataResponseSchema.nullable(),
  dataBlocks: ServiceLineDataBlocksSummaryResponseSchema.nullable()
});
var ServiceLineResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineResponseSchema
});
var ServiceLineResponsePaginatedSchema = import_zod.z.object({
  pageIndex: import_zod.z.number(),
  limit: import_zod.z.number(),
  isLastPage: import_zod.z.boolean(),
  results: import_zod.z.array(ServiceLineResponseSchema).nullable(),
  totalCount: import_zod.z.number()
});
var ServiceLineResponsePaginatedServiceResponseSchema = ServiceResponseSchema.extend({
  content: ServiceLineResponsePaginatedSchema
});
var PartialPeriodResponseSchema = import_zod.z.object({
  productReferenceId: import_zod.z.string(),
  periodStart: import_zod.z.string(),
  periodEnd: import_zod.z.string()
});
var PartialPeriodResponseListServiceResponseSchema = ServiceResponseSchema.extend({
  content: import_zod.z.array(PartialPeriodResponseSchema).nullable()
});
var OptInResponseSchema = import_zod.z.object({
  productId: import_zod.z.string(),
  activatedDate: import_zod.z.string(),
  deactivatedDate: import_zod.z.string().nullable(),
  isInOptInCoolDown: import_zod.z.boolean()
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
    if (!_Starlink.instance) {
      console.warn(
        "Package is already initialized and this configuration will be ingnored"
      );
      _Starlink.instance = new _Starlink(configurations);
    }
    return _Starlink.instance;
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
    console.log(`${url}?${params.toString()}`);
    const response = await this.starlinkConnect.Request(
      accountNumber,
      `${url}${params.toString()}`,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map
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
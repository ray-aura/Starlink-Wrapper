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
//# sourceMappingURL=index.mjs.map
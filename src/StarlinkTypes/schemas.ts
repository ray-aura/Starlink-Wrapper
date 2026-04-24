import { z } from "zod";

export const ValidationResultSchema = z.object({
  memberNames: z.array(z.string()).nullable(),
  errorMessage: z.string().nullable(),
});

export const ServiceResponseSchema = z.object({
  errors: z.array(ValidationResultSchema).nullable(),
  warnings: z.array(ValidationResultSchema).nullable(),
  information: z.array(z.string()).nullable(),
  isValid: z.boolean(),
});

export const AccountResponseV2Schema = z.object({
  accountNumber: z.string(),
  regionCode: z.string(),
  accountName: z.string().nullable(),
  activeSuspensions: z.array(z.string()).nullable(),
});

export const AccountResponseV2ServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: AccountResponseV2Schema,
  });

export const AddressResponseSchema = z.object({
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
  longitude: z.number(),
});

export const AddressResponseServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: AddressResponseSchema,
  });

export const AddressResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(AddressResponseSchema).nullable(),
  totalCount: z.number(),
});

export const AddressResponsePaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: AddressResponsePaginatedSchema,
  });

export const UserResponseSchema = z.object({
  subjectId: z.string(),
  email: z.string(),
  roles: z.array(z.string()),
});

export const UserResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: UserResponseSchema,
});

export const UserResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(UserResponseSchema).nullable(),
  totalCount: z.number(),
});

export const UserResponsePaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: UserResponsePaginatedSchema,
  });

export const UserLacksRequiredPermissionSchema = z.object({
  accountId: z.string().nullable(),
  requiredPermission: z.object({
    featureAccess: z.number(),
    permission: z.number(),
  }),
  featureAccessString: z.string().nullable(),
  permissionString: z.string().nullable(),
});

export const UserLacksRequiredPermissionServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: UserLacksRequiredPermissionSchema,
  });

export const DataProductResponseSchema = z.object({
  productId: z.string().nullable(),
  price: z.number(),
  isoCurrencyCode: z.string().nullable(),
  dataAmount: z.number(),
  dataUnit: z.string().nullable(),
});

export const DataProductsResponseSchema = z.object({
  topUpProduct: DataProductResponseSchema.nullable(),
  dataBlockProducts: z.array(DataProductResponseSchema).nullable(),
});

export const SubscriptionProductResponseSchema = z.object({
  productReferenceId: z.string(),
  name: z.string(),
  price: z.number(),
  isoCurrencyCode: z.string(),
  isSla: z.boolean(),
  maxNumberOfUserTerminals: z.number().nullable(),
  dataProducts: DataProductsResponseSchema.nullable(),
});

export const SubscriptionProductResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(SubscriptionProductResponseSchema).nullable(),
  totalCount: z.number(),
});

export const SubscriptionProductResponsePaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: SubscriptionProductResponsePaginatedSchema,
  });

export const CreateManagedCustomerResponseSchema = z.object({
  accountNumber: z.string().nullable(),
  serviceAccountClientId: z.string().nullable(),
  serviceAccountSecret: z.string().nullable(),
});

export const CreateManagedCustomerResponseServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: CreateManagedCustomerResponseSchema,
  });

export const RouterResponseV2Schema = z.object({
  routerId: z.string(),
  nickname: z.string().nullable(),
  userTerminalId: z.string(),
  configId: z.string().nullable(),
  hardwareVersion: z.string().nullable(),
  lastBonded: z.string().nullable(),
});

export const RouterResponseV2ServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: RouterResponseV2Schema,
  });

export const RouterConfigResponseV2Schema = z.object({
  configId: z.string(),
  nickname: z.string().nullable(),
  routerConfigJson: z.string(),
});

export const RouterConfigResponseV2ServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: RouterConfigResponseV2Schema,
  });

export const RouterConfigResponseV2PaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(RouterConfigResponseV2Schema).nullable(),
  totalCount: z.number(),
});

export const RouterConfigResponseV2PaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: RouterConfigResponseV2PaginatedSchema,
  });

export const DefaultRouterConfigResponseSchema = z.object({
  configId: z.string().nullable(),
});

export const DefaultRouterConfigResponseServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: DefaultRouterConfigResponseSchema,
  });

export const RouterLocalContentResponseSchema = z.object({
  nickname: z.string(),
  uploadDate: z.string(),
  fileContentId: z.string(),
  fileContentHash: z.string(),
});

export const RouterLocalContentResponseListServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: z.array(RouterLocalContentResponseSchema).nullable(),
  });

export const AddRouterLocalContentResponseV2Schema = z.object({
  nickname: z.string(),
  fileContentId: z.string(),
  fileContentHash: z.string(),
});

export const AddRouterLocalContentResponseV2ServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: AddRouterLocalContentResponseV2Schema,
  });

export const SandboxClientResponseSchema = z.object({
  clientId: z.string().nullable(),
  sandboxId: z.number(),
  expiry: z.string(),
});

export const SandboxClientResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(SandboxClientResponseSchema).nullable(),
  totalCount: z.number(),
});

export const SandboxClientResponsePaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: SandboxClientResponsePaginatedSchema,
  });

export const DataBucketTypeSchema = z.number();
export const DataOverageTypeSchema = z.number();

export const DataUsageOverageLineSchema = z.object({
  restricted: DataBucketTypeSchema,
  unrestricted: DataBucketTypeSchema,
  pricePerGB: z.number(),
  usageLimitGB: z.number(),
  overageAmountGB: z.number(),
  consumedAmountGB: z.number(),
  overagePrice: z.number(),
  productId: z.string().nullable(),
  dataOverageType: DataOverageTypeSchema,
  activeFrom: z.string().nullable(),
});

export const DataUsageDailyV2Schema = z.object({
  date: z.string(),
  priorityGB: z.number(),
  optInPriorityGB: z.number(),
  standardGB: z.number(),
  nonBillableGB: z.number(),
});

export const DataServicePlanSchema = z.object({
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
  dataCategoryMapping: z.record(z.string(), DataBucketTypeSchema),
});

export const DataBlockSummaryResponseSchema = z.object({
  productId: z.string().nullable(),
  startDate: z.string(),
  expirationDate: z.string(),
  count: z.number(),
  dataAmount: z.number(),
  dataUnitType: z.string().nullable(),
});

export const ServiceLineDataBlocksSummaryResponseSchema = z.object({
  recurringBlocksCurrentBillingCycle: z
    .array(DataBlockSummaryResponseSchema)
    .nullable(),
  recurringBlocksNextBillingCycle: z
    .array(DataBlockSummaryResponseSchema)
    .nullable(),
  delayedProductRecurringBlocksNextCycle: z
    .array(DataBlockSummaryResponseSchema)
    .nullable(),
  topUpBlocksOptInPurchase: z.array(DataBlockSummaryResponseSchema).nullable(),
  topUpBlocksOneTimePurchase: z
    .array(DataBlockSummaryResponseSchema)
    .nullable(),
});

export const DataUsageBillingCycleV2Schema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  dailyDataUsage: z.array(DataUsageDailyV2Schema).nullable(),
  overageLines: z.array(DataUsageOverageLineSchema).nullable(),
  dataPoolUsage: z.array(z.any()).nullable(),
  totalPriorityGB: z.number(),
  totalStandardGB: z.number(),
  totalOptInPriorityGB: z.number(),
  totalNonBillableGB: z.number(),
});

export const DataPoolUsagePublicResponseSchema = z.object({
  accountNumber: z.string().nullable(),
  dataPoolId: z.string(),
  lastUpdated: z.string(),
  dataBlocks: z.array(z.any()),
});

export const ServiceLineDataUsageForBillingCyclesSchema = z.object({
  accountNumber: z.string().nullable(),
  serviceLineNumber: z.string().nullable(),
  startDate: z.string(),
  endDate: z.string(),
  billingCycles: z.array(DataUsageBillingCycleV2Schema).nullable(),
  servicePlan: DataServicePlanSchema.nullable(),
  lastUpdated: z.string().nullable(),
});

export const ServiceLineDataUsageForBillingCyclesPaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(ServiceLineDataUsageForBillingCyclesSchema).nullable(),
  totalCount: z.number(),
});

export const ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: ServiceLineDataUsageForBillingCyclesPaginatedSchema,
  });

export const AviationMetadataResponseSchema = z.object({
  tailNumber: z.string().nullable(),
  seatCount: z.number(),
  airlineIataCode: z.string().nullable(),
  aircraftIataCode: z.string().nullable(),
  airlineIcaoCode: z.string().nullable(),
  aircraftIcaoCode: z.string().nullable(),
  stcNumber: z.string().nullable(),
});

export const L2VpnCircuitResponseSchema = z.object({
  circuitId: z.string().nullable(),
  popName: z.string().nullable(),
});

export const L2VpnCircuitResponseListServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: z.array(L2VpnCircuitResponseSchema).nullable(),
  });

export const L2VpnCircuitDefinitionSchema = z.object({
  circuitId: z.string(),
  customerVlans: z.array(z.number()),
  serviceVlan: z.number().nullable(),
});

export const RouterResponseV2ForUserTerminalSchema = z.object({
  routerId: z.string(),
  nickname: z.string().nullable(),
  userTerminalId: z.string(),
  configId: z.string().nullable(),
  hardwareVersion: z.string().nullable(),
  lastBonded: z.string().nullable(),
});

export const UserTerminalResponseV2Schema = z.object({
  userTerminalId: z.string(),
  nickname: z.string().nullable(),
  kitSerialNumber: z.string(),
  dishSerialNumber: z.string(),
  serviceLineNumber: z.string().nullable(),
  l2VpnCircuits: z.array(L2VpnCircuitDefinitionSchema),
  routers: z.array(RouterResponseV2ForUserTerminalSchema),
});

export const UserTerminalResponseV2PaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(UserTerminalResponseV2Schema).nullable(),
  totalCount: z.number(),
});

export const UserTerminalResponseV2PaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: UserTerminalResponseV2PaginatedSchema,
  });

export const ServiceLineResponseSchema = z.object({
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
  dataBlocks: ServiceLineDataBlocksSummaryResponseSchema.nullable(),
});

export const ServiceLineResponseServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: ServiceLineResponseSchema,
  });

export const ServiceLineResponsePaginatedSchema = z.object({
  pageIndex: z.number(),
  limit: z.number(),
  isLastPage: z.boolean(),
  results: z.array(ServiceLineResponseSchema).nullable(),
  totalCount: z.number(),
});

export const ServiceLineResponsePaginatedServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: ServiceLineResponsePaginatedSchema,
  });

export const PartialPeriodResponseSchema = z.object({
  productReferenceId: z.string(),
  periodStart: z.string(),
  periodEnd: z.string(),
});

export const PartialPeriodResponseListServiceResponseSchema =
  ServiceResponseSchema.extend({
    content: z.array(PartialPeriodResponseSchema).nullable(),
  });

export const OptInResponseSchema = z.object({
  productId: z.string(),
  activatedDate: z.string(),
  deactivatedDate: z.string().nullable(),
  isInOptInCoolDown: z.boolean(),
});

export const OptInResponseServiceResponseSchema = ServiceResponseSchema.extend({
  content: OptInResponseSchema,
});

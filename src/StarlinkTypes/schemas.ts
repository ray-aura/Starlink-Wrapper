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

/*
let TelemetryQuery = z.object({
  userTerminals: z.object({}).nullable(),
  routers: z.object({}).nullable(),
});

let TelemetryUserTerminal = z.object({
  userTerminalId: z.string(),
  timestamp: z.string(),
  uptimeSeconds: z.
Device uptime in seconds

softwareVersion
string | null
Device software version

downlinkThroughputMbps
double | null
Downlink throughput in megabits per second

uplinkThroughputMbps
double | null
Uplink throughput in megabits per second

popPingDropRateAvg
float | null
Drop rate of pings to Starlink PoP over previous 15s

popPingLatencyMsAvg
int32 | null
Latency of pings to Starlink PoP over previous 15s

obstructionPercentTime
double | null
Moving average percentage of time the user terminal has been obstructed

signalQuality
float | null
Signal strength converted to 0-1 range, with high values indicating strong signal

countryCode
string | null
The ISO 3166 country code the user terminal is located in, or XZ for international waters.

inTerritorialWaters
boolean | null
Whether the user terminal is currently in territorial waters of the country.

h3CellId
string | null
Hex string of H3 Cell Id at R5 resolution

secondsUntilSoftwareUpdateRebootPossible
int32 | null
Seconds until terminal can schedule a reboot if software deferral is enabled. Value is null if unknown or software deferral is not enabled (default)

alertSoftwareUpdateRebootPending
boolean | null
Terminal software update is pending, it will reboot at the next scheduled reboot time. Null if unknown

alertDataOverageRateLimited
boolean | null
Terminal is rate limited because it is out of priority data. Null if unknown

alertEthernetSlowLink10
boolean | null
Ethernet link speed is negotiated to 10 Mbps. Null if unknown

alertEthernetSlowLink100
boolean | null
Ethernet link speed is negotiated to 100 Mbps. Null if unknown

alertPsuOtpThrottling
boolean | null
Terminal power supply is signaling it is very hot and close to shutting down. Null if unknown

alertPopChange
boolean | null
Terminal connected Point of Presence (PoP) has changed, which may cause short service disruption and IP change. Null if unknown

alertActuatorMotorStuck
boolean | null
Terminal actuator motor is stuck. Null if unknown

alertMastNotVertical
boolean | null
Terminal is not installed with the mast within 30 degrees of vertical. Null if unknown

alertUnableToAlign
boolean | null
Terminal is unable to reach desired tilt direction. Null if unknown

alertHighTimeObstruction
boolean | null
Terminal is detecting frequent obstructions in the field of view. Null if unknown

alertDisabledNoActiveServiceLine
boolean | null
Terminal is disabled because it is not on an active service line. Null if unknown

alertDisabledTooFarFromServiceAddress
boolean | null
Terminal is disabled because it it is too far from its service address. Null if unknown

alertDisabledNoServiceInOcean
boolean | null
Terminal is disabled because it is in the ocean without a service line that supports maritime. Null if unknown

alertDisabledBlockedCountry
boolean | null
Terminal is disabled because it is in a restricted service country. Null if unknown

alertDisabledMovingTooFast
boolean | null
Terminal is disabled because it is moving too fast without an aviation plan. Null if unknown

alertDisabledDataUsageExceededQuota
boolean | null
Terminal is disabled because it has exceeded the data usage quota. Null if unknown

alertDisabledCellIsDisabled
boolean | null
Terminal is disabled because it is in a cell that will not get beams. Null if unknown

alertDisabledRoamRestricted
boolean | null
Terminal is disabled because it has roamed for too long outside of its home country. Null if unknown

alertDisabledUnknownLocation
boolean | null
Terminal is disabled because it cannot determine its location. Null if unknown

alertDisabledAccountDisabled
boolean | null
Terminal is disabled because the account is disabled. Null if unknown

alertDisabledUnsupportedSoftware
boolean | null
Terminal is disabled because the software version is not supported. Null if unknown

ipAllocations
object

ipAllocations object
userTerminalId
string
User terminal Id

timestamp
date-time
Timestamp of IP allocation, which can differ from the rest of the user terminal telemetry data

ipv4
array of strings | null
IPv4 addresses allocated

ipv6Ue
array of strings | null
IPv6UE addresses allocated

ipv6Cpe
array of strings | null
IPv6CPE addresses allocated
})

export const TelemetryQueryResponse = ServiceResponseSchema.extend({
  content: z.object({

  })
})

*/
export const telemetryResponseSchema = z.object({
  data: z.object({
    data: z.object({
      values: z.array(z.array(z.any())),
      columnNamesByDeviceType: z.record(z.string(), z.array(z.string())),
    }),
  }),
});

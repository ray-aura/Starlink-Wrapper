export interface StarlinkArgs {
    ClientId: string;
    AccountNumber: string;
    ClientSecret: string;
}
export interface StarlinkCredinitals {
    ClientId: string;
    ClientSecret: string;
    AccessToken: string | null;
    TimeCreated: number | null;
}
export interface QueryDataUsageRequest {
    serviceLineNumbers?: string[];
    previousBillingCycles?: number;
    activeServiceLinesOnly: boolean;
    queryStartDate?: Date;
}
export interface AddressCreateRequest {
    addressLines: string[];
    locality?: string;
    administrativeArea?: string;
    administrativeAreaCode: string;
    region?: string;
    regionCode: string;
    postalCode?: string;
    metadata?: string;
    formattedAddress: string;
    latitude: number;
    longitude: number;
}
export interface AddressUpdateRequest {
    addressLines: string[];
    locality?: string;
    administrativeArea?: string;
    administrativeAreaCode: string;
    region?: string;
    regionCode: string;
    postalCode?: string;
    metadata?: string;
    formattedAddress: string;
    latitude: number;
    longitude: number;
}
export interface CreateContactOnAccountRequest {
    firstName: string;
    lastName: string;
    roles: string[];
    email: string;
    phoneNumber: string;
    locale: string;
}
export interface UpdateContactOnAccountRequest {
    roles?: string[];
    phoneNumber?: string;
}
export interface CreateManagedCustomerRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    locale: string;
    businessName?: string;
}
export interface RouterConfigRequest {
    nickname?: string;
    routerConfigJson: string;
}
export interface UpdateDefaultConfigRequest {
    configId: string;
}
export interface AssignRoutersConfigRequest {
    configId?: string;
    routerIds: string[];
}
export interface AssignUserTerminalsConfigRequest {
    configId?: string;
    userTerminalIds: string[];
}
export interface TlsConfigCreateRequest {
    certificateBase64Pem: string;
    keyBase64Pem: string;
}
export interface DeleteTlsConfigRequest {
    certificateBase64Pem: string;
}
export interface SandboxHeartbeatRequest {
    healthy: boolean;
}
export interface UpdateBatchSandboxClientRequest {
    clientId: string;
    sandboxId: number;
    expiry: string;
}
export interface DeviceIdRequest {
    deviceId: string;
}
export interface L2VpnSetCircuitRequest {
    circuitId: string;
    customerVlans: number[];
    serviceVlan?: number;
}
export interface ServiceLineCreateRequest {
    addressReferenceId: string;
    productReferenceId: string;
    dataBlockProducts?: RecurringDataBlocksRequest;
}
export interface ServiceLineUpdateNicknameRequest {
    nickname: string;
}
export interface UpdateServiceLineProductRequest {
    productReferenceId: string;
    recurringDataBlocks?: AddDataBlockRequest[];
    existingDataPoolId?: string;
    delayUpdate?: boolean;
}
export interface ServiceLineSetPublicIpRequest {
    publicIp: boolean;
}
export interface AddDataBlockRequest {
    productId: string;
    count: number;
}
export interface RecurringDataBlocksRequest {
    recurringDataBlocks?: AddDataBlockRequest[];
    existingDataPoolId?: string;
}
//# sourceMappingURL=Types.d.ts.map
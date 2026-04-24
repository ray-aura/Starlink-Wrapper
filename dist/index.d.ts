import { z } from 'zod';

interface StarlinkArgs {
    ClientId: string;
    AccountNumber: string;
    ClientSecret: string;
}
interface StarlinkCredinitals {
    ClientId: string;
    ClientSecret: string;
    AccessToken: string | null;
    TimeCreated: number | null;
}
interface QueryDataUsageRequest {
    serviceLineNumbers?: string[];
    previousBillingCycles?: number;
    activeServiceLinesOnly: boolean;
    queryStartDate?: Date;
}
interface AddressCreateRequest {
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
interface AddressUpdateRequest {
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
interface CreateContactOnAccountRequest {
    firstName: string;
    lastName: string;
    roles: string[];
    email: string;
    phoneNumber: string;
    locale: string;
}
interface UpdateContactOnAccountRequest {
    roles?: string[];
    phoneNumber?: string;
}
interface CreateManagedCustomerRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    locale: string;
    businessName?: string;
}
interface RouterConfigRequest {
    nickname?: string;
    routerConfigJson: string;
}
interface UpdateDefaultConfigRequest {
    configId: string;
}
interface AssignRoutersConfigRequest {
    configId?: string;
    routerIds: string[];
}
interface AssignUserTerminalsConfigRequest {
    configId?: string;
    userTerminalIds: string[];
}
interface TlsConfigCreateRequest {
    certificateBase64Pem: string;
    keyBase64Pem: string;
}
interface DeleteTlsConfigRequest {
    certificateBase64Pem: string;
}
interface SandboxHeartbeatRequest {
    healthy: boolean;
}
interface UpdateBatchSandboxClientRequest {
    clientId: string;
    sandboxId: number;
    expiry: string;
}
interface DeviceIdRequest {
    deviceId: string;
}
interface L2VpnSetCircuitRequest {
    circuitId: string;
    customerVlans: number[];
    serviceVlan?: number;
}
interface ServiceLineCreateRequest {
    addressReferenceId: string;
    productReferenceId: string;
    dataBlockProducts?: RecurringDataBlocksRequest;
}
interface ServiceLineUpdateNicknameRequest {
    nickname: string;
}
interface UpdateServiceLineProductRequest {
    productReferenceId: string;
    recurringDataBlocks?: AddDataBlockRequest[];
    existingDataPoolId?: string;
    delayUpdate?: boolean;
}
interface ServiceLineSetPublicIpRequest {
    publicIp: boolean;
}
interface AddDataBlockRequest {
    productId: string;
    count: number;
}
interface RecurringDataBlocksRequest {
    recurringDataBlocks?: AddDataBlockRequest[];
    existingDataPoolId?: string;
}

declare class Starlink_Connect {
    private baseURL;
    private credentialsMap;
    constructor(configurations: StarlinkArgs | StarlinkArgs[]);
    private fetchAccessToken;
    private getHeader;
    private IsAccessTokenExpired;
    Request(accountNumber: string, url: string, method: "GET" | "POST" | "PUT" | "DELETE", body?: {}): Promise<any>;
}

declare class Starlink {
    private static instance;
    protected starlinkConnect: Starlink_Connect;
    private constructor();
    static getInstance(): Starlink;
    static init(configurations: StarlinkArgs | StarlinkArgs[]): Starlink;
    getAccount(accountNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            accountNumber: string;
            regionCode: string;
            accountName: string | null;
            activeSuspensions: string[] | null;
        };
    }>;
    DataUsageQuery(accountNumber: string, page?: number, limit?: number, queryDataUsageRequest?: QueryDataUsageRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                accountNumber: string | null;
                serviceLineNumber: string | null;
                startDate: string;
                endDate: string;
                billingCycles: {
                    startDate: string;
                    endDate: string;
                    dailyDataUsage: {
                        date: string;
                        priorityGB: number;
                        optInPriorityGB: number;
                        standardGB: number;
                        nonBillableGB: number;
                    }[] | null;
                    overageLines: {
                        restricted: number;
                        unrestricted: number;
                        pricePerGB: number;
                        usageLimitGB: number;
                        overageAmountGB: number;
                        consumedAmountGB: number;
                        overagePrice: number;
                        productId: string | null;
                        dataOverageType: number;
                        activeFrom: string | null;
                    }[] | null;
                    dataPoolUsage: any[] | null;
                    totalPriorityGB: number;
                    totalStandardGB: number;
                    totalOptInPriorityGB: number;
                    totalNonBillableGB: number;
                }[] | null;
                servicePlan: {
                    isoCurrencyCode: string;
                    isMobilePlan: boolean;
                    activeFrom: string | null;
                    subscriptionActiveFrom: string | null;
                    subscriptionEndDate: string | null;
                    overageName: string | null;
                    overageDescription: string | null;
                    isOptedIntoOverage: boolean;
                    overageLineDeactivatedDate: string | null;
                    overageLine: {
                        restricted: number;
                        unrestricted: number;
                        pricePerGB: number;
                        usageLimitGB: number;
                        overageAmountGB: number;
                        consumedAmountGB: number;
                        overagePrice: number;
                        productId: string | null;
                        dataOverageType: number;
                        activeFrom: string | null;
                    } | null;
                    dataPoolUsage: any;
                    productId: string;
                    usageLimitGB: number;
                    dataCategoryMapping: Record<string, number>;
                } | null;
                lastUpdated: string | null;
            }[] | null;
            totalCount: number;
        };
    }>;
    getProducts(accountNumber: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                productReferenceId: string;
                name: string;
                price: number;
                isoCurrencyCode: string;
                isSla: boolean;
                maxNumberOfUserTerminals: number | null;
                dataProducts: {
                    topUpProduct: {
                        productId: string | null;
                        price: number;
                        isoCurrencyCode: string | null;
                        dataAmount: number;
                        dataUnit: string | null;
                    } | null;
                    dataBlockProducts: {
                        productId: string | null;
                        price: number;
                        isoCurrencyCode: string | null;
                        dataAmount: number;
                        dataUnit: string | null;
                    }[] | null;
                } | null;
            }[] | null;
            totalCount: number;
        };
    }>;
    getAddresses(accountNumber: string, addressIds?: string[], metadata?: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                addressReferenceId: string;
                addressLines: string[];
                locality: string | null;
                administrativeArea: string | null;
                administrativeAreaCode: string;
                region: string | null;
                regionCode: string;
                postalCode: string | null;
                metadata: string | null;
                formattedAddress: string;
                latitude: number;
                longitude: number;
            }[] | null;
            totalCount: number;
        };
    }>;
    createAddress(accountNumber: string, address: AddressCreateRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            addressLines: string[];
            locality: string | null;
            administrativeArea: string | null;
            administrativeAreaCode: string;
            region: string | null;
            regionCode: string;
            postalCode: string | null;
            metadata: string | null;
            formattedAddress: string;
            latitude: number;
            longitude: number;
        };
    }>;
    getAddress(accountNumber: string, addressReferenceId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            addressLines: string[];
            locality: string | null;
            administrativeArea: string | null;
            administrativeAreaCode: string;
            region: string | null;
            regionCode: string;
            postalCode: string | null;
            metadata: string | null;
            formattedAddress: string;
            latitude: number;
            longitude: number;
        };
    }>;
    updateAddress(accountNumber: string, addressReferenceId: string, address: AddressUpdateRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            addressLines: string[];
            locality: string | null;
            administrativeArea: string | null;
            administrativeAreaCode: string;
            region: string | null;
            regionCode: string;
            postalCode: string | null;
            metadata: string | null;
            formattedAddress: string;
            latitude: number;
            longitude: number;
        };
    }>;
    getContacts(accountNumber: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                subjectId: string;
                email: string;
                roles: string[];
            }[] | null;
            totalCount: number;
        };
    }>;
    createContact(accountNumber: string, contact: CreateContactOnAccountRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            subjectId: string;
            email: string;
            roles: string[];
        };
    }>;
    deleteContact(accountNumber: string, subjectId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    updateContact(accountNumber: string, subjectId: string, contact: UpdateContactOnAccountRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            subjectId: string;
            email: string;
            roles: string[];
        };
    }>;
    createManagedCustomer(accountNumber: string, customer: CreateManagedCustomerRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            accountNumber: string | null;
            serviceAccountClientId: string | null;
            serviceAccountSecret: string | null;
        };
    }>;
    getRouter(accountNumber: string, routerId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            routerId: string;
            nickname: string | null;
            userTerminalId: string;
            configId: string | null;
            hardwareVersion: string | null;
            lastBonded: string | null;
        };
    }>;
    getRouterConfigs(accountNumber: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                configId: string;
                nickname: string | null;
                routerConfigJson: string;
            }[] | null;
            totalCount: number;
        };
    }>;
    createRouterConfig(accountNumber: string, config: RouterConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string;
            nickname: string | null;
            routerConfigJson: string;
        };
    }>;
    getRouterConfig(accountNumber: string, configId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string;
            nickname: string | null;
            routerConfigJson: string;
        };
    }>;
    updateRouterConfig(accountNumber: string, configId: string, config: RouterConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string;
            nickname: string | null;
            routerConfigJson: string;
        };
    }>;
    assignRoutersConfig(accountNumber: string, request: AssignRoutersConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    getDefaultRouterConfig(accountNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string | null;
        };
    }>;
    setDefaultRouterConfig(accountNumber: string, request: UpdateDefaultConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    getTlsConfigs(accountNumber: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string | null;
        };
    }>;
    createTlsConfig(accountNumber: string, request: TlsConfigCreateRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            configId: string | null;
        };
    }>;
    deleteTlsConfig(accountNumber: string, request: DeleteTlsConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    uploadRouterLocalContent(accountNumber: string, fileContent: string, fileName: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            nickname: string;
            fileContentId: string;
            fileContentHash: string;
        };
    }>;
    getRouterLocalContentFiles(accountNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            nickname: string;
            uploadDate: string;
            fileContentId: string;
            fileContentHash: string;
        }[] | null;
    }>;
    getSandboxClients(accountNumber: string, sandboxId?: number, expiryAfter?: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                clientId: string | null;
                sandboxId: number;
                expiry: string;
            }[] | null;
            totalCount: number;
        };
    }>;
    batchUpdateSandboxClients(accountNumber: string, requests: UpdateBatchSandboxClientRequest[]): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    sendSandboxHeartbeat(accountNumber: string, request: SandboxHeartbeatRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    rebootRouter(accountNumber: string, routerId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    getServiceLines(accountNumber: string, addressReferenceId?: string, searchString?: string, dataPoolId?: string, page?: number, orderByCreatedDateDescending?: boolean): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                addressReferenceId: string;
                serviceLineNumber: string;
                nickname: string | null;
                productReferenceId: string;
                delayedProductId: string | null;
                optInProductId: string | null;
                startDate: string | null;
                endDate: string | null;
                publicIp: boolean;
                active: boolean;
                aviationMetadata: {
                    tailNumber: string | null;
                    seatCount: number;
                    airlineIataCode: string | null;
                    aircraftIataCode: string | null;
                    airlineIcaoCode: string | null;
                    aircraftIcaoCode: string | null;
                    stcNumber: string | null;
                } | null;
                dataBlocks: {
                    recurringBlocksCurrentBillingCycle: {
                        productId: string | null;
                        startDate: string;
                        expirationDate: string;
                        count: number;
                        dataAmount: number;
                        dataUnitType: string | null;
                    }[] | null;
                    recurringBlocksNextBillingCycle: {
                        productId: string | null;
                        startDate: string;
                        expirationDate: string;
                        count: number;
                        dataAmount: number;
                        dataUnitType: string | null;
                    }[] | null;
                    delayedProductRecurringBlocksNextCycle: {
                        productId: string | null;
                        startDate: string;
                        expirationDate: string;
                        count: number;
                        dataAmount: number;
                        dataUnitType: string | null;
                    }[] | null;
                    topUpBlocksOptInPurchase: {
                        productId: string | null;
                        startDate: string;
                        expirationDate: string;
                        count: number;
                        dataAmount: number;
                        dataUnitType: string | null;
                    }[] | null;
                    topUpBlocksOneTimePurchase: {
                        productId: string | null;
                        startDate: string;
                        expirationDate: string;
                        count: number;
                        dataAmount: number;
                        dataUnitType: string | null;
                    }[] | null;
                } | null;
            }[] | null;
            totalCount: number;
        };
    }>;
    createServiceLine(accountNumber: string, request: ServiceLineCreateRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            serviceLineNumber: string;
            nickname: string | null;
            productReferenceId: string;
            delayedProductId: string | null;
            optInProductId: string | null;
            startDate: string | null;
            endDate: string | null;
            publicIp: boolean;
            active: boolean;
            aviationMetadata: {
                tailNumber: string | null;
                seatCount: number;
                airlineIataCode: string | null;
                aircraftIataCode: string | null;
                airlineIcaoCode: string | null;
                aircraftIcaoCode: string | null;
                stcNumber: string | null;
            } | null;
            dataBlocks: {
                recurringBlocksCurrentBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                recurringBlocksNextBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                delayedProductRecurringBlocksNextCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOptInPurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOneTimePurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
            } | null;
        };
    }>;
    getServiceLine(accountNumber: string, serviceLineNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            serviceLineNumber: string;
            nickname: string | null;
            productReferenceId: string;
            delayedProductId: string | null;
            optInProductId: string | null;
            startDate: string | null;
            endDate: string | null;
            publicIp: boolean;
            active: boolean;
            aviationMetadata: {
                tailNumber: string | null;
                seatCount: number;
                airlineIataCode: string | null;
                aircraftIataCode: string | null;
                airlineIcaoCode: string | null;
                aircraftIcaoCode: string | null;
                stcNumber: string | null;
            } | null;
            dataBlocks: {
                recurringBlocksCurrentBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                recurringBlocksNextBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                delayedProductRecurringBlocksNextCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOptInPurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOneTimePurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
            } | null;
        };
    }>;
    deactivateServiceLine(accountNumber: string, serviceLineNumber: string, reasonForCancellation?: string, endNow?: boolean): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    setServiceLineNickname(accountNumber: string, serviceLineNumber: string, request: ServiceLineUpdateNicknameRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            addressReferenceId: string;
            serviceLineNumber: string;
            nickname: string | null;
            productReferenceId: string;
            delayedProductId: string | null;
            optInProductId: string | null;
            startDate: string | null;
            endDate: string | null;
            publicIp: boolean;
            active: boolean;
            aviationMetadata: {
                tailNumber: string | null;
                seatCount: number;
                airlineIataCode: string | null;
                aircraftIataCode: string | null;
                airlineIcaoCode: string | null;
                aircraftIcaoCode: string | null;
                stcNumber: string | null;
            } | null;
            dataBlocks: {
                recurringBlocksCurrentBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                recurringBlocksNextBillingCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                delayedProductRecurringBlocksNextCycle: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOptInPurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
                topUpBlocksOneTimePurchase: {
                    productId: string | null;
                    startDate: string;
                    expirationDate: string;
                    count: number;
                    dataAmount: number;
                    dataUnitType: string | null;
                }[] | null;
            } | null;
        };
    }>;
    updateServiceLineProduct(accountNumber: string, serviceLineNumber: string, request: UpdateServiceLineProductRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    setServiceLinePublicIp(accountNumber: string, serviceLineNumber: string, request: ServiceLineSetPublicIpRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    optInPriorityData(accountNumber: string, serviceLineNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            productId: string;
            activatedDate: string;
            deactivatedDate: string | null;
            isInOptInCoolDown: boolean;
        };
    }>;
    optOutPriorityData(accountNumber: string, serviceLineNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            productId: string;
            activatedDate: string;
            deactivatedDate: string | null;
            isInOptInCoolDown: boolean;
        };
    }>;
    addUserTerminalToServiceLine(accountNumber: string, serviceLineNumber: string, request: DeviceIdRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    removeUserTerminalFromServiceLine(accountNumber: string, serviceLineNumber: string, deviceId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    setServiceLineRecurringDataBlocks(accountNumber: string, serviceLineNumber: string, request: RecurringDataBlocksRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    addServiceLineTopUpData(accountNumber: string, serviceLineNumber: string, request: {
        productId: string;
        count: number;
    }): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    getBillingPartialPeriods(accountNumber: string, serviceLineNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            productReferenceId: string;
            periodStart: string;
            periodEnd: string;
        }[] | null;
    }>;
    getUserTerminals(accountNumber: string, serviceLineNumbers?: string[], userTerminalIds?: string[], hasServiceLine?: boolean, searchString?: string, page?: number): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            pageIndex: number;
            limit: number;
            isLastPage: boolean;
            results: {
                userTerminalId: string;
                nickname: string | null;
                kitSerialNumber: string;
                dishSerialNumber: string;
                serviceLineNumber: string | null;
                l2VpnCircuits: {
                    circuitId: string;
                    customerVlans: number[];
                    serviceVlan: number | null;
                }[];
                routers: {
                    routerId: string;
                    nickname: string | null;
                    userTerminalId: string;
                    configId: string | null;
                    hardwareVersion: string | null;
                    lastBonded: string | null;
                }[];
            }[] | null;
            totalCount: number;
        };
    }>;
    addUserTerminal(accountNumber: string, request: DeviceIdRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    removeUserTerminal(accountNumber: string, deviceId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    rebootUserTerminal(accountNumber: string, deviceId: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    assignUserTerminalsConfig(accountNumber: string, request: AssignUserTerminalsConfigRequest): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
    getL2VpnCircuits(accountNumber: string): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
        content: {
            circuitId: string | null;
            popName: string | null;
        }[] | null;
    }>;
    setUserTerminalL2VpnVlan(accountNumber: string, deviceId: string, circuits: L2VpnSetCircuitRequest[]): Promise<{
        errors: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        warnings: {
            memberNames: string[] | null;
            errorMessage: string | null;
        }[] | null;
        information: string[] | null;
        isValid: boolean;
    }>;
}

declare const ValidationResultSchema: z.ZodObject<{
    memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
    errorMessage: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const ServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
}, z.core.$strip>;
declare const AccountResponseV2Schema: z.ZodObject<{
    accountNumber: z.ZodString;
    regionCode: z.ZodString;
    accountName: z.ZodNullable<z.ZodString>;
    activeSuspensions: z.ZodNullable<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
declare const AccountResponseV2ServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        accountNumber: z.ZodString;
        regionCode: z.ZodString;
        accountName: z.ZodNullable<z.ZodString>;
        activeSuspensions: z.ZodNullable<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const AddressResponseSchema: z.ZodObject<{
    addressReferenceId: z.ZodString;
    addressLines: z.ZodArray<z.ZodString>;
    locality: z.ZodNullable<z.ZodString>;
    administrativeArea: z.ZodNullable<z.ZodString>;
    administrativeAreaCode: z.ZodString;
    region: z.ZodNullable<z.ZodString>;
    regionCode: z.ZodString;
    postalCode: z.ZodNullable<z.ZodString>;
    metadata: z.ZodNullable<z.ZodString>;
    formattedAddress: z.ZodString;
    latitude: z.ZodNumber;
    longitude: z.ZodNumber;
}, z.core.$strip>;
declare const AddressResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        addressReferenceId: z.ZodString;
        addressLines: z.ZodArray<z.ZodString>;
        locality: z.ZodNullable<z.ZodString>;
        administrativeArea: z.ZodNullable<z.ZodString>;
        administrativeAreaCode: z.ZodString;
        region: z.ZodNullable<z.ZodString>;
        regionCode: z.ZodString;
        postalCode: z.ZodNullable<z.ZodString>;
        metadata: z.ZodNullable<z.ZodString>;
        formattedAddress: z.ZodString;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const AddressResponsePaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        addressReferenceId: z.ZodString;
        addressLines: z.ZodArray<z.ZodString>;
        locality: z.ZodNullable<z.ZodString>;
        administrativeArea: z.ZodNullable<z.ZodString>;
        administrativeAreaCode: z.ZodString;
        region: z.ZodNullable<z.ZodString>;
        regionCode: z.ZodString;
        postalCode: z.ZodNullable<z.ZodString>;
        metadata: z.ZodNullable<z.ZodString>;
        formattedAddress: z.ZodString;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const AddressResponsePaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            addressReferenceId: z.ZodString;
            addressLines: z.ZodArray<z.ZodString>;
            locality: z.ZodNullable<z.ZodString>;
            administrativeArea: z.ZodNullable<z.ZodString>;
            administrativeAreaCode: z.ZodString;
            region: z.ZodNullable<z.ZodString>;
            regionCode: z.ZodString;
            postalCode: z.ZodNullable<z.ZodString>;
            metadata: z.ZodNullable<z.ZodString>;
            formattedAddress: z.ZodString;
            latitude: z.ZodNumber;
            longitude: z.ZodNumber;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const UserResponseSchema: z.ZodObject<{
    subjectId: z.ZodString;
    email: z.ZodString;
    roles: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
declare const UserResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        subjectId: z.ZodString;
        email: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const UserResponsePaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        subjectId: z.ZodString;
        email: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const UserResponsePaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            subjectId: z.ZodString;
            email: z.ZodString;
            roles: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const UserLacksRequiredPermissionSchema: z.ZodObject<{
    accountId: z.ZodNullable<z.ZodString>;
    requiredPermission: z.ZodObject<{
        featureAccess: z.ZodNumber;
        permission: z.ZodNumber;
    }, z.core.$strip>;
    featureAccessString: z.ZodNullable<z.ZodString>;
    permissionString: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const UserLacksRequiredPermissionServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        accountId: z.ZodNullable<z.ZodString>;
        requiredPermission: z.ZodObject<{
            featureAccess: z.ZodNumber;
            permission: z.ZodNumber;
        }, z.core.$strip>;
        featureAccessString: z.ZodNullable<z.ZodString>;
        permissionString: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const DataProductResponseSchema: z.ZodObject<{
    productId: z.ZodNullable<z.ZodString>;
    price: z.ZodNumber;
    isoCurrencyCode: z.ZodNullable<z.ZodString>;
    dataAmount: z.ZodNumber;
    dataUnit: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const DataProductsResponseSchema: z.ZodObject<{
    topUpProduct: z.ZodNullable<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        price: z.ZodNumber;
        isoCurrencyCode: z.ZodNullable<z.ZodString>;
        dataAmount: z.ZodNumber;
        dataUnit: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    dataBlockProducts: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        price: z.ZodNumber;
        isoCurrencyCode: z.ZodNullable<z.ZodString>;
        dataAmount: z.ZodNumber;
        dataUnit: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const SubscriptionProductResponseSchema: z.ZodObject<{
    productReferenceId: z.ZodString;
    name: z.ZodString;
    price: z.ZodNumber;
    isoCurrencyCode: z.ZodString;
    isSla: z.ZodBoolean;
    maxNumberOfUserTerminals: z.ZodNullable<z.ZodNumber>;
    dataProducts: z.ZodNullable<z.ZodObject<{
        topUpProduct: z.ZodNullable<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            price: z.ZodNumber;
            isoCurrencyCode: z.ZodNullable<z.ZodString>;
            dataAmount: z.ZodNumber;
            dataUnit: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        dataBlockProducts: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            price: z.ZodNumber;
            isoCurrencyCode: z.ZodNullable<z.ZodString>;
            dataAmount: z.ZodNumber;
            dataUnit: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const SubscriptionProductResponsePaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productReferenceId: z.ZodString;
        name: z.ZodString;
        price: z.ZodNumber;
        isoCurrencyCode: z.ZodString;
        isSla: z.ZodBoolean;
        maxNumberOfUserTerminals: z.ZodNullable<z.ZodNumber>;
        dataProducts: z.ZodNullable<z.ZodObject<{
            topUpProduct: z.ZodNullable<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                price: z.ZodNumber;
                isoCurrencyCode: z.ZodNullable<z.ZodString>;
                dataAmount: z.ZodNumber;
                dataUnit: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            dataBlockProducts: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                price: z.ZodNumber;
                isoCurrencyCode: z.ZodNullable<z.ZodString>;
                dataAmount: z.ZodNumber;
                dataUnit: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const SubscriptionProductResponsePaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productReferenceId: z.ZodString;
            name: z.ZodString;
            price: z.ZodNumber;
            isoCurrencyCode: z.ZodString;
            isSla: z.ZodBoolean;
            maxNumberOfUserTerminals: z.ZodNullable<z.ZodNumber>;
            dataProducts: z.ZodNullable<z.ZodObject<{
                topUpProduct: z.ZodNullable<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    price: z.ZodNumber;
                    isoCurrencyCode: z.ZodNullable<z.ZodString>;
                    dataAmount: z.ZodNumber;
                    dataUnit: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                dataBlockProducts: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    price: z.ZodNumber;
                    isoCurrencyCode: z.ZodNullable<z.ZodString>;
                    dataAmount: z.ZodNumber;
                    dataUnit: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const CreateManagedCustomerResponseSchema: z.ZodObject<{
    accountNumber: z.ZodNullable<z.ZodString>;
    serviceAccountClientId: z.ZodNullable<z.ZodString>;
    serviceAccountSecret: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const CreateManagedCustomerResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        accountNumber: z.ZodNullable<z.ZodString>;
        serviceAccountClientId: z.ZodNullable<z.ZodString>;
        serviceAccountSecret: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const RouterResponseV2Schema: z.ZodObject<{
    routerId: z.ZodString;
    nickname: z.ZodNullable<z.ZodString>;
    userTerminalId: z.ZodString;
    configId: z.ZodNullable<z.ZodString>;
    hardwareVersion: z.ZodNullable<z.ZodString>;
    lastBonded: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const RouterResponseV2ServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        routerId: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        userTerminalId: z.ZodString;
        configId: z.ZodNullable<z.ZodString>;
        hardwareVersion: z.ZodNullable<z.ZodString>;
        lastBonded: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const RouterConfigResponseV2Schema: z.ZodObject<{
    configId: z.ZodString;
    nickname: z.ZodNullable<z.ZodString>;
    routerConfigJson: z.ZodString;
}, z.core.$strip>;
declare const RouterConfigResponseV2ServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        configId: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        routerConfigJson: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const RouterConfigResponseV2PaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        configId: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        routerConfigJson: z.ZodString;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const RouterConfigResponseV2PaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            configId: z.ZodString;
            nickname: z.ZodNullable<z.ZodString>;
            routerConfigJson: z.ZodString;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const DefaultRouterConfigResponseSchema: z.ZodObject<{
    configId: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const DefaultRouterConfigResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        configId: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const RouterLocalContentResponseSchema: z.ZodObject<{
    nickname: z.ZodString;
    uploadDate: z.ZodString;
    fileContentId: z.ZodString;
    fileContentHash: z.ZodString;
}, z.core.$strip>;
declare const RouterLocalContentResponseListServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodNullable<z.ZodArray<z.ZodObject<{
        nickname: z.ZodString;
        uploadDate: z.ZodString;
        fileContentId: z.ZodString;
        fileContentHash: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const AddRouterLocalContentResponseV2Schema: z.ZodObject<{
    nickname: z.ZodString;
    fileContentId: z.ZodString;
    fileContentHash: z.ZodString;
}, z.core.$strip>;
declare const AddRouterLocalContentResponseV2ServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        nickname: z.ZodString;
        fileContentId: z.ZodString;
        fileContentHash: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const SandboxClientResponseSchema: z.ZodObject<{
    clientId: z.ZodNullable<z.ZodString>;
    sandboxId: z.ZodNumber;
    expiry: z.ZodString;
}, z.core.$strip>;
declare const SandboxClientResponsePaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        clientId: z.ZodNullable<z.ZodString>;
        sandboxId: z.ZodNumber;
        expiry: z.ZodString;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const SandboxClientResponsePaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            clientId: z.ZodNullable<z.ZodString>;
            sandboxId: z.ZodNumber;
            expiry: z.ZodString;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const DataBucketTypeSchema: z.ZodNumber;
declare const DataOverageTypeSchema: z.ZodNumber;
declare const DataUsageOverageLineSchema: z.ZodObject<{
    restricted: z.ZodNumber;
    unrestricted: z.ZodNumber;
    pricePerGB: z.ZodNumber;
    usageLimitGB: z.ZodNumber;
    overageAmountGB: z.ZodNumber;
    consumedAmountGB: z.ZodNumber;
    overagePrice: z.ZodNumber;
    productId: z.ZodNullable<z.ZodString>;
    dataOverageType: z.ZodNumber;
    activeFrom: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const DataUsageDailyV2Schema: z.ZodObject<{
    date: z.ZodString;
    priorityGB: z.ZodNumber;
    optInPriorityGB: z.ZodNumber;
    standardGB: z.ZodNumber;
    nonBillableGB: z.ZodNumber;
}, z.core.$strip>;
declare const DataServicePlanSchema: z.ZodObject<{
    isoCurrencyCode: z.ZodString;
    isMobilePlan: z.ZodBoolean;
    activeFrom: z.ZodNullable<z.ZodString>;
    subscriptionActiveFrom: z.ZodNullable<z.ZodString>;
    subscriptionEndDate: z.ZodNullable<z.ZodString>;
    overageName: z.ZodNullable<z.ZodString>;
    overageDescription: z.ZodNullable<z.ZodString>;
    isOptedIntoOverage: z.ZodBoolean;
    overageLineDeactivatedDate: z.ZodNullable<z.ZodString>;
    overageLine: z.ZodNullable<z.ZodObject<{
        restricted: z.ZodNumber;
        unrestricted: z.ZodNumber;
        pricePerGB: z.ZodNumber;
        usageLimitGB: z.ZodNumber;
        overageAmountGB: z.ZodNumber;
        consumedAmountGB: z.ZodNumber;
        overagePrice: z.ZodNumber;
        productId: z.ZodNullable<z.ZodString>;
        dataOverageType: z.ZodNumber;
        activeFrom: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    dataPoolUsage: z.ZodNullable<z.ZodAny>;
    productId: z.ZodString;
    usageLimitGB: z.ZodNumber;
    dataCategoryMapping: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
declare const DataBlockSummaryResponseSchema: z.ZodObject<{
    productId: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    expirationDate: z.ZodString;
    count: z.ZodNumber;
    dataAmount: z.ZodNumber;
    dataUnitType: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const ServiceLineDataBlocksSummaryResponseSchema: z.ZodObject<{
    recurringBlocksCurrentBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        expirationDate: z.ZodString;
        count: z.ZodNumber;
        dataAmount: z.ZodNumber;
        dataUnitType: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    recurringBlocksNextBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        expirationDate: z.ZodString;
        count: z.ZodNumber;
        dataAmount: z.ZodNumber;
        dataUnitType: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    delayedProductRecurringBlocksNextCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        expirationDate: z.ZodString;
        count: z.ZodNumber;
        dataAmount: z.ZodNumber;
        dataUnitType: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    topUpBlocksOptInPurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        expirationDate: z.ZodString;
        count: z.ZodNumber;
        dataAmount: z.ZodNumber;
        dataUnitType: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    topUpBlocksOneTimePurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        expirationDate: z.ZodString;
        count: z.ZodNumber;
        dataAmount: z.ZodNumber;
        dataUnitType: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const DataUsageBillingCycleV2Schema: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
    dailyDataUsage: z.ZodNullable<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        priorityGB: z.ZodNumber;
        optInPriorityGB: z.ZodNumber;
        standardGB: z.ZodNumber;
        nonBillableGB: z.ZodNumber;
    }, z.core.$strip>>>;
    overageLines: z.ZodNullable<z.ZodArray<z.ZodObject<{
        restricted: z.ZodNumber;
        unrestricted: z.ZodNumber;
        pricePerGB: z.ZodNumber;
        usageLimitGB: z.ZodNumber;
        overageAmountGB: z.ZodNumber;
        consumedAmountGB: z.ZodNumber;
        overagePrice: z.ZodNumber;
        productId: z.ZodNullable<z.ZodString>;
        dataOverageType: z.ZodNumber;
        activeFrom: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    dataPoolUsage: z.ZodNullable<z.ZodArray<z.ZodAny>>;
    totalPriorityGB: z.ZodNumber;
    totalStandardGB: z.ZodNumber;
    totalOptInPriorityGB: z.ZodNumber;
    totalNonBillableGB: z.ZodNumber;
}, z.core.$strip>;
declare const DataPoolUsagePublicResponseSchema: z.ZodObject<{
    accountNumber: z.ZodNullable<z.ZodString>;
    dataPoolId: z.ZodString;
    lastUpdated: z.ZodString;
    dataBlocks: z.ZodArray<z.ZodAny>;
}, z.core.$strip>;
declare const ServiceLineDataUsageForBillingCyclesSchema: z.ZodObject<{
    accountNumber: z.ZodNullable<z.ZodString>;
    serviceLineNumber: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    billingCycles: z.ZodNullable<z.ZodArray<z.ZodObject<{
        startDate: z.ZodString;
        endDate: z.ZodString;
        dailyDataUsage: z.ZodNullable<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            priorityGB: z.ZodNumber;
            optInPriorityGB: z.ZodNumber;
            standardGB: z.ZodNumber;
            nonBillableGB: z.ZodNumber;
        }, z.core.$strip>>>;
        overageLines: z.ZodNullable<z.ZodArray<z.ZodObject<{
            restricted: z.ZodNumber;
            unrestricted: z.ZodNumber;
            pricePerGB: z.ZodNumber;
            usageLimitGB: z.ZodNumber;
            overageAmountGB: z.ZodNumber;
            consumedAmountGB: z.ZodNumber;
            overagePrice: z.ZodNumber;
            productId: z.ZodNullable<z.ZodString>;
            dataOverageType: z.ZodNumber;
            activeFrom: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        dataPoolUsage: z.ZodNullable<z.ZodArray<z.ZodAny>>;
        totalPriorityGB: z.ZodNumber;
        totalStandardGB: z.ZodNumber;
        totalOptInPriorityGB: z.ZodNumber;
        totalNonBillableGB: z.ZodNumber;
    }, z.core.$strip>>>;
    servicePlan: z.ZodNullable<z.ZodObject<{
        isoCurrencyCode: z.ZodString;
        isMobilePlan: z.ZodBoolean;
        activeFrom: z.ZodNullable<z.ZodString>;
        subscriptionActiveFrom: z.ZodNullable<z.ZodString>;
        subscriptionEndDate: z.ZodNullable<z.ZodString>;
        overageName: z.ZodNullable<z.ZodString>;
        overageDescription: z.ZodNullable<z.ZodString>;
        isOptedIntoOverage: z.ZodBoolean;
        overageLineDeactivatedDate: z.ZodNullable<z.ZodString>;
        overageLine: z.ZodNullable<z.ZodObject<{
            restricted: z.ZodNumber;
            unrestricted: z.ZodNumber;
            pricePerGB: z.ZodNumber;
            usageLimitGB: z.ZodNumber;
            overageAmountGB: z.ZodNumber;
            consumedAmountGB: z.ZodNumber;
            overagePrice: z.ZodNumber;
            productId: z.ZodNullable<z.ZodString>;
            dataOverageType: z.ZodNumber;
            activeFrom: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        dataPoolUsage: z.ZodNullable<z.ZodAny>;
        productId: z.ZodString;
        usageLimitGB: z.ZodNumber;
        dataCategoryMapping: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
    lastUpdated: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const ServiceLineDataUsageForBillingCyclesPaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        accountNumber: z.ZodNullable<z.ZodString>;
        serviceLineNumber: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodString;
        billingCycles: z.ZodNullable<z.ZodArray<z.ZodObject<{
            startDate: z.ZodString;
            endDate: z.ZodString;
            dailyDataUsage: z.ZodNullable<z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                priorityGB: z.ZodNumber;
                optInPriorityGB: z.ZodNumber;
                standardGB: z.ZodNumber;
                nonBillableGB: z.ZodNumber;
            }, z.core.$strip>>>;
            overageLines: z.ZodNullable<z.ZodArray<z.ZodObject<{
                restricted: z.ZodNumber;
                unrestricted: z.ZodNumber;
                pricePerGB: z.ZodNumber;
                usageLimitGB: z.ZodNumber;
                overageAmountGB: z.ZodNumber;
                consumedAmountGB: z.ZodNumber;
                overagePrice: z.ZodNumber;
                productId: z.ZodNullable<z.ZodString>;
                dataOverageType: z.ZodNumber;
                activeFrom: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            dataPoolUsage: z.ZodNullable<z.ZodArray<z.ZodAny>>;
            totalPriorityGB: z.ZodNumber;
            totalStandardGB: z.ZodNumber;
            totalOptInPriorityGB: z.ZodNumber;
            totalNonBillableGB: z.ZodNumber;
        }, z.core.$strip>>>;
        servicePlan: z.ZodNullable<z.ZodObject<{
            isoCurrencyCode: z.ZodString;
            isMobilePlan: z.ZodBoolean;
            activeFrom: z.ZodNullable<z.ZodString>;
            subscriptionActiveFrom: z.ZodNullable<z.ZodString>;
            subscriptionEndDate: z.ZodNullable<z.ZodString>;
            overageName: z.ZodNullable<z.ZodString>;
            overageDescription: z.ZodNullable<z.ZodString>;
            isOptedIntoOverage: z.ZodBoolean;
            overageLineDeactivatedDate: z.ZodNullable<z.ZodString>;
            overageLine: z.ZodNullable<z.ZodObject<{
                restricted: z.ZodNumber;
                unrestricted: z.ZodNumber;
                pricePerGB: z.ZodNumber;
                usageLimitGB: z.ZodNumber;
                overageAmountGB: z.ZodNumber;
                consumedAmountGB: z.ZodNumber;
                overagePrice: z.ZodNumber;
                productId: z.ZodNullable<z.ZodString>;
                dataOverageType: z.ZodNumber;
                activeFrom: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            dataPoolUsage: z.ZodNullable<z.ZodAny>;
            productId: z.ZodString;
            usageLimitGB: z.ZodNumber;
            dataCategoryMapping: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
        lastUpdated: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            accountNumber: z.ZodNullable<z.ZodString>;
            serviceLineNumber: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            endDate: z.ZodString;
            billingCycles: z.ZodNullable<z.ZodArray<z.ZodObject<{
                startDate: z.ZodString;
                endDate: z.ZodString;
                dailyDataUsage: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    date: z.ZodString;
                    priorityGB: z.ZodNumber;
                    optInPriorityGB: z.ZodNumber;
                    standardGB: z.ZodNumber;
                    nonBillableGB: z.ZodNumber;
                }, z.core.$strip>>>;
                overageLines: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    restricted: z.ZodNumber;
                    unrestricted: z.ZodNumber;
                    pricePerGB: z.ZodNumber;
                    usageLimitGB: z.ZodNumber;
                    overageAmountGB: z.ZodNumber;
                    consumedAmountGB: z.ZodNumber;
                    overagePrice: z.ZodNumber;
                    productId: z.ZodNullable<z.ZodString>;
                    dataOverageType: z.ZodNumber;
                    activeFrom: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
                dataPoolUsage: z.ZodNullable<z.ZodArray<z.ZodAny>>;
                totalPriorityGB: z.ZodNumber;
                totalStandardGB: z.ZodNumber;
                totalOptInPriorityGB: z.ZodNumber;
                totalNonBillableGB: z.ZodNumber;
            }, z.core.$strip>>>;
            servicePlan: z.ZodNullable<z.ZodObject<{
                isoCurrencyCode: z.ZodString;
                isMobilePlan: z.ZodBoolean;
                activeFrom: z.ZodNullable<z.ZodString>;
                subscriptionActiveFrom: z.ZodNullable<z.ZodString>;
                subscriptionEndDate: z.ZodNullable<z.ZodString>;
                overageName: z.ZodNullable<z.ZodString>;
                overageDescription: z.ZodNullable<z.ZodString>;
                isOptedIntoOverage: z.ZodBoolean;
                overageLineDeactivatedDate: z.ZodNullable<z.ZodString>;
                overageLine: z.ZodNullable<z.ZodObject<{
                    restricted: z.ZodNumber;
                    unrestricted: z.ZodNumber;
                    pricePerGB: z.ZodNumber;
                    usageLimitGB: z.ZodNumber;
                    overageAmountGB: z.ZodNumber;
                    consumedAmountGB: z.ZodNumber;
                    overagePrice: z.ZodNumber;
                    productId: z.ZodNullable<z.ZodString>;
                    dataOverageType: z.ZodNumber;
                    activeFrom: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>;
                dataPoolUsage: z.ZodNullable<z.ZodAny>;
                productId: z.ZodString;
                usageLimitGB: z.ZodNumber;
                dataCategoryMapping: z.ZodRecord<z.ZodString, z.ZodNumber>;
            }, z.core.$strip>>;
            lastUpdated: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const AviationMetadataResponseSchema: z.ZodObject<{
    tailNumber: z.ZodNullable<z.ZodString>;
    seatCount: z.ZodNumber;
    airlineIataCode: z.ZodNullable<z.ZodString>;
    aircraftIataCode: z.ZodNullable<z.ZodString>;
    airlineIcaoCode: z.ZodNullable<z.ZodString>;
    aircraftIcaoCode: z.ZodNullable<z.ZodString>;
    stcNumber: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const L2VpnCircuitResponseSchema: z.ZodObject<{
    circuitId: z.ZodNullable<z.ZodString>;
    popName: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const L2VpnCircuitResponseListServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodNullable<z.ZodArray<z.ZodObject<{
        circuitId: z.ZodNullable<z.ZodString>;
        popName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const L2VpnCircuitDefinitionSchema: z.ZodObject<{
    circuitId: z.ZodString;
    customerVlans: z.ZodArray<z.ZodNumber>;
    serviceVlan: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
declare const RouterResponseV2ForUserTerminalSchema: z.ZodObject<{
    routerId: z.ZodString;
    nickname: z.ZodNullable<z.ZodString>;
    userTerminalId: z.ZodString;
    configId: z.ZodNullable<z.ZodString>;
    hardwareVersion: z.ZodNullable<z.ZodString>;
    lastBonded: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
declare const UserTerminalResponseV2Schema: z.ZodObject<{
    userTerminalId: z.ZodString;
    nickname: z.ZodNullable<z.ZodString>;
    kitSerialNumber: z.ZodString;
    dishSerialNumber: z.ZodString;
    serviceLineNumber: z.ZodNullable<z.ZodString>;
    l2VpnCircuits: z.ZodArray<z.ZodObject<{
        circuitId: z.ZodString;
        customerVlans: z.ZodArray<z.ZodNumber>;
        serviceVlan: z.ZodNullable<z.ZodNumber>;
    }, z.core.$strip>>;
    routers: z.ZodArray<z.ZodObject<{
        routerId: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        userTerminalId: z.ZodString;
        configId: z.ZodNullable<z.ZodString>;
        hardwareVersion: z.ZodNullable<z.ZodString>;
        lastBonded: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const UserTerminalResponseV2PaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        userTerminalId: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        kitSerialNumber: z.ZodString;
        dishSerialNumber: z.ZodString;
        serviceLineNumber: z.ZodNullable<z.ZodString>;
        l2VpnCircuits: z.ZodArray<z.ZodObject<{
            circuitId: z.ZodString;
            customerVlans: z.ZodArray<z.ZodNumber>;
            serviceVlan: z.ZodNullable<z.ZodNumber>;
        }, z.core.$strip>>;
        routers: z.ZodArray<z.ZodObject<{
            routerId: z.ZodString;
            nickname: z.ZodNullable<z.ZodString>;
            userTerminalId: z.ZodString;
            configId: z.ZodNullable<z.ZodString>;
            hardwareVersion: z.ZodNullable<z.ZodString>;
            lastBonded: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const UserTerminalResponseV2PaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            userTerminalId: z.ZodString;
            nickname: z.ZodNullable<z.ZodString>;
            kitSerialNumber: z.ZodString;
            dishSerialNumber: z.ZodString;
            serviceLineNumber: z.ZodNullable<z.ZodString>;
            l2VpnCircuits: z.ZodArray<z.ZodObject<{
                circuitId: z.ZodString;
                customerVlans: z.ZodArray<z.ZodNumber>;
                serviceVlan: z.ZodNullable<z.ZodNumber>;
            }, z.core.$strip>>;
            routers: z.ZodArray<z.ZodObject<{
                routerId: z.ZodString;
                nickname: z.ZodNullable<z.ZodString>;
                userTerminalId: z.ZodString;
                configId: z.ZodNullable<z.ZodString>;
                hardwareVersion: z.ZodNullable<z.ZodString>;
                lastBonded: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const ServiceLineResponseSchema: z.ZodObject<{
    addressReferenceId: z.ZodString;
    serviceLineNumber: z.ZodString;
    nickname: z.ZodNullable<z.ZodString>;
    productReferenceId: z.ZodString;
    delayedProductId: z.ZodNullable<z.ZodString>;
    optInProductId: z.ZodNullable<z.ZodString>;
    startDate: z.ZodNullable<z.ZodString>;
    endDate: z.ZodNullable<z.ZodString>;
    publicIp: z.ZodBoolean;
    active: z.ZodBoolean;
    aviationMetadata: z.ZodNullable<z.ZodObject<{
        tailNumber: z.ZodNullable<z.ZodString>;
        seatCount: z.ZodNumber;
        airlineIataCode: z.ZodNullable<z.ZodString>;
        aircraftIataCode: z.ZodNullable<z.ZodString>;
        airlineIcaoCode: z.ZodNullable<z.ZodString>;
        aircraftIcaoCode: z.ZodNullable<z.ZodString>;
        stcNumber: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>;
    dataBlocks: z.ZodNullable<z.ZodObject<{
        recurringBlocksCurrentBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            expirationDate: z.ZodString;
            count: z.ZodNumber;
            dataAmount: z.ZodNumber;
            dataUnitType: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        recurringBlocksNextBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            expirationDate: z.ZodString;
            count: z.ZodNumber;
            dataAmount: z.ZodNumber;
            dataUnitType: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        delayedProductRecurringBlocksNextCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            expirationDate: z.ZodString;
            count: z.ZodNumber;
            dataAmount: z.ZodNumber;
            dataUnitType: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        topUpBlocksOptInPurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            expirationDate: z.ZodString;
            count: z.ZodNumber;
            dataAmount: z.ZodNumber;
            dataUnitType: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
        topUpBlocksOneTimePurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
            productId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodString;
            expirationDate: z.ZodString;
            count: z.ZodNumber;
            dataAmount: z.ZodNumber;
            dataUnitType: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
declare const ServiceLineResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        addressReferenceId: z.ZodString;
        serviceLineNumber: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        productReferenceId: z.ZodString;
        delayedProductId: z.ZodNullable<z.ZodString>;
        optInProductId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodNullable<z.ZodString>;
        endDate: z.ZodNullable<z.ZodString>;
        publicIp: z.ZodBoolean;
        active: z.ZodBoolean;
        aviationMetadata: z.ZodNullable<z.ZodObject<{
            tailNumber: z.ZodNullable<z.ZodString>;
            seatCount: z.ZodNumber;
            airlineIataCode: z.ZodNullable<z.ZodString>;
            aircraftIataCode: z.ZodNullable<z.ZodString>;
            airlineIcaoCode: z.ZodNullable<z.ZodString>;
            aircraftIcaoCode: z.ZodNullable<z.ZodString>;
            stcNumber: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        dataBlocks: z.ZodNullable<z.ZodObject<{
            recurringBlocksCurrentBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            recurringBlocksNextBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            delayedProductRecurringBlocksNextCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            topUpBlocksOptInPurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            topUpBlocksOneTimePurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const ServiceLineResponsePaginatedSchema: z.ZodObject<{
    pageIndex: z.ZodNumber;
    limit: z.ZodNumber;
    isLastPage: z.ZodBoolean;
    results: z.ZodNullable<z.ZodArray<z.ZodObject<{
        addressReferenceId: z.ZodString;
        serviceLineNumber: z.ZodString;
        nickname: z.ZodNullable<z.ZodString>;
        productReferenceId: z.ZodString;
        delayedProductId: z.ZodNullable<z.ZodString>;
        optInProductId: z.ZodNullable<z.ZodString>;
        startDate: z.ZodNullable<z.ZodString>;
        endDate: z.ZodNullable<z.ZodString>;
        publicIp: z.ZodBoolean;
        active: z.ZodBoolean;
        aviationMetadata: z.ZodNullable<z.ZodObject<{
            tailNumber: z.ZodNullable<z.ZodString>;
            seatCount: z.ZodNumber;
            airlineIataCode: z.ZodNullable<z.ZodString>;
            aircraftIataCode: z.ZodNullable<z.ZodString>;
            airlineIcaoCode: z.ZodNullable<z.ZodString>;
            aircraftIcaoCode: z.ZodNullable<z.ZodString>;
            stcNumber: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        dataBlocks: z.ZodNullable<z.ZodObject<{
            recurringBlocksCurrentBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            recurringBlocksNextBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            delayedProductRecurringBlocksNextCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            topUpBlocksOptInPurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
            topUpBlocksOneTimePurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                productId: z.ZodNullable<z.ZodString>;
                startDate: z.ZodString;
                expirationDate: z.ZodString;
                count: z.ZodNumber;
                dataAmount: z.ZodNumber;
                dataUnitType: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    totalCount: z.ZodNumber;
}, z.core.$strip>;
declare const ServiceLineResponsePaginatedServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        pageIndex: z.ZodNumber;
        limit: z.ZodNumber;
        isLastPage: z.ZodBoolean;
        results: z.ZodNullable<z.ZodArray<z.ZodObject<{
            addressReferenceId: z.ZodString;
            serviceLineNumber: z.ZodString;
            nickname: z.ZodNullable<z.ZodString>;
            productReferenceId: z.ZodString;
            delayedProductId: z.ZodNullable<z.ZodString>;
            optInProductId: z.ZodNullable<z.ZodString>;
            startDate: z.ZodNullable<z.ZodString>;
            endDate: z.ZodNullable<z.ZodString>;
            publicIp: z.ZodBoolean;
            active: z.ZodBoolean;
            aviationMetadata: z.ZodNullable<z.ZodObject<{
                tailNumber: z.ZodNullable<z.ZodString>;
                seatCount: z.ZodNumber;
                airlineIataCode: z.ZodNullable<z.ZodString>;
                aircraftIataCode: z.ZodNullable<z.ZodString>;
                airlineIcaoCode: z.ZodNullable<z.ZodString>;
                aircraftIcaoCode: z.ZodNullable<z.ZodString>;
                stcNumber: z.ZodNullable<z.ZodString>;
            }, z.core.$strip>>;
            dataBlocks: z.ZodNullable<z.ZodObject<{
                recurringBlocksCurrentBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    startDate: z.ZodString;
                    expirationDate: z.ZodString;
                    count: z.ZodNumber;
                    dataAmount: z.ZodNumber;
                    dataUnitType: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
                recurringBlocksNextBillingCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    startDate: z.ZodString;
                    expirationDate: z.ZodString;
                    count: z.ZodNumber;
                    dataAmount: z.ZodNumber;
                    dataUnitType: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
                delayedProductRecurringBlocksNextCycle: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    startDate: z.ZodString;
                    expirationDate: z.ZodString;
                    count: z.ZodNumber;
                    dataAmount: z.ZodNumber;
                    dataUnitType: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
                topUpBlocksOptInPurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    startDate: z.ZodString;
                    expirationDate: z.ZodString;
                    count: z.ZodNumber;
                    dataAmount: z.ZodNumber;
                    dataUnitType: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
                topUpBlocksOneTimePurchase: z.ZodNullable<z.ZodArray<z.ZodObject<{
                    productId: z.ZodNullable<z.ZodString>;
                    startDate: z.ZodString;
                    expirationDate: z.ZodString;
                    count: z.ZodNumber;
                    dataAmount: z.ZodNumber;
                    dataUnitType: z.ZodNullable<z.ZodString>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        totalCount: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
declare const PartialPeriodResponseSchema: z.ZodObject<{
    productReferenceId: z.ZodString;
    periodStart: z.ZodString;
    periodEnd: z.ZodString;
}, z.core.$strip>;
declare const PartialPeriodResponseListServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodNullable<z.ZodArray<z.ZodObject<{
        productReferenceId: z.ZodString;
        periodStart: z.ZodString;
        periodEnd: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
declare const OptInResponseSchema: z.ZodObject<{
    productId: z.ZodString;
    activatedDate: z.ZodString;
    deactivatedDate: z.ZodNullable<z.ZodString>;
    isInOptInCoolDown: z.ZodBoolean;
}, z.core.$strip>;
declare const OptInResponseServiceResponseSchema: z.ZodObject<{
    errors: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    warnings: z.ZodNullable<z.ZodArray<z.ZodObject<{
        memberNames: z.ZodNullable<z.ZodArray<z.ZodString>>;
        errorMessage: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>>>;
    information: z.ZodNullable<z.ZodArray<z.ZodString>>;
    isValid: z.ZodBoolean;
    content: z.ZodObject<{
        productId: z.ZodString;
        activatedDate: z.ZodString;
        deactivatedDate: z.ZodNullable<z.ZodString>;
        isInOptInCoolDown: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;

export { AccountResponseV2Schema, AccountResponseV2ServiceResponseSchema, type AddDataBlockRequest, AddRouterLocalContentResponseV2Schema, AddRouterLocalContentResponseV2ServiceResponseSchema, type AddressCreateRequest, AddressResponsePaginatedSchema, AddressResponsePaginatedServiceResponseSchema, AddressResponseSchema, AddressResponseServiceResponseSchema, type AddressUpdateRequest, type AssignRoutersConfigRequest, type AssignUserTerminalsConfigRequest, AviationMetadataResponseSchema, type CreateContactOnAccountRequest, type CreateManagedCustomerRequest, CreateManagedCustomerResponseSchema, CreateManagedCustomerResponseServiceResponseSchema, DataBlockSummaryResponseSchema, DataBucketTypeSchema, DataOverageTypeSchema, DataPoolUsagePublicResponseSchema, DataProductResponseSchema, DataProductsResponseSchema, DataServicePlanSchema, DataUsageBillingCycleV2Schema, DataUsageDailyV2Schema, DataUsageOverageLineSchema, DefaultRouterConfigResponseSchema, DefaultRouterConfigResponseServiceResponseSchema, type DeleteTlsConfigRequest, type DeviceIdRequest, L2VpnCircuitDefinitionSchema, L2VpnCircuitResponseListServiceResponseSchema, L2VpnCircuitResponseSchema, type L2VpnSetCircuitRequest, OptInResponseSchema, OptInResponseServiceResponseSchema, PartialPeriodResponseListServiceResponseSchema, PartialPeriodResponseSchema, type QueryDataUsageRequest, type RecurringDataBlocksRequest, type RouterConfigRequest, RouterConfigResponseV2PaginatedSchema, RouterConfigResponseV2PaginatedServiceResponseSchema, RouterConfigResponseV2Schema, RouterConfigResponseV2ServiceResponseSchema, RouterLocalContentResponseListServiceResponseSchema, RouterLocalContentResponseSchema, RouterResponseV2ForUserTerminalSchema, RouterResponseV2Schema, RouterResponseV2ServiceResponseSchema, SandboxClientResponsePaginatedSchema, SandboxClientResponsePaginatedServiceResponseSchema, SandboxClientResponseSchema, type SandboxHeartbeatRequest, type ServiceLineCreateRequest, ServiceLineDataBlocksSummaryResponseSchema, ServiceLineDataUsageForBillingCyclesPaginatedSchema, ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema, ServiceLineDataUsageForBillingCyclesSchema, ServiceLineResponsePaginatedSchema, ServiceLineResponsePaginatedServiceResponseSchema, ServiceLineResponseSchema, ServiceLineResponseServiceResponseSchema, type ServiceLineSetPublicIpRequest, type ServiceLineUpdateNicknameRequest, ServiceResponseSchema, Starlink, type StarlinkArgs, type StarlinkCredinitals, SubscriptionProductResponsePaginatedSchema, SubscriptionProductResponsePaginatedServiceResponseSchema, SubscriptionProductResponseSchema, type TlsConfigCreateRequest, type UpdateBatchSandboxClientRequest, type UpdateContactOnAccountRequest, type UpdateDefaultConfigRequest, type UpdateServiceLineProductRequest, UserLacksRequiredPermissionSchema, UserLacksRequiredPermissionServiceResponseSchema, UserResponsePaginatedSchema, UserResponsePaginatedServiceResponseSchema, UserResponseSchema, UserResponseServiceResponseSchema, UserTerminalResponseV2PaginatedSchema, UserTerminalResponseV2PaginatedServiceResponseSchema, UserTerminalResponseV2Schema, ValidationResultSchema };

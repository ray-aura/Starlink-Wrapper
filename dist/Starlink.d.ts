import Starlink_Connect from "./starlink_connect.js";
import type { AddressCreateRequest, AddressUpdateRequest, AssignRoutersConfigRequest, AssignUserTerminalsConfigRequest, CreateContactOnAccountRequest, CreateManagedCustomerRequest, DeleteTlsConfigRequest, DeviceIdRequest, L2VpnSetCircuitRequest, QueryDataUsageRequest, RecurringDataBlocksRequest, RouterConfigRequest, SandboxHeartbeatRequest, ServiceLineCreateRequest, ServiceLineSetPublicIpRequest, ServiceLineUpdateNicknameRequest, StarlinkArgs, TlsConfigCreateRequest, UpdateBatchSandboxClientRequest, UpdateContactOnAccountRequest, UpdateDefaultConfigRequest, UpdateServiceLineProductRequest } from "./Types.js";
declare class Starlink {
    private static instance;
    protected starlinkConnect: Starlink_Connect;
    private constructor();
    static getInstance(configurations: StarlinkArgs | [StarlinkArgs]): Starlink;
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
                nickname: string;
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
            nickname: string;
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
            nickname: string;
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
            nickname: string;
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
export default Starlink;
//# sourceMappingURL=Starlink.d.ts.map
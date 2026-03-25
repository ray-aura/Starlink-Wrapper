# Starlink Enterprise API Wrapper Documentation

A TypeScript wrapper for the Starlink Enterprise API v2. This library provides methods to manage Starlink accounts, service lines, routers, user terminals, and more.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Type Definitions](#type-definitions)
- [API Reference](#api-reference)
  - [Initialization](#initialization)
  - [Account Management](#account-management)
  - [Data Usage](#data-usage)
  - [Addresses](#addresses)
  - [Contacts](#contacts)
  - [Managed Customers](#managed-customers)
  - [Routers](#routers)
  - [Router Configs](#router-configs)
  - [Service Lines](#service-lines)
  - [User Terminals](#user-terminals)
  - [L2 VPN](#l2-vpn)

---

## Installation

```bash
npm install starlink-wrapper
```

## Quick Start

```typescript
import Starlink from "starlink-wrapper";

// Initialize with single account
const starlink = Starlink.init({
  ClientId: "your-client-id",
  AccountNumber: "ACC-1234567-89012-34",
  ClientSecret: "your-client-secret",
});

// Or initialize with multiple accounts
const starlink = Starlink.init([
  {
    ClientId: "client-id-1",
    AccountNumber: "ACC-1111111-11111-11",
    ClientSecret: "secret-1",
  },
  {
    ClientId: "client-id-2",
    AccountNumber: "ACC-2222222-22222-22",
    ClientSecret: "secret-2",
  },
]);

// Get the singleton instance
const client = Starlink.getInstance();

// Make API calls
const account = await client.getAccount("ACC-1111111-11111-11");
```

---

## Type Definitions

### Core Types

| Type | Description |
|------|-------------|
| [`StarlinkArgs`](#starlinkargs) | Configuration for initializing the API client |
| [`StarlinkCredinitals`](#starlinkcredinitals) | Internal credentials storage type |

### Request Types

| Type | Description |
|------|-------------|
| [`QueryDataUsageRequest`](#querydatausagerequest) | Filters for data usage queries |
| [`AddressCreateRequest`](#addresscreaterequest) | Request to create an address |
| [`AddressUpdateRequest`](#addressupdaterequest) | Request to update an address |
| [`CreateContactOnAccountRequest`](#createcontactonaccountrequest) | Request to create a contact |
| [`UpdateContactOnAccountRequest`](#updatecontactonaccountrequest) | Request to update a contact |
| [`CreateManagedCustomerRequest`](#createmanagedcustomerrequest) | Request to create managed customer |
| [`RouterConfigRequest`](#routerconfigrequest) | Request to create/update router config |
| [`AssignRoutersConfigRequest`](#assignroutersconfigrequest) | Request to assign config to routers |
| [`TlsConfigCreateRequest`](#tlsconfigcreaterequest) | Request to create TLS config |
| [`DeleteTlsConfigRequest`](#deletetlsconfigrequest) | Request to delete TLS config |
| [`ServiceLineCreateRequest`](#servicelinecreaterequest) | Request to create service line |
| [`ServiceLineUpdateNicknameRequest`](#servicelineupdatenicknamerequest) | Request to update service line nickname |
| [`UpdateServiceLineProductRequest`](#updateservicelineproductrequest) | Request to update service line product |
| [`ServiceLineSetPublicIpRequest`](#servicelinesetpubliciprequest) | Request to set public IP |
| [`RecurringDataBlocksRequest`](#recurringdatablocksrequest) | Request for recurring data blocks |

### Response Types (Jump to: [Schemas](#schemas-reference))

| Type | Description |
|------|-------------|
| [`AccountResponseV2ServiceResponseSchema`](#accountresponsev2serviceresponseschema) | Account information response |
| [`AddressResponseServiceResponseSchema`](#addressresponseserviceresponseschema) | Single address response |
| [`AddressResponsePaginatedServiceResponseSchema`](#addressresponsepaginatedserviceresponseschema) | Paginated addresses response |
| [`ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema`](#servicelinedatausageforbillingcyclespaginatedserviceresponseschema) | Data usage response |
| [`ServiceLineResponseServiceResponseSchema`](#servicelineresponseserviceresponseschema) | Single service line response |
| [`ServiceLineResponsePaginatedServiceResponseSchema`](#servicelineresponsepaginatedserviceresponseschema) | Paginated service lines response |
| [`UserTerminalResponseV2PaginatedServiceResponseSchema`](#userterminalresponsev2paginatedserviceresponseschema) | Paginated user terminals response |
| [`RouterResponseV2ServiceResponseSchema`](#routerresponsev2serviceresponseschema) | Router information response |
| [`RouterConfigResponseV2ServiceResponseSchema`](#routerconfigresponsev2serviceresponseschema) | Router config response |
| [`RouterConfigResponseV2PaginatedServiceResponseSchema`](#routerconfigresponsev2paginatedserviceresponseschema) | Paginated router configs response |

---

## Type Definitions Reference

### StarlinkArgs

Configuration object for initializing the API client.

```typescript
interface StarlinkArgs {
  ClientId: string;       // OAuth client ID
  AccountNumber: string; // Your Starlink account number
  ClientSecret: string;  // OAuth client secret
}
```

### StarlinkCredinitals

Internal credentials storage (for reference only).

```typescript
interface StarlinkCredinitals {
  ClientId: string;
  ClientSecret: string;
  AccessToken: string | null;
  TimeCreated: number | null;
}
```

### QueryDataUsageRequest

Filters for querying data usage.

```typescript
interface QueryDataUsageRequest {
  serviceLineNumbers?: string[];     // Filter by specific service lines
  previousBillingCycles?: number;   // Number of previous cycles to retrieve
  activeServiceLinesOnly: boolean;   // Only include active service lines
  queryStartDate?: Date;            // Start date for the query
}
```

### AddressCreateRequest

Request to create a new address.

```typescript
interface AddressCreateRequest {
  addressLines: string[];            // Street address lines
  locality?: string;                 // City/town
  administrativeArea?: string;        // State/province name
  administrativeAreaCode: string;     // State/province code (required)
  region?: string;                   // Region name
  regionCode: string;                // Region code (required)
  postalCode?: string;                // Postal/ZIP code
  metadata?: string;                 // Optional metadata
  formattedAddress: string;          // Formatted address string
  latitude: number;                  // GPS latitude
  longitude: number;                 // GPS longitude
}
```

### AddressUpdateRequest

Request to update an existing address.

```typescript
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
```

### CreateContactOnAccountRequest

Request to create a new contact on the account.

```typescript
interface CreateContactOnAccountRequest {
  firstName: string;    // Contact's first name
  lastName: string;     // Contact's last name
  roles: string[];      // Roles to assign (e.g., ["admin", "viewer"])
  email: string;        // Contact's email address
  phoneNumber: string;  // Contact's phone number
  locale: string;       // Locale (e.g., "en-US")
}
```

### UpdateContactOnAccountRequest

Request to update an existing contact.

```typescript
interface UpdateContactOnAccountRequest {
  roles?: string[];      // Updated roles
  phoneNumber?: string;  // Updated phone number
}
```

### CreateManagedCustomerRequest

Request to create a managed customer account (requires provider account).

```typescript
interface CreateManagedCustomerRequest {
  firstName: string;     // Customer's first name
  lastName: string;      // Customer's last name
  email: string;         // Customer's email
  phone: string;         // Customer's phone
  locale: string;        // Locale
  businessName?: string; // Optional business name
}
```

### RouterConfigRequest

Request to create or update a router configuration.

```typescript
interface RouterConfigRequest {
  nickname?: string;         // Friendly name for the config
  routerConfigJson: string;  // JSON configuration string
}
```

### AssignRoutersConfigRequest

Request to assign a configuration to routers.

```typescript
interface AssignRoutersConfigRequest {
  configId?: string;      // Config ID to assign (empty to unassign)
  routerIds: string[];   // List of router IDs to assign to
}
```

### TlsConfigCreateRequest

Request to create a TLS configuration.

```typescript
interface TlsConfigCreateRequest {
  certificateBase64Pem: string;  // Base64-encoded PEM certificate
  keyBase64Pem: string;          // Base64-encoded PEM key
}
```

### DeleteTlsConfigRequest

Request to delete a TLS configuration.

```typescript
interface DeleteTlsConfigRequest {
  certificateBase64Pem: string;  // Base64-encoded PEM certificate to delete
}
```

### ServiceLineCreateRequest

Request to create a new service line.

```typescript
interface ServiceLineCreateRequest {
  addressReferenceId: string;      // Address ID to associate
  productReferenceId: string;      // Product ID for the service
  dataBlockProducts?: RecurringDataBlocksRequest; // Optional data blocks
}
```

### ServiceLineUpdateNicknameRequest

Request to update a service line's nickname.

```typescript
interface ServiceLineUpdateNicknameRequest {
  nickname: string;  // New nickname for the service line
}
```

### UpdateServiceLineProductRequest

Request to update a service line's product.

```typescript
interface UpdateServiceLineProductRequest {
  productReferenceId: string;           // New product ID
  recurringDataBlocks?: AddDataBlockRequest[]; // Optional recurring data blocks
  existingDataPoolId?: string;           // Existing data pool to use
  delayUpdate?: boolean;                 // Delay the update
}
```

### ServiceLineSetPublicIpRequest

Request to set public IP on a service line.

```typescript
interface ServiceLineSetPublicIpRequest {
  publicIp: boolean;  // Enable or disable public IP
}
```

### RecurringDataBlocksRequest

Request for recurring data blocks configuration.

```typescript
interface RecurringDataBlocksRequest {
  recurringDataBlocks?: AddDataBlockRequest[]; // Data blocks to add
  existingDataPoolId?: string;                 // Existing data pool ID
}
```

### AddDataBlockRequest

Request to add a data block.

```typescript
interface AddDataBlockRequest {
  productId: string;  // Product ID for the data block
  count: number;      // Number of blocks to add
}
```

---

## API Reference

### Initialization

#### `Starlink.init()`

Initializes the Starlink API client singleton.

```typescript
static init(configurations: StarlinkArgs | StarlinkArgs[]): Starlink
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `configurations` | `StarlinkArgs \| StarlinkArgs[]` | Single account config or array of configs |

**Returns:** `Starlink` - The singleton instance

**Example:**
```typescript
// Single account
const starlink = Starlink.init({
  ClientId: "your-client-id",
  AccountNumber: "ACC-1234567-89012-34",
  ClientSecret: "your-secret",
});

// Multiple accounts
const starlink = Starlink.init([
  { ClientId: "id1", AccountNumber: "ACC-1", ClientSecret: "s1" },
  { ClientId: "id2", AccountNumber: "ACC-2", ClientSecret: "s2" },
]);
```

---

#### `Starlink.getInstance()`

Gets the initialized singleton instance.

```typescript
static getInstance(): Starlink
```

**Returns:** `Starlink` - The singleton instance

**Throws:** `Error` if not initialized

**Example:**
```typescript
const client = Starlink.getInstance();
```

---

## Account Management

### `getAccount()`

Retrieves account information.

```typescript
async getAccount(accountNumber: string): Promise<AccountResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |

**Returns:** `AccountResponseV2ServiceResponseSchema` - Account details including account number, region, and active suspensions

**Example:**
```typescript
const account = await client.getAccount("ACC-1234567-89012-34");
console.log(account.content.accountNumber);
console.log(account.content.regionCode);
console.log(account.content.activeSuspensions);
```

---

### `getProducts()`

Gets all products available to the account.

```typescript
async getProducts(accountNumber: string, page: number = 0): Promise<SubscriptionProductResponsePaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `page` | `number` | `0` | Page index |

**Returns:** `SubscriptionProductResponsePaginatedServiceResponseSchema` - Paginated list of available products

**Example:**
```typescript
const products = await client.getProducts("ACC-1234567-89012-34");
for (const product of products.content.results) {
  console.log(`${product.name}: $${product.price}/month`);
}
```

---

## Data Usage

### `DataUsageQuery()`

Retrieves real-time data tracking information for the account.

```typescript
async DataUsageQuery(
  accountNumber: string,
  page: number = 0,
  limit: number = 50,
  queryDataUsageRequest: QueryDataUsageRequest = { activeServiceLinesOnly: true }
): Promise<ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `page` | `number` | `0` | Page index |
| `limit` | `number` | `50` | Results per page (max 250) |
| `queryDataUsageRequest` | `QueryDataUsageRequest` | `{ activeServiceLinesOnly: true }` | Query filters |

**Returns:** `ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema` - Data usage per billing cycle

**Example:**
```typescript
const usage = await client.DataUsageQuery("ACC-1234567-89012-34", 0, 50, {
  activeServiceLinesOnly: true,
  previousBillingCycles: 2,
});

for (const result of usage.content.results) {
  console.log(`Service Line: ${result.serviceLineNumber}`);
  for (const cycle of result.billingCycles) {
    console.log(`  Total Priority: ${cycle.totalPriorityGB} GB`);
    console.log(`  Total Standard: ${cycle.totalStandardGB} GB`);
  }
}
```

---

## Addresses

### `getAddresses()`

Retrieves all addresses on the account.

```typescript
async getAddresses(
  accountNumber: string,
  addressIds?: string[],
  metadata?: string,
  page: number = 0
): Promise<AddressResponsePaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `addressIds` | `string[]` | - | Filter by specific address IDs |
| `metadata` | `string` | - | Filter by metadata |
| `page` | `number` | `0` | Page index |

**Returns:** `AddressResponsePaginatedServiceResponseSchema` - Paginated list of addresses

**Example:**
```typescript
const addresses = await client.getAddresses("ACC-1234567-89012-34");
for (const addr of addresses.content.results) {
  console.log(`${addr.formattedAddress} (${addr.latitude}, ${addr.longitude})`);
}
```

---

### `createAddress()`

Creates a new address on the account.

```typescript
async createAddress(
  accountNumber: string,
  address: AddressCreateRequest
): Promise<AddressResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `address` | `AddressCreateRequest` | The address details |

**Returns:** `AddressResponseServiceResponseSchema` - Created address

**Example:**
```typescript
const newAddress = await client.createAddress("ACC-1234567-89012-34", {
  addressLines: ["123 Main St", "Suite 100"],
  locality: "San Francisco",
  administrativeArea: "California",
  administrativeAreaCode: "CA",
  region: "US",
  regionCode: "US",
  postalCode: "94102",
  formattedAddress: "123 Main St, Suite 100, San Francisco, CA 94102",
  latitude: 37.7749,
  longitude: -122.4194,
});
console.log(newAddress.content.addressReferenceId);
```

---

### `getAddress()`

Retrieves a single address by ID.

```typescript
async getAddress(
  accountNumber: string,
  addressReferenceId: string
): Promise<AddressResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `addressReferenceId` | `string` | The address reference ID |

**Returns:** `AddressResponseServiceResponseSchema` - Address details

**Example:**
```typescript
const address = await client.getAddress(
  "ACC-1234567-89012-34",
  "55ec6574-10d8-bd9c-1951-d4184f4ae467"
);
```

---

### `updateAddress()`

Updates an existing address.

```typescript
async updateAddress(
  accountNumber: string,
  addressReferenceId: string,
  address: AddressUpdateRequest
): Promise<AddressResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `addressReferenceId` | `string` | The address reference ID |
| `address` | `AddressUpdateRequest` | Updated address details |

**Returns:** `AddressResponseServiceResponseSchema` - Updated address

**Example:**
```typescript
const updated = await client.updateAddress(
  "ACC-1234567-89012-34",
  "55ec6574-10d8-bd9c-1951-d4184f4ae467",
  {
    addressLines: ["456 New St"],
    locality: "Los Angeles",
    administrativeArea: "California",
    administrativeAreaCode: "CA",
    region: "US",
    regionCode: "US",
    formattedAddress: "456 New St, Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437,
  }
);
```

---

## Contacts

### `getContacts()`

Retrieves all contacts on the account.

```typescript
async getContacts(accountNumber: string, page: number = 0): Promise<UserResponsePaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `page` | `number` | `0` | Page index |

**Returns:** `UserResponsePaginatedServiceResponseSchema` - Paginated list of contacts

**Example:**
```typescript
const contacts = await client.getContacts("ACC-1234567-89012-34");
for (const contact of contacts.content.results) {
  console.log(`${contact.email} - Roles: ${contact.roles.join(", ")}`);
}
```

---

### `createContact()`

Creates a new contact on the account.

```typescript
async createContact(
  accountNumber: string,
  contact: CreateContactOnAccountRequest
): Promise<UserResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `contact` | `CreateContactOnAccountRequest` | Contact details |

**Returns:** `UserResponseServiceResponseSchema` - Created contact

**Example:**
```typescript
const contact = await client.createContact("ACC-1234567-89012-34", {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "+1-555-123-4567",
  locale: "en-US",
  roles: ["admin"],
});
```

---

### `updateContact()`

Updates an existing contact.

```typescript
async updateContact(
  accountNumber: string,
  subjectId: string,
  contact: UpdateContactOnAccountRequest
): Promise<UserResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `subjectId` | `string` | Contact's subject ID |
| `contact` | `UpdateContactOnAccountRequest` | Updated details |

**Returns:** `UserResponseServiceResponseSchema` - Updated contact

**Example:**
```typescript
const updated = await client.updateContact(
  "ACC-1234567-89012-34",
  "user-subject-id-123",
  { roles: ["admin", "billing"] }
);
```

---

### `deleteContact()`

Deletes a contact from the account.

```typescript
async deleteContact(accountNumber: string, subjectId: string): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `subjectId` | `string` | Contact's subject ID |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.deleteContact("ACC-1234567-89012-34", "user-subject-id-123");
```

---

## Managed Customers

### `createManagedCustomer()`

Creates a managed customer account (requires provider account).

```typescript
async createManagedCustomer(
  accountNumber: string,
  customer: CreateManagedCustomerRequest
): Promise<CreateManagedCustomerResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | Provider account number |
| `customer` | `CreateManagedCustomerRequest` | Customer details |

**Returns:** `CreateManagedCustomerResponseServiceResponseSchema` - Created customer credentials

**Example:**
```typescript
const customer = await client.createManagedCustomer("ACC-PROVIDER-123", {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@company.com",
  phone: "+1-555-987-6543",
  locale: "en-US",
  businessName: "Smith Industries",
});

// Save these credentials securely - they won't be shown again
console.log(`New Account: ${customer.content.accountNumber}`);
console.log(`Client ID: ${customer.content.serviceAccountClientId}`);
console.log(`Client Secret: ${customer.content.serviceAccountSecret}`);
```

---

## Routers

### `getRouter()`

Retrieves information about a specific router.

```typescript
async getRouter(accountNumber: string, routerId: string): Promise<RouterResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `routerId` | `string` | Router ID |

**Returns:** `RouterResponseV2ServiceResponseSchema` - Router details

**Example:**
```typescript
const router = await client.getRouter("ACC-1234567-89012-34", "010000000000000000012345");
console.log(`Hardware: ${router.content.hardwareVersion}`);
console.log(`Config: ${router.content.configId}`);
```

---

### `rebootRouter()`

Reboots a router.

```typescript
async rebootRouter(accountNumber: string, routerId: string): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `routerId` | `string` | Router ID to reboot |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.rebootRouter("ACC-1234567-89012-34", "010000000000000000012345");
```

---

### `getSandboxClients()`

Retrieves sandbox clients that were unsandboxed through the management API.

```typescript
async getSandboxClients(
  accountNumber: string,
  sandboxId?: number,
  expiryAfter?: string,
  page: number = 0
): Promise<SandboxClientResponsePaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `sandboxId` | `number` | - | Filter by sandbox ID |
| `expiryAfter` | `string` | - | ISO date-time string |
| `page` | `number` | `0` | Page index |

**Returns:** `SandboxClientResponsePaginatedServiceResponseSchema` - Paginated sandbox clients

**Example:**
```typescript
const clients = await client.getSandboxClients("ACC-1234567-89012-34", undefined, "2024-01-01T00:00:00Z");
```

---

### `batchUpdateSandboxClients()`

Batch updates sandbox state for multiple clients.

```typescript
async batchUpdateSandboxClients(
  accountNumber: string,
  requests: UpdateBatchSandboxClientRequest[]
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `requests` | `UpdateBatchSandboxClientRequest[]` | Update requests |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.batchUpdateSandboxClients("ACC-1234567-89012-34", [
  { clientId: "client-1", sandboxId: 123, expiry: "2024-12-31T23:59:59Z" },
  { clientId: "client-2", sandboxId: 456, expiry: "2024-06-30T23:59:59Z" },
]);
```

---

### `sendSandboxHeartbeat()`

Sends a sandbox heartbeat to verify health of enterprise systems.

```typescript
async sendSandboxHeartbeat(
  accountNumber: string,
  request: SandboxHeartbeatRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `SandboxHeartbeatRequest` | `{ healthy: boolean }` |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.sendSandboxHeartbeat("ACC-1234567-89012-34", { healthy: true });
```

---

## Router Configs

### `getRouterConfigs()`

Retrieves all router configurations on the account.

```typescript
async getRouterConfigs(accountNumber: string, page: number = 0): Promise<RouterConfigResponseV2PaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `page` | `number` | `0` | Page index |

**Returns:** `RouterConfigResponseV2PaginatedServiceResponseSchema` - Paginated router configs

**Example:**
```typescript
const configs = await client.getRouterConfigs("ACC-1234567-89012-34");
for (const config of configs.content.results) {
  console.log(`${config.nickname}: ${config.configId}`);
}
```

---

### `createRouterConfig()`

Creates a new router configuration.

```typescript
async createRouterConfig(
  accountNumber: string,
  config: RouterConfigRequest
): Promise<RouterConfigResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `config` | `RouterConfigRequest` | Configuration details |

**Returns:** `RouterConfigResponseV2ServiceResponseSchema` - Created config

**Example:**
```typescript
const config = await client.createRouterConfig("ACC-1234567-89012-34", {
  nickname: "Production Config",
  routerConfigJson: JSON.stringify({
    wifi: { enabled: true, ssid: "Starlink-Network" },
    firewall: { enabled: true },
  }),
});
```

---

### `getRouterConfig()`

Retrieves a specific router configuration.

```typescript
async getRouterConfig(accountNumber: string, configId: string): Promise<RouterConfigResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `configId` | `string` | Configuration ID |

**Returns:** `RouterConfigResponseV2ServiceResponseSchema` - Config details

**Example:**
```typescript
const config = await client.getRouterConfig("ACC-1234567-89012-34", "DVC_CFG-12341234");
```

---

### `updateRouterConfig()`

Updates an existing router configuration.

```typescript
async updateRouterConfig(
  accountNumber: string,
  configId: string,
  config: RouterConfigRequest
): Promise<RouterConfigResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `configId` | `string` | Configuration ID |
| `config` | `RouterConfigRequest` | Updated config |

**Returns:** `RouterConfigResponseV2ServiceResponseSchema` - Updated config

**Example:**
```typescript
const updated = await client.updateRouterConfig(
  "ACC-1234567-89012-34",
  "DVC_CFG-12341234",
  { nickname: "Updated Config", routerConfigJson: "{}" }
);
```

---

### `assignRoutersConfig()`

Assigns a configuration to routers.

```typescript
async assignRoutersConfig(
  accountNumber: string,
  request: AssignRoutersConfigRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `AssignRoutersConfigRequest` | Assignment request |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.assignRoutersConfig("ACC-1234567-89012-34", {
  configId: "DVC_CFG-12341234",
  routerIds: ["router-1", "router-2"],
});
```

---

### `getDefaultRouterConfig()`

Gets the default router configuration ID.

```typescript
async getDefaultRouterConfig(accountNumber: string): Promise<DefaultRouterConfigResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |

**Returns:** `DefaultRouterConfigResponseServiceResponseSchema` - Default config ID

**Example:**
```typescript
const defaultConfig = await client.getDefaultRouterConfig("ACC-1234567-89012-34");
console.log(`Default Config: ${defaultConfig.content.configId}`);
```

---

### `setDefaultRouterConfig()`

Sets the default router configuration for new routers.

```typescript
async setDefaultRouterConfig(
  accountNumber: string,
  request: UpdateDefaultConfigRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `UpdateDefaultConfigRequest` | `{ configId: string }` |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.setDefaultRouterConfig("ACC-1234567-89012-34", { configId: "DVC_CFG-NEW" });
```

---

### `getTlsConfigs()`

Retrieves all TLS configurations on the account.

```typescript
async getTlsConfigs(accountNumber: string, page: number = 0): Promise<DefaultRouterConfigResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `page` | `number` | `0` | Page index |

**Returns:** `DefaultRouterConfigResponseServiceResponseSchema` - TLS config list

**Example:**
```typescript
const tlsConfigs = await client.getTlsConfigs("ACC-1234567-89012-34");
```

---

### `createTlsConfig()`

Creates a new TLS configuration.

```typescript
async createTlsConfig(
  accountNumber: string,
  request: TlsConfigCreateRequest
): Promise<DefaultRouterConfigResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `TlsConfigCreateRequest` | Certificate and key |

**Returns:** `DefaultRouterConfigResponseServiceResponseSchema` - Created config

**Example:**
```typescript
import fs from "fs";

const cert = fs.readFileSync("cert.pem", "base64");
const key = fs.readFileSync("key.pem", "base64");

await client.createTlsConfig("ACC-1234567-89012-34", {
  certificateBase64Pem: cert,
  keyBase64Pem: key,
});
```

---

### `deleteTlsConfig()`

Deletes a TLS configuration.

```typescript
async deleteTlsConfig(
  accountNumber: string,
  request: DeleteTlsConfigRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `DeleteTlsConfigRequest` | Certificate to delete |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.deleteTlsConfig("ACC-1234567-89012-34", {
  certificateBase64Pem: "base64-encoded-cert",
});
```

---

### `uploadRouterLocalContent()`

Uploads an HTML file for router local content.

```typescript
async uploadRouterLocalContent(
  accountNumber: string,
  fileContent: string,
  fileName: string
): Promise<AddRouterLocalContentResponseV2ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `fileContent` | `string` | HTML file content |
| `fileName` | `string` | File name |

**Returns:** `AddRouterLocalContentResponseV2ServiceResponseSchema` - Upload result

**Example:**
```typescript
const htmlContent = `<html><body><h1>Welcome</h1></body></html>`;
const uploaded = await client.uploadRouterLocalContent(
  "ACC-1234567-89012-34",
  htmlContent,
  "welcome.html"
);
console.log(`File ID: ${uploaded.content.fileContentId}`);
```

---

### `getRouterLocalContentFiles()`

Lists all uploaded router local content files.

```typescript
async getRouterLocalContentFiles(accountNumber: string): Promise<RouterLocalContentResponseListServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |

**Returns:** `RouterLocalContentResponseListServiceResponseSchema` - List of files

**Example:**
```typescript
const files = await client.getRouterLocalContentFiles("ACC-1234567-89012-34");
for (const file of files.content) {
  console.log(`${file.nickname} - ${file.uploadDate}`);
}
```

---

## Service Lines

### `getServiceLines()`

Retrieves service lines with optional filters.

```typescript
async getServiceLines(
  accountNumber: string,
  addressReferenceId?: string,
  searchString?: string,
  dataPoolId?: string,
  page: number = 0,
  orderByCreatedDateDescending: boolean = true
): Promise<ServiceLineResponsePaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `addressReferenceId` | `string` | - | Filter by address |
| `searchString` | `string` | - | Search filter |
| `dataPoolId` | `string` | - | Filter by data pool |
| `page` | `number` | `0` | Page index |
| `orderByCreatedDateDescending` | `boolean` | `true` | Sort order |

**Returns:** `ServiceLineResponsePaginatedServiceResponseSchema` - Paginated service lines

**Example:**
```typescript
const lines = await client.getServiceLines("ACC-1234567-89012-34");
for (const line of lines.content.results) {
  console.log(`${line.nickname}: ${line.serviceLineNumber}`);
  console.log(`  Active: ${line.active}, Public IP: ${line.publicIp}`);
}
```

---

### `createServiceLine()`

Creates a new service line.

```typescript
async createServiceLine(
  accountNumber: string,
  request: ServiceLineCreateRequest
): Promise<ServiceLineResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `ServiceLineCreateRequest` | Service line details |

**Returns:** `ServiceLineResponseServiceResponseSchema` - Created service line

**Example:**
```typescript
const line = await client.createServiceLine("ACC-1234567-89012-34", {
  addressReferenceId: "addr-123",
  productReferenceId: "prod-456",
});
```

---

### `getServiceLine()`

Retrieves a specific service line.

```typescript
async getServiceLine(
  accountNumber: string,
  serviceLineNumber: string
): Promise<ServiceLineResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |

**Returns:** `ServiceLineResponseServiceResponseSchema` - Service line details

**Example:**
```typescript
const line = await client.getServiceLine("ACC-1234567-89012-34", "AST-511274-31364-54");
```

---

### `deactivateServiceLine()`

Deactivates a service line.

```typescript
async deactivateServiceLine(
  accountNumber: string,
  serviceLineNumber: string,
  reasonForCancellation?: string,
  endNow: boolean = false
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `serviceLineNumber` | `string` | - | Service line to deactivate |
| `reasonForCancellation` | `string` | - | Cancellation reason |
| `endNow` | `boolean` | `false` | End immediately |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.deactivateServiceLine(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  "Customer requested",
  true
);
```

---

### `setServiceLineNickname()`

Updates a service line's nickname.

```typescript
async setServiceLineNickname(
  accountNumber: string,
  serviceLineNumber: string,
  request: ServiceLineUpdateNicknameRequest
): Promise<ServiceLineResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `ServiceLineUpdateNicknameRequest` | `{ nickname: string }` |

**Returns:** `ServiceLineResponseServiceResponseSchema` - Updated service line

**Example:**
```typescript
const updated = await client.setServiceLineNickname(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  { nickname: "Home Office" }
);
```

---

### `updateServiceLineProduct()`

Updates a service line's product.

```typescript
async updateServiceLineProduct(
  accountNumber: string,
  serviceLineNumber: string,
  request: UpdateServiceLineProductRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `UpdateServiceLineProductRequest` | Update details |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.updateServiceLineProduct(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  { productReferenceId: "new-product-id", delayUpdate: true }
);
```

---

### `setServiceLinePublicIp()`

Sets public IP on a service line.

```typescript
async setServiceLinePublicIp(
  accountNumber: string,
  serviceLineNumber: string,
  request: ServiceLineSetPublicIpRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `ServiceLineSetPublicIpRequest` | `{ publicIp: boolean }` |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.setServiceLinePublicIp(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  { publicIp: true }
);
```

---

### `optInPriorityData()`

Opts in a service line to priority data.

```typescript
async optInPriorityData(
  accountNumber: string,
  serviceLineNumber: string
): Promise<OptInResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |

**Returns:** `OptInResponseServiceResponseSchema` - Opt-in result

**Example:**
```typescript
const result = await client.optInPriorityData(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54"
);
console.log(`Opt-in Product: ${result.content.productId}`);
```

---

### `optOutPriorityData()`

Opts out a service line from priority data.

```typescript
async optOutPriorityData(
  accountNumber: string,
  serviceLineNumber: string
): Promise<OptInResponseServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |

**Returns:** `OptInResponseServiceResponseSchema` - Opt-out result

**Example:**
```typescript
await client.optOutPriorityData("ACC-1234567-89012-34", "AST-511274-31364-54");
```

---

### `addUserTerminalToServiceLine()`

Adds a user terminal to a service line.

```typescript
async addUserTerminalToServiceLine(
  accountNumber: string,
  serviceLineNumber: string,
  request: DeviceIdRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `DeviceIdRequest` | `{ deviceId: string }` |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.addUserTerminalToServiceLine(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  { deviceId: "ut-123456" }
);
```

---

### `removeUserTerminalFromServiceLine()`

Removes a user terminal from a service line.

```typescript
async removeUserTerminalFromServiceLine(
  accountNumber: string,
  serviceLineNumber: string,
  deviceId: string
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `deviceId` | `string` | Device ID to remove |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.removeUserTerminalFromServiceLine(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  "ut-123456"
);
```

---

### `setServiceLineRecurringDataBlocks()`

Sets recurring data blocks for a service line.

```typescript
async setServiceLineRecurringDataBlocks(
  accountNumber: string,
  serviceLineNumber: string,
  request: RecurringDataBlocksRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `RecurringDataBlocksRequest` | Data blocks config |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.setServiceLineRecurringDataBlocks(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  {
    recurringDataBlocks: [{ productId: "data-block-prod", count: 2 }],
  }
);
```

---

### `addServiceLineTopUpData()`

Adds top-up data to a service line.

```typescript
async addServiceLineTopUpData(
  accountNumber: string,
  serviceLineNumber: string,
  request: { productId: string; count: number }
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |
| `request` | `{ productId: string; count: number }` | Top-up details |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.addServiceLineTopUpData(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  { productId: "topup-50gb", count: 1 }
);
```

---

### `getBillingPartialPeriods()`

Gets billing partial periods for a service line.

```typescript
async getBillingPartialPeriods(
  accountNumber: string,
  serviceLineNumber: string
): Promise<PartialPeriodResponseListServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `serviceLineNumber` | `string` | Service line number |

**Returns:** `PartialPeriodResponseListServiceResponseSchema` - Partial periods

**Example:**
```typescript
const periods = await client.getBillingPartialPeriods(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54"
);
for (const period of periods.content) {
  console.log(`${period.productReferenceId}: ${period.periodStart} to ${period.periodEnd}`);
}
```

---

## User Terminals

### `getUserTerminals()`

Retrieves user terminals with optional filters.

```typescript
async getUserTerminals(
  accountNumber: string,
  serviceLineNumbers?: string[],
  userTerminalIds?: string[],
  hasServiceLine?: boolean,
  searchString?: string,
  page: number = 0
): Promise<UserTerminalResponseV2PaginatedServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `accountNumber` | `string` | - | The account number |
| `serviceLineNumbers` | `string[]` | - | Filter by service lines |
| `userTerminalIds` | `string[]` | - | Filter by terminal IDs |
| `hasServiceLine` | `boolean` | - | Filter by assignment |
| `searchString` | `string` | - | Search filter |
| `page` | `number` | `0` | Page index |

**Returns:** `UserTerminalResponseV2PaginatedServiceResponseSchema` - Paginated terminals

**Example:**
```typescript
const terminals = await client.getUserTerminals("ACC-1234567-89012-34");
for (const terminal of terminals.content.results) {
  console.log(`Kit: ${terminal.kitSerialNumber}, Dish: ${terminal.dishSerialNumber}`);
  console.log(`Service Line: ${terminal.serviceLineNumber}`);
}
```

---

### `addUserTerminal()`

Adds a user terminal to the account.

```typescript
async addUserTerminal(
  accountNumber: string,
  request: DeviceIdRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `DeviceIdRequest` | `{ deviceId: string }` |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.addUserTerminal("ACC-1234567-89012-34", { deviceId: "ut-new-123" });
```

---

### `removeUserTerminal()`

Removes a user terminal from the account.

```typescript
async removeUserTerminal(accountNumber: string, deviceId: string): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `deviceId` | `string` | Device ID to remove |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.removeUserTerminal("ACC-1234567-89012-34", "ut-old-456");
```

---

### `rebootUserTerminal()`

Reboots a user terminal.

```typescript
async rebootUserTerminal(accountNumber: string, deviceId: string): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `deviceId` | `string` | Device ID to reboot |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.rebootUserTerminal("ACC-1234567-89012-34", "ut-123456");
```

---

### `assignUserTerminalsConfig()`

Assigns a configuration to user terminals.

```typescript
async assignUserTerminalsConfig(
  accountNumber: string,
  request: AssignUserTerminalsConfigRequest
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `request` | `AssignUserTerminalsConfigRequest` | Assignment request |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.assignUserTerminalsConfig("ACC-1234567-89012-34", {
  configId: "DVC_CFG-12341234",
  userTerminalIds: ["ut-1", "ut-2", "ut-3"],
});
```

---

## L2 VPN

### `getL2VpnCircuits()`

Retrieves L2 VPN circuits available.

```typescript
async getL2VpnCircuits(accountNumber: string): Promise<L2VpnCircuitResponseListServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |

**Returns:** `L2VpnCircuitResponseListServiceResponseSchema` - Available circuits

**Example:**
```typescript
const circuits = await client.getL2VpnCircuits("ACC-1234567-89012-34");
for (const circuit of circuits.content) {
  console.log(`Circuit: ${circuit.circuitId} at ${circuit.popName}`);
}
```

---

### `setUserTerminalL2VpnVlan()`

Sets L2 VPN VLAN configuration on a user terminal.

```typescript
async setUserTerminalL2VpnVlan(
  accountNumber: string,
  deviceId: string,
  circuits: L2VpnSetCircuitRequest[]
): Promise<ServiceResponseSchema>
```

**Arguments:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `accountNumber` | `string` | The account number |
| `deviceId` | `string` | User terminal device ID |
| `circuits` | `L2VpnSetCircuitRequest[]` | Circuit configurations |

**Returns:** `ServiceResponseSchema` - Operation result

**Example:**
```typescript
await client.setUserTerminalL2VpnVlan(
  "ACC-1234567-89012-34",
  "ut-123456",
  [
    {
      circuitId: "CKT-001",
      customerVlans: [100, 101, 102],
      serviceVlan: 200,
    },
  ]
);
```

---

## Schemas Reference

### AccountResponseV2ServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    accountNumber: string;
    regionCode: string;
    accountName: string | null;
    activeSuspensions: string[] | null;
  };
}
```

---

### AddressResponseServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
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
}
```

---

### AddressResponsePaginatedServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    pageIndex: number;
    limit: number;
    isLastPage: boolean;
    results: AddressResponse[] | null;
    totalCount: number;
  };
}
```

---

### ServiceLineDataUsageForBillingCyclesPaginatedServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    pageIndex: number;
    limit: number;
    isLastPage: boolean;
    results: ServiceLineDataUsageForBillingCycles[] | null;
    totalCount: number;
  };
}

// ServiceLineDataUsageForBillingCycles
{
  accountNumber: string | null;
  serviceLineNumber: string | null;
  startDate: string;
  endDate: string;
  billingCycles: DataUsageBillingCycleV2[] | null;
  servicePlan: DataServicePlan | null;
  lastUpdated: string | null;
}

// DataUsageBillingCycleV2
{
  startDate: string;
  endDate: string;
  dailyDataUsage: DataUsageDailyV2[] | null;
  overageLines: DataUsageOverageLine[] | null;
  dataPoolUsage: any[] | null;
  totalPriorityGB: number;
  totalStandardGB: number;
  totalOptInPriorityGB: number;
  totalNonBillableGB: number;
}
```

---

### ServiceLineResponseServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
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
    aviationMetadata: AviationMetadata | null;
    dataBlocks: ServiceLineDataBlocksSummary | null;
  };
}
```

---

### ServiceLineResponsePaginatedServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    pageIndex: number;
    limit: number;
    isLastPage: boolean;
    results: ServiceLineResponse[] | null;
    totalCount: number;
  };
}
```

---

### UserTerminalResponseV2PaginatedServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    pageIndex: number;
    limit: number;
    isLastPage: boolean;
    results: UserTerminalResponseV2[] | null;
    totalCount: number;
  };
}

// UserTerminalResponseV2
{
  userTerminalId: string;
  nickname: string | null;
  kitSerialNumber: string;
  dishSerialNumber: string;
  serviceLineNumber: string | null;
  l2VpnCircuits: L2VpnCircuitDefinition[];
  routers: RouterResponseV2ForUserTerminal[];
}
```

---

### RouterResponseV2ServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
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
}
```

---

### RouterConfigResponseV2ServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    configId: string;
    nickname: string;
    routerConfigJson: string;
  };
}
```

---

### RouterConfigResponseV2PaginatedServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
  content: {
    pageIndex: number;
    limit: number;
    isLastPage: boolean;
    results: RouterConfigResponseV2[] | null;
    totalCount: number;
  };
}
```

---

### ServiceResponseSchema

```typescript
{
  errors: ValidationResult[] | null;
  warnings: ValidationResult[] | null;
  information: string[] | null;
  isValid: boolean;
}
```

---

## Error Handling

All methods return Zod-validated responses. If the API returns an error response, the Zod validation will throw. Additionally, network errors and authentication failures will throw JavaScript errors.

```typescript
import Starlink from "starlink-wrapper";

const client = Starlink.getInstance();

try {
  const account = await client.getAccount("ACC-1234567-89012-34");
  console.log(account.content.accountNumber);
} catch (error) {
  if (error.message.includes("401")) {
    console.error("Authentication failed - check your credentials");
  } else if (error.message.includes("403")) {
    console.error("Permission denied - missing required permissions");
  } else {
    console.error("API error:", error.message);
  }
}
```

---

## License

MIT

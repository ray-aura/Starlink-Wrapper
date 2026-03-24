# Starlink Wrapper

A typesafe TypeScript wrapper for the Starlink Enterprise API v2.

## Installation

```bash
npm install starlink-wrapper
```

## Quick Start

```typescript
import Starlink from "starlink-wrapper";

const starlink = Starlink.getInstance({
  ClientId: "your-client-id",
  AccountNumber: "your-account-number",
  ClientSecret: "your-client-secret",
});

const account = await starlink.getAccount("your-account-number");
```

## Configuration

The library supports multiple account configurations:

```typescript
import Starlink from "starlink-wrapper";

// Single account
const starlink = Starlink.getInstance({
  ClientId: "client-id",
  AccountNumber: "ACC-12345",
  ClientSecret: "secret",
});

// Multiple accounts
const starlink = Starlink.getInstance([
  {
    ClientId: "client-id-1",
    AccountNumber: "ACC-12345",
    ClientSecret: "secret-1",
  },
  {
    ClientId: "client-id-2",
    AccountNumber: "ACC-67890",
    ClientSecret: "secret-2",
  },
]);
```

## Examples

### Account

```typescript
const account = await starlink.getAccount("ACC-12345");
```

### Service Lines

```typescript
// Get all service lines
const serviceLines = await starlink.getServiceLines("ACC-12345");

// Get service lines filtered by address
const serviceLines = await starlink.getServiceLines("ACC-12345", {
  addressReferenceId: "addr-12345",
});

// Get a specific service line
const serviceLine = await starlink.getServiceLine("ACC-12345", "SL-67890");

// Deactivate a service line
await starlink.deactivateServiceLine("ACC-12345", "SL-67890", {
  reasonForCancellation: "Customer request",
  endNow: true,
});

// Set a nickname for a service line
await starlink.setServiceLineNickname("ACC-12345", "SL-67890", {
  nickname: "Home Office",
});
```

### User Terminals

```typescript
// Get all user terminals
const terminals = await starlink.getUserTerminals("ACC-12345");

// Get terminals filtered by service line
const terminals = await starlink.getUserTerminals("ACC-12345", {
  serviceLineNumbers: ["SL-67890"],
});

// Reboot a user terminal
await starlink.rebootUserTerminal("ACC-12345", "ut-12345");

// Add a user terminal to a service line
await starlink.addUserTerminalToServiceLine("ACC-12345", "SL-67890", {
  deviceId: "ut-12345",
});
```

### Data Usage

```typescript
const dataUsage = await starlink.DataUsageQuery("ACC-12345", 0, 50, {
  activeServiceLinesOnly: true,
  previousBillingCycles: 3,
});
```

### Addresses

```typescript
// Get all addresses
const addresses = await starlink.getAddresses("ACC-12345");

// Create an address
const newAddress = await starlink.createAddress("ACC-12345", {
  addressLines: ["123 Main St", "Apt 4"],
  locality: "San Francisco",
  administrativeArea: "California",
  administrativeAreaCode: "CA",
  region: "United States",
  regionCode: "US",
  postalCode: "94102",
  formattedAddress: "123 Main St, Apt 4, San Francisco, CA 94102",
  latitude: 37.7749,
  longitude: -122.4194,
});

// Update an address
await starlink.updateAddress("ACC-12345", "addr-12345", {
  addressLines: ["456 Oak Ave"],
  locality: "Los Angeles",
  administrativeArea: "California",
  administrativeAreaCode: "CA",
  region: "United States",
  regionCode: "US",
  formattedAddress: "456 Oak Ave, Los Angeles, CA",
  latitude: 34.0522,
  longitude: -118.2437,
});
```

### Contacts

```typescript
// Get contacts
const contacts = await starlink.getContacts("ACC-12345");

// Create a contact
const newContact = await starlink.createContact("ACC-12345", {
  firstName: "John",
  lastName: "Doe",
  roles: ["billing"],
  email: "john.doe@example.com",
  phoneNumber: "+1234567890",
  locale: "en-US",
});

// Update a contact
await starlink.updateContact("ACC-12345", "contact-12345", {
  roles: ["billing", "technical"],
  phoneNumber: "+1987654321",
});
```

### Routers

```typescript
// Get router config
const router = await starlink.getRouter("ACC-12345", "router-12345");

// Reboot router
await starlink.rebootRouter("ACC-12345", "router-12345");

// Get all router configs
const configs = await starlink.getRouterConfigs("ACC-12345");

// Create a router config
const config = await starlink.createRouterConfig("ACC-12345", {
  nickname: "Main Office Router",
  routerConfigJson: '{"setting": "value"}',
});

// Assign router config
await starlink.assignRoutersConfig("ACC-12345", {
  configId: "config-12345",
  routerIds: ["router-12345"],
});
```

### TLS Configuration

```typescript
// Create TLS config
await starlink.createTlsConfig("ACC-12345", {
  certificateBase64Pem: "base64-certificate",
  keyBase64Pem: "base64-key",
});

// Delete TLS config
await starlink.deleteTlsConfig("ACC-12345", {
  certificateBase64Pem: "base64-certificate",
});
```

### Products

```typescript
const products = await starlink.getProducts("ACC-12345");
```

### L2 VPN

```typescript
// Get all L2 VPN circuits
const circuits = await starlink.getL2VpnCircuits("ACC-12345");

// Set user terminal VLAN
await starlink.setUserTerminalL2VpnVlan("ACC-12345", "ut-12345", [
  {
    circuitId: "circuit-12345",
    customerVlans: [100, 200],
    serviceVlan: 10,
  },
]);
```

### Managed Customers

```typescript
const customer = await starlink.createManagedCustomer("ACC-12345", {
  firstName: "Jane",
  lastName: "Smith",
  email: "jane.smith@example.com",
  phone: "+1234567890",
  locale: "en-US",
  businessName: "Smith Enterprises",
});
```

## License

ISC

# Starlink Wrapper

A typesafe TypeScript wrapper for the Starlink Enterprise API v2. Manage accounts, service lines, routers, user terminals, and more with full type safety and automatic OAuth token management.

## Features

- **Type Safe** - Full TypeScript support with Zod validation
- **OAuth 2.0** - Automatic token refresh and management
- **Multi-Account** - Support for managing multiple Starlink accounts
- **Comprehensive** - Covers accounts, service lines, routers, terminals, addresses, contacts, and more

## Installation

```bash
npm install starlink-wrapper
```

Or install from source:

```bash
npm install git+https://github.com/ray-aura/Starlink-Wrapper
```

## Quick Start

```typescript
import Starlink from "starlink-wrapper";

// Initialize the client
Starlink.init({
  ClientId: "your-client-id",
  AccountNumber: "ACC-1234567-89012-34",
  ClientSecret: "your-client-secret",
});

// Get the singleton instance
const starlink = Starlink.getInstance();

// Fetch account info
const account = await starlink.getAccount("ACC-1234567-89012-34");
console.log(account.content.accountNumber);
```

## Documentation

For complete API documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md).

---

## Common Use Cases

### Account Management

```typescript
// Get account information
const account = await starlink.getAccount("ACC-1234567-89012-34");
console.log(`Account: ${account.content.accountName}`);
console.log(`Region: ${account.content.regionCode}`);

// View available products
const products = await starlink.getProducts("ACC-1234567-89012-34");
for (const product of products.content.results) {
  console.log(`${product.name}: $${product.price}/mo`);
}
```

### Managing Service Lines

```typescript
// List all service lines
const serviceLines = await starlink.getServiceLines("ACC-1234567-89012-34");

// Filter by address
const linesAtAddress = await starlink.getServiceLines("ACC-1234567-89012-34", {
  addressReferenceId: "addr-123",
});

// Get specific service line details
const line = await starlink.getServiceLine("ACC-1234567-89012-34", "AST-511274-31364-54");

// Update nickname
await starlink.setServiceLineNickname("ACC-1234567-89012-34", "AST-511274-31364-54", {
  nickname: "Home Office",
});

// Enable/disable public IP
await starlink.setServiceLinePublicIp("ACC-1234567-89012-34", "AST-511274-31364-54", {
  publicIp: true,
});

// Deactivate a service line
await starlink.deactivateServiceLine(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  "Customer requested cancellation",
  true // endNow
);
```

### Data Usage Monitoring

```typescript
// Query data usage for all active service lines
const usage = await starlink.DataUsageQuery("ACC-1234567-89012-34", 0, 50, {
  activeServiceLinesOnly: true,
  previousBillingCycles: 3,
});

// Display usage per service line
for (const result of usage.content.results) {
  for (const cycle of result.billingCycles) {
    console.log(`Priority: ${cycle.totalPriorityGB} GB`);
    console.log(`Standard: ${cycle.totalStandardGB} GB`);
  }
}
```

### User Terminal Management

```typescript
// List all user terminals
const terminals = await starlink.getUserTerminals("ACC-1234567-89012-34");

// Filter by service line
const terminals = await starlink.getUserTerminals("ACC-1234567-89012-34", {
  serviceLineNumbers: ["AST-511274-31364-54"],
});

// Reboot a terminal
await starlink.rebootUserTerminal("ACC-1234567-89012-34", "ut-123456");

// Add terminal to service line
await starlink.addUserTerminalToServiceLine("ACC-1234567-89012-34", "AST-511274-31364-54", {
  deviceId: "ut-new-123",
});

// Remove terminal from service line
await starlink.removeUserTerminalFromServiceLine(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54",
  "ut-old-456"
);
```

### Router Configuration

```typescript
// Get all router configs
const configs = await starlink.getRouterConfigs("ACC-1234567-89012-34");

// Create a new config
const config = await starlink.createRouterConfig("ACC-1234567-89012-34", {
  nickname: "Production Config",
  routerConfigJson: JSON.stringify({
    wifi: { enabled: true, ssid: "Starlink-Network" },
    firewall: { enabled: true },
  }),
});

// Assign config to routers
await starlink.assignRoutersConfig("ACC-1234567-89012-34", {
  configId: config.content.configId,
  routerIds: ["router-1", "router-2"],
});

// Set as default for new routers
await starlink.setDefaultRouterConfig("ACC-1234567-89012-34", {
  configId: config.content.configId,
});

// Get a specific router
const router = await starlink.getRouter("ACC-1234567-89012-34", "router-12345");

// Reboot router
await starlink.rebootRouter("ACC-1234567-89012-34", "router-12345");
```

### Address Management

```typescript
// List all addresses
const addresses = await starlink.getAddresses("ACC-1234567-89012-34");

// Get address by ID
const address = await starlink.getAddress("ACC-1234567-89012-34", "addr-12345");

// Create new address
const newAddress = await starlink.createAddress("ACC-1234567-89012-34", {
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

// Update address
await starlink.updateAddress("ACC-1234567-89012-34", "addr-12345", {
  addressLines: ["456 New St"],
  locality: "Los Angeles",
  administrativeArea: "California",
  administrativeAreaCode: "CA",
  region: "US",
  regionCode: "US",
  formattedAddress: "456 New St, Los Angeles, CA",
  latitude: 34.0522,
  longitude: -118.2437,
});
```

### Contact Management

```typescript
// List contacts
const contacts = await starlink.getContacts("ACC-1234567-89012-34");

// Create a contact
const contact = await starlink.createContact("ACC-1234567-89012-34", {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@company.com",
  phoneNumber: "+1-555-123-4567",
  locale: "en-US",
  roles: ["admin", "billing"],
});

// Update contact
await starlink.updateContact("ACC-1234567-89012-34", "subject-123", {
  roles: ["admin", "technical"],
  phoneNumber: "+1-555-987-6543",
});

// Delete contact
await starlink.deleteContact("ACC-1234567-89012-34", "subject-123");
```

### Data Top-ups and Recurring Blocks

```typescript
// Add one-time data top-up
await starlink.addServiceLineTopUpData("ACC-1234567-89012-34", "AST-511274-31364-54", {
  productId: "topup-50gb",
  count: 1,
});

// Set recurring data blocks
await starlink.setServiceLineRecurringDataBlocks("ACC-1234567-89012-34", "AST-511274-31364-54", {
  recurringDataBlocks: [
    { productId: "data-block-10gb", count: 2 },
  ],
});

// Get billing partial periods
const periods = await starlink.getBillingPartialPeriods(
  "ACC-1234567-89012-34",
  "AST-511274-31364-54"
);
```

### Priority Data Management

```typescript
// Opt-in to priority data
const optIn = await starlink.optInPriorityData("ACC-1234567-89012-34", "AST-511274-31364-54");
console.log(`Opt-in activated: ${optIn.content.activatedDate}`);

// Opt-out of priority data
await starlink.optOutPriorityData("ACC-1234567-89012-34", "AST-511274-31364-54");
```

### L2 VPN Configuration

```typescript
// Get available L2 VPN circuits
const circuits = await starlink.getL2VpnCircuits("ACC-1234567-89012-34");

// Configure VLANs on user terminal
await starlink.setUserTerminalL2VpnVlan("ACC-1234567-89012-34", "ut-12345", [
  {
    circuitId: "CKT-001",
    customerVlans: [100, 101, 102],
    serviceVlan: 200,
  },
]);
```

### Managed Customers (Providers)

```typescript
// Create a managed customer account
const customer = await starlink.createManagedCustomer("ACC-PROVIDER-123", {
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
```

### Router Local Content

```typescript
// Upload HTML content for router configs
const uploaded = await starlink.uploadRouterLocalContent(
  "ACC-1234567-89012-34",
  "<html><body><h1>Welcome</h1></body></html>",
  "welcome.html"
);

// List uploaded content files
const files = await starlink.getRouterLocalContentFiles("ACC-1234567-89012-34");
```

### Sandbox Management

```typescript
// Get sandbox clients
const clients = await starlink.getSandboxClients("ACC-1234567-89012-34", {
  sandboxId: 123,
  expiryAfter: "2024-01-01T00:00:00Z",
});

// Batch update sandbox clients
await starlink.batchUpdateSandboxClients("ACC-1234567-89012-34", [
  { clientId: "client-1", sandboxId: 123, expiry: "2024-12-31T23:59:59Z" },
  { clientId: "client-2", sandboxId: 456, expiry: "2024-06-30T23:59:59Z" },
]);

// Send heartbeat to verify system health
await starlink.sendSandboxHeartbeat("ACC-1234567-89012-34", { healthy: true });
```

### TLS Configuration

```typescript
// Create TLS config (from PEM files)
import fs from "fs";

await starlink.createTlsConfig("ACC-1234567-89012-34", {
  certificateBase64Pem: fs.readFileSync("cert.pem", "base64"),
  keyBase64Pem: fs.readFileSync("key.pem", "base64"),
});

// List TLS configs
const tlsConfigs = await starlink.getTlsConfigs("ACC-1234567-89012-34");

// Delete TLS config
await starlink.deleteTlsConfig("ACC-1234567-89012-34", {
  certificateBase64Pem: "base64-encoded-cert",
});
```

## Multiple Accounts

```typescript
// Initialize with multiple accounts
Starlink.init([
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

const starlink = Starlink.getInstance();

// Use different accounts
const account1 = await starlink.getAccount("ACC-1111111-11111-11");
const account2 = await starlink.getAccount("ACC-2222222-22222-22");
```

## Error Handling

```typescript
import Starlink from "starlink-wrapper";

const starlink = Starlink.getInstance();

try {
  const account = await starlink.getAccount("ACC-1234567-89012-34");
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

## License

ISC

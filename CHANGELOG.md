## 1.1.3

### Critical Fix

- Changed the base URL from `https://web-api.starlink.com/enterprise/v2/` to `https://starlink.com/api/public/v2/`. The previous link just went down and we are not sure what exactly happened.

## 1.1.0

### Features

- Added the ability to use the Telemetry stream API under the function
  `getTelemetry`. The return value is currently untyped and in future versions
  this will be fixed as for now Starlink does not have a direct documentation
  for this structure of the response value.

## 1.0.5

### Fixed

- Added nullable option to nickname field for the routerConfiguration schema
- Started using Header Object instead of raw objects for requests

## 1.0.4

### Fixed

- Error that was causing POST and PUT request to return 403 error. The problem
  was that i had omiited the "Content-Type": "application/json" from the HTTPS
  header and that is why it was getting rejected
- Error where getInstance was throwing an error when method was called after
  initalisation

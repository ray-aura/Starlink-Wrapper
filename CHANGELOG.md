## 1.0.4

### Fixed

- Error that was causing POST and PUT request to return 403 error. The problem was that i had omiited the "Content-Type": "application/json" from the HTTPS header and that is why it was getting rejected
- Error where getInstance was throwing an error when method was called after initalisation

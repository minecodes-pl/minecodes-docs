# Servers Configuration

The servers section in mineLogin is crucial for managing player flow across your network. It defines which servers are used for authentication, where players are sent after logging in, and how fallback mechanisms work.

Here's the relevant section from the configuration file:

```yaml
servers:
  login-servers:
  - auth
  fallback-server: true
  change-server-after-login: false
  after-login-servers: []
```

## Options Explained

1. `login-servers`:
    - Purpose: Defines the servers where players must authenticate.
    - Format: A list of server names.
    - Example:
      ```yaml
      login-servers:
      - auth
      - auth2
      ```
    - Players connecting to these servers will be required to log in or register.

2. `fallback-server`:
    - Purpose: Determines whether players should be moved to a fallback server if kicked from a network server.
    - Values: `true` or `false`
    - When `true`, players will be sent to a login server or an after-login server (depending on their authentication status) if they're kicked from their current server.

3. `change-server-after-login`:
    - Purpose: Specifies whether players should be moved to a different server after successful authentication.
    - Values: `true` or `false`
    - When `true`, players will be sent to one of the servers listed in `after-login-servers` after logging in.

4. `after-login-servers`:
    - Purpose: Lists the servers players can be sent to after successful authentication.
    - Format: A list of server names.
    - Example:
      ```yaml
      after-login-servers:
      - lobby
      - hub
      - survival
      ```
    - Only used if `change-server-after-login` is set to `true`.

## Best Practices

1. **Dedicated Auth Servers**: Use dedicated servers for authentication to separate the login process from gameplay servers. This can improve security and performance.

2. **Multiple Login Servers**: For larger networks, consider having multiple login servers to distribute the load.

3. **Fallback Mechanism**: Enable the fallback server feature to ensure players aren't disconnected from the network if they encounter issues on a specific server.

4. **Strategic After-Login Servers**: Carefully choose your after-login servers. These could be lobby servers, hubs, or directly to gameplay servers depending on your network structure.

5. **Balance**: If using multiple after-login servers, consider implementing a load balancing mechanism to distribute players evenly.

6. **Clear Communication**: Ensure your server list (MOTD) clearly indicates which servers are for login and which are gameplay servers to avoid confusion.

## Example Configurations

1. Basic Setup (Single Auth Server):
   ```yaml
   servers:
     login-servers:
     - auth
     fallback-server: true
     change-server-after-login: true
     after-login-servers:
     - lobby
   ```
   In this setup, players authenticate on the 'auth' server and are then sent to the 'lobby' server.

2. Advanced Network Setup:
   ```yaml
   servers:
     login-servers:
     - auth-1
     - auth-2
     fallback-server: true
     change-server-after-login: true
     after-login-servers:
     - lobby-1
     - lobby-2
   ```
   This configuration uses two authentication servers and multiple gameplay servers. Players are distributed across different servers after login.

3. Direct-to-Lobby Setup:
   ```yaml
   servers:
     login-servers:
     - auth
     fallback-server: true
     change-server-after-login: false
     after-login-servers: []
   ```
   Here, players authenticate on the 'auth' server but remain on their chosen server after login. This is useful for networks where players directly connect to their desired gameplay server.

## Considerations

- Ensure all servers listed in these configurations are properly set up in your BungeeCord or Velocity proxy configuration.
- The effectiveness of the fallback server feature depends on your proxy configuration and how server kicks are handled.
- Regularly monitor server performance and adjust this configuration as your network grows or changes.

Remember to restart your proxy or use the appropriate reload command after making changes to the server configuration to ensure they take effect.

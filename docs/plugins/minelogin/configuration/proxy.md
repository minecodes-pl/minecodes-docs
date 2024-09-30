# Proxy Settings

The proxy settings in mineLogin are crucial for managing player connections and server load balancing. These settings are particularly important for networks running multiple servers. Let's break down each option in detail:

```yaml
proxy:
  slots: 100
  slots-type: STATIC
  between-connections: 30ms
```

## Options Explained

1. `slots`:
    - Purpose: Defines the maximum number of players that can connect to your network simultaneously.
    - Value: An integer representing the maximum player count.
    - Example: `slots: 100` allows up to 100 players to be connected at once.
    - Considerations:
        - Set this based on your server's capacity and performance capabilities.
        - Consider your network's bandwidth and hardware limitations when setting this value.

2. `slots-type`:
    - Purpose: Determines how the slot count is managed.
    - Options:
        - `STATIC`: The number of slots remains constant at the value specified in `slots`.
        - `DYNAMIC`: The number of slots is calculated as the current number of online players plus one.
    - Usage:
        - STATIC: `slots-type: STATIC`
            - Use this if you want a fixed maximum player count.
        - DYNAMIC: `slots-type: DYNAMIC`
            - Use this if you want the slot count to adjust based on current player count.
    - Considerations:
        - STATIC is more predictable and easier to manage.
        - DYNAMIC can be useful for optimizing server resources but may lead to unexpected behavior if not managed carefully.

3. `between-connections`:
    - Purpose: Sets the minimum time interval between player connection attempts.
    - Value: Time in milliseconds (ms).
    - Example: `between-connections: 30ms` means the server will wait at least 30 milliseconds between processing each new player connection.
    - Considerations:
        - This setting helps prevent connection spam and can protect against certain types of attacks.
        - A lower value (e.g., 30ms) allows for quicker connections but may increase server load.
        - A higher value (e.g., 100ms) can help reduce server stress during high-traffic periods but may slightly delay player logins.

## Best Practices

1. Balancing Slots:
    - Start with a conservative `slots` value and increase it gradually as you monitor server performance.
    - Consider using the DYNAMIC `slots-type` during events or promotions when you expect higher than usual traffic.

2. Connection Throttling:
    - Adjust the `between-connections` value based on your server's performance:
        - If you notice login delays, try reducing this value.
        - If your server struggles during login rushes, increase this value.

3. Monitoring and Adjusting:
    - Regularly monitor your server logs and performance metrics.
    - Be prepared to adjust these settings, especially during peak hours or special events.

4. Network Configuration:
    - Ensure your network infrastructure can handle the maximum number of slots you've set.
    - Consider using a fallback server (configured elsewhere in mineLogin) to manage overflow.

## Example Configurations

1. For a small community server:
   ```yaml
   proxy:
     slots: 50
     slots-type: STATIC
     between-connections: 50ms
   ```

2. For a large network with varying traffic:
   ```yaml
   proxy:
     slots: 500
     slots-type: DYNAMIC
     between-connections: 20ms
   ```

3. For a server prioritizing stability over quick logins:
   ```yaml
   proxy:
     slots: 200
     slots-type: STATIC
     between-connections: 100ms
   ```

Remember, these settings interact with other parts of your server configuration, including the login servers and fallback servers specified in the `servers` section of the mineLogin config. Always test changes in a controlled environment before applying them to a live server.

# Two-Factor Authentication (2FA) Configuration

The Two-Factor Authentication (2FA) feature in mineLogin provides an additional layer of security for player accounts. This section allows server administrators to configure how 2FA is implemented and managed on their server.

Here's the relevant section from the configuration file:

```yaml
verification:
  enabled: false
  require-permission: false
  permission: ''
  create-verification-timeout: 1m
  verification-confirm-timeout: 30s
  session-active-time: 3d
  auto-enable-session: false
```

## Options Explained

1. `enabled: false`
    - Purpose: Toggles the 2FA feature on or off.
    - Values: `true` or `false`
    - When set to `true`, 2FA becomes available for use on the server.

2. `require-permission: false`
    - Purpose: Determines whether 2FA is mandatory for players with a specific permission.
    - Values: `true` or `false`
    - When `true`, players with the specified permission must set up 2FA.

3. `permission: ''`
    - Purpose: Specifies the permission required for mandatory 2FA setup.
    - Value: A string representing the permission node.
    - Only relevant if `require-permission` is set to `true`.

4. `create-verification-timeout: 1m`
    - Purpose: Sets the time limit for players to create their 2FA verification.
    - Format: Time duration (e.g., '1m' for 1 minute, '30s' for 30 seconds)
    - Players must complete 2FA setup within this time frame.

5. `verification-confirm-timeout: 30s`
    - Purpose: Sets the time limit for players to confirm their 2FA code during login.
    - Format: Time duration

6. `session-active-time: 3d`
    - Purpose: Defines how long a 2FA session remains active.
    - Format: Time duration (e.g., '3d' for 3 days)
    - Players won't need to re-enter 2FA code within this period.

7. `auto-enable-session: false`
    - Purpose: Determines if 2FA session should be automatically enabled after successful verification.
    - Values: `true` or `false`
    - When `true`, players won't need to re-enter 2FA code for the duration of `session-active-time`.

## Best Practices

1. **Gradual Implementation**
    - Start with 2FA as an optional feature before making it mandatory.
    - Use the `require-permission` option to gradually roll out mandatory 2FA to staff or VIP players first.

2. **Clear Communication**
    - Provide clear instructions to players on how to set up and use 2FA.
    - Explain the benefits of 2FA to encourage voluntary adoption.

3. **Reasonable Timeouts**
    - Set `create-verification-timeout` and `verification-confirm-timeout` to values that give players enough time without leaving the server vulnerable.

4. **Session Management**
    - Consider your server's security needs when setting `session-active-time`. Shorter times are more secure but less convenient.

5. **Backup Codes**
    - Implement a system for backup codes or account recovery in case players lose access to their 2FA device.

## Implementation Tips

1. **Staff Training**
    - Ensure your staff understands how 2FA works and can assist players with setup and issues.

2. **Integration with Permissions**
    - If using `require-permission`, integrate this with your server's rank or group system.

3. **Monitoring and Logging**
    - Implement logging for 2FA-related actions to help with troubleshooting and security audits.

4. **Regular Review**
    - Periodically review your 2FA settings and adjust based on player feedback and security needs.

## Example Configurations

1. Optional 2FA for All Players:
   ```yaml
   verification:
     enabled: true
     require-permission: false
     create-verification-timeout: 2m
     verification-confirm-timeout: 1m
     session-active-time: 7d
     auto-enable-session: true
   ```
   This setup makes 2FA available but optional for all players, with a week-long session time for convenience.

2. Mandatory 2FA for Staff:
   ```yaml
   verification:
     enabled: true
     require-permission: true
     permission: 'minelogin.staff.2fa'
     create-verification-timeout: 5m
     verification-confirm-timeout: 2m
     session-active-time: 1d
     auto-enable-session: false
   ```
   This configuration requires staff members to use 2FA, with shorter session times for increased security.

## Troubleshooting

1. **Players Unable to Set Up 2FA**
    - Check if the `create-verification-timeout` is sufficient.
    - Verify that the player has the necessary permissions if `require-permission` is enabled.

2. **Frequent 2FA Prompts**
    - If players complain about too frequent 2FA prompts, consider increasing `session-active-time` or enabling `auto-enable-session`.

3. **Security Concerns**
    - If there are security concerns, consider reducing `session-active-time` and disabling `auto-enable-session`.

Remember to restart your server or reload the plugin after making changes to the 2FA configuration. Always test new security configurations thoroughly before applying them to a live server.

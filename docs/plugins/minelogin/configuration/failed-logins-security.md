# Failed Logins Security Configuration

The Failed Logins Security section in mineLogin allows server administrators to configure protective measures against unauthorized access attempts. This feature helps prevent brute-force attacks and protects user accounts from being compromised.

Here's the relevant section from the configuration file:

```yaml
security:
  ban-ip-on-max-login-attempts: true
  ban-ip-on-max-recovery-attempts: true
  ip-ban-time: 30m
```

## Options Explained

1. `ban-ip-on-max-login-attempts: true`
    - Purpose: Determines whether to ban an IP address after reaching the maximum number of failed login attempts.
    - Values: `true` or `false`
    - When set to `true`, IPs will be temporarily banned after exceeding the login attempt limit.

2. `ban-ip-on-max-recovery-attempts: true`
    - Purpose: Determines whether to ban an IP address after reaching the maximum number of failed account recovery attempts.
    - Values: `true` or `false`
    - When set to `true`, IPs will be temporarily banned after exceeding the recovery attempt limit.

3. `ip-ban-time: 30m`
    - Purpose: Sets the duration for which an IP address is banned after exceeding attempt limits.
    - Format: Time duration (e.g., '30m' for 30 minutes, '1h' for 1 hour)
    - This applies to both login and recovery attempt bans.

## Best Practices

1. **Balanced Security**
    - Set a ban time that is long enough to deter attackers but not so long as to significantly inconvenience legitimate users who may have made mistakes.

2. **Logging and Monitoring**
    - Implement comprehensive logging for failed login and recovery attempts to identify patterns or potential attacks.

3. **User Notification**
    - Consider notifying users when multiple failed attempts are made on their account, encouraging them to check their account security.

4. **Gradual Response**
    - Implement a system of escalating responses. For example, increase ban durations for repeat offenders.

5. **Whitelist Considerations**
    - Consider implementing an IP whitelist for trusted networks or users who might legitimately need multiple attempts (e.g., server staff, developers).

## Implementation Tips

1. **Sync with Login Attempts Limit**
    - Ensure this configuration aligns with the `login-attempts` setting in the `limits` section of your config.

2. **Recovery Attempt Monitoring**
    - Pay special attention to recovery attempts, as these could indicate more targeted attacks on specific accounts.

3. **Dynamic IP Ban Time**
    - Consider implementing a system where the ban time increases with repeated offenses from the same IP.

4. **Notification System**
    - Set up an alert system for administrators when there's an unusual spike in failed login or recovery attempts.

## Example Configurations

1. Standard Security Setup:
   ```yaml
   security:
     ban-ip-on-max-login-attempts: true
     ban-ip-on-max-recovery-attempts: true
     ip-ban-time: 30m
   ```
   This setup provides a good balance between security and user convenience.

2. High-Security Configuration:
   ```yaml
   security:
     ban-ip-on-max-login-attempts: true
     ban-ip-on-max-recovery-attempts: true
     ip-ban-time: 2h
   ```
   This configuration implements a longer ban time for higher security, but may be less convenient for legitimate users.

3. Lenient Configuration (Not Recommended for Production):
   ```yaml
   security:
     ban-ip-on-max-login-attempts: false
     ban-ip-on-max-recovery-attempts: true
     ip-ban-time: 15m
   ```
   This setup is more lenient on login attempts but still protects against recovery abuse. It's generally not recommended for production environments.

## Troubleshooting

1. **Legitimate Users Getting Banned**
    - If this occurs frequently, consider increasing the `login-attempts` limit or decreasing the `ip-ban-time`.
    - Implement an easy way for legitimate users to contact server staff for ban removal.

2. **Continued Attacks Despite Bans**
    - If attacks persist, consider implementing additional security measures like CAPTCHAs or increasing the ban duration.
    - Look into using a web application firewall (WAF) for additional protection.

3. **Performance Issues**
    - If tracking failed attempts and bans is causing server performance issues, consider optimizing your database queries or implementing a caching system.

Remember to restart your server or reload the plugin after making changes to the security configuration. Always monitor the effectiveness of your security measures and be prepared to adjust them in response to new threats or changing server needs.

By properly configuring these security settings, you can significantly enhance the protection of your server against unauthorized access attempts while maintaining a good user experience for your legitimate players.

# Limits Configuration

The limits section in mineLogin allows server administrators to set various restrictions to enhance security and manage server resources effectively. These limits help prevent abuse and ensure a fair playing environment.

Here's the relevant section from the configuration file:

```yaml
limits:
  accounts-per-address: 2
  accounts-per-address-check-type: ON_JOIN
  login-attempts: 3
  recovery-code-attempts: 3
```

## Options Explained

1. Account Limits

   ```yaml
   accounts-per-address: 2
   ```
    - Purpose: Restricts the number of accounts that can be registered from a single IP address.
    - Value: An integer representing the maximum number of accounts allowed per IP.
    - Rationale: Helps prevent multi-accounting and potential abuse.

   ```yaml
   accounts-per-address-check-type: ON_JOIN
   ```
    - Purpose: Determines when the account limit per IP address is checked.
    - Options:
        - `ON_JOIN`: Checks the limit when a player joins the server.
        - `ON_REGISTER`: Checks the limit only when a new account is being registered.
    - Consideration: `ON_JOIN` is more strict but may prevent legitimate players from joining if the limit is reached.

2. Login Attempt Limits

   ```yaml
   login-attempts: 3
   ```
    - Purpose: Sets the maximum number of failed login attempts allowed before action is taken.
    - Value: An integer representing the number of attempts.
    - Consequence: After exceeding this limit, further action (like temporary IP ban) may be taken.

3. Recovery Attempt Limits

   ```yaml
   recovery-code-attempts: 3
   ```
    - Purpose: Limits the number of attempts a player can make to use a recovery code.
    - Value: An integer representing the number of attempts.
    - Security: Prevents brute-force attempts on account recovery.

## Best Practices

1. **Balancing Security and Accessibility**
    - Set `accounts-per-address` to a value that prevents abuse but doesn't hinder legitimate players (e.g., family members sharing an IP).
    - Consider your target audience when setting this limit.

2. **Check Type Strategy**
    - Use `ON_REGISTER` if you want to allow existing accounts to still log in even if the limit is reached.
    - Use `ON_JOIN` for stricter control, but be prepared to handle cases of legitimate users being blocked.

3. **Login Attempts**
    - A value of 3-5 for `login-attempts` is common, balancing security with user-friendliness.
    - Consider implementing a cooldown period after failed attempts rather than an immediate ban.

4. **Recovery Security**
    - Keep `recovery-code-attempts` low (3-5) to prevent guessing of recovery codes.
    - Implement a cooldown or lockout system after failed recovery attempts.

## Implementation Tips

1. **IP Whitelisting**
    - Consider implementing an IP whitelist system for exceptions to these limits (e.g., for server staff or known shared IPs).

2. **Dynamic Limits**
    - For larger networks, consider implementing dynamic limits that adjust based on server load or time of day.

3. **Monitoring and Logging**
    - Implement thorough logging for limit-related actions to help identify patterns of abuse.
    - Regularly review logs to adjust limits as needed.

4. **User Communication**
    - Ensure clear communication to users when they reach these limits.
    - Provide information on how to contact support if legitimate users are affected.

5. **Regular Review**
    - Periodically review and adjust these limits based on your server's growth and any observed abuse patterns.

## Example Configurations

1. Strict Security Setup:
   ```yaml
   limits:
     accounts-per-address: 1
     accounts-per-address-check-type: ON_JOIN
     login-attempts: 3
     recovery-code-attempts: 3
   ```
   This configuration is very strict, suitable for high-security servers.

2. Balanced Approach:
   ```yaml
   limits:
     accounts-per-address: 3
     accounts-per-address-check-type: ON_REGISTER
     login-attempts: 5
     recovery-code-attempts: 3
   ```
   This setup offers a balance between security and user convenience.

3. Lenient Configuration:
   ```yaml
   limits:
     accounts-per-address: 5
     accounts-per-address-check-type: ON_REGISTER
     login-attempts: 7
     recovery-code-attempts: 5
   ```
   More lenient, suitable for smaller, community-focused servers.

Remember, the effectiveness of these limits depends on your server's specific needs and player base. Always monitor the impact of these settings and be prepared to adjust them as necessary.

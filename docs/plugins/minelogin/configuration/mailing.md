# Mailing Configuration

The mailing configuration in mineLogin is essential for features like account recovery and email verification. It allows the plugin to send emails to players for various authentication and security purposes.

Here's the relevant section from the configuration file:

```yaml
mailing:
  enabled: false
  email-warning: true
  server-name: YourAddress.net
  sender-email: recovery@youraddress.net
  from: mineLogin
  server: smtp.sendgrid.net
  port: 587
  username: apikey
  password: securePassword
  email-title: Account recovery on YourAddress.net
  transport-strategy: SMTP
```

## Options Explained

1. `enabled`:
    - Purpose: Toggles the mailing system on or off.
    - Values: `true` or `false`
    - Set to `true` to enable email functionality.

2. `email-warning`:
    - Purpose: Determines whether to display a warning when no email address is associated with an account.
    - Values: `true` or `false`
    - When `true`, players without an email will be prompted to add one.

3. `server-name`:
    - Purpose: Sets the name of your server as it appears in emails.
    - Example: `YourAddress.net`

4. `sender-email`:
    - Purpose: The email address from which recovery and verification emails will be sent.
    - Example: `recovery@youraddress.net`

5. `from`:
    - Purpose: The name that appears as the sender of the email.
    - Example: `mineLogin`

6. `server`:
    - Purpose: The SMTP server address for sending emails.
    - Example: `smtp.sendgrid.net`

7. `port`:
    - Purpose: The port number for the SMTP server.
    - Common values: `587` (TLS), `465` (SSL), `25` (unencrypted)

8. `username`:
    - Purpose: The username for authenticating with the SMTP server.
    - Note: For services like SendGrid, this might be `apikey`

9. `password`:
    - Purpose: The password or API key for authenticating with the SMTP server.

10. `email-title`:
    - Purpose: The subject line for account recovery emails.
    - Example: `Account recovery on YourAddress.net`

11. `transport-strategy`:
    - Purpose: The encryption and connection method for the SMTP server.
    - Options: `SMTP`, `SMTPS`, `SMTP_TLS`, `SMTP_OAUTH2`
    - Most common: `SMTP_TLS` for port 587

## Best Practices

1. **Use a Dedicated Email**: Create a dedicated email address for server communications to maintain professionalism and manage responses.

2. **Secure SMTP Settings**: Always use encrypted connections (TLS or SSL) when configuring your SMTP settings.

3. **API Keys**: For services like SendGrid, use API keys instead of account passwords for added security.

4. **Test Thoroughly**: After configuration, send test emails to ensure everything is working correctly.

5. **Monitor Delivery**: Regularly check that emails are being delivered and not marked as spam.

6. **Clear Instructions**: Ensure that the content of your emails (configured elsewhere) provides clear instructions for account recovery or verification.

7. **Compliance**: Ensure your email practices comply with relevant laws and regulations (e.g., GDPR, CAN-SPAM).

## Example Configuration

Here's an example of a typical mailing configuration using SendGrid:

```yaml
mailing:
  enabled: true
  email-warning: true
  server-name: EpicMC.net
  sender-email: noreply@epicmc.net
  from: EpicMC Support
  server: smtp.sendgrid.net
  port: 587
  username: apikey
  password: SG.your_sendgrid_api_key_here
  email-title: Account Recovery for EpicMC.net
  transport-strategy: SMTP_TLS
```

## Troubleshooting

1. **Emails Not Sending**:
    - Verify SMTP server details and credentials.
    - Check if your hosting provider blocks outgoing SMTP traffic.

2. **Emails Marked as Spam**:
    - Ensure your domain has proper SPF and DKIM records.
    - Use a reputable email service provider.

3. **Connection Errors**:
    - Confirm that the specified port is open and not blocked by firewalls.
    - Verify that the `transport-strategy` matches the port and encryption method of your SMTP server.

Remember to handle email addresses securely and provide options for players to update or remove their email addresses from your system. Also, ensure that your privacy policy covers how you handle and use email addresses collected through the plugin.

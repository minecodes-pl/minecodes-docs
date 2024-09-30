# SendGrid Setup for Mailing

SendGrid is a cloud-based email service that can be used with mineLogin to handle email communications, such as account recovery and email verification. This guide will walk you through the process of setting up SendGrid for use with mineLogin.

## Step 1: Create a SendGrid Account

1. Go to the SendGrid website (https://sendgrid.com/).
2. Sign up for a new account or log in if you already have one.
3. Choose a plan that fits your needs. The free plan is often sufficient for small to medium-sized Minecraft servers.

## Step 2: Create an API Key

1. Once logged in, go to "Settings" > "API Keys" in the SendGrid dashboard.
2. Click on "Create API Key".
3. Choose "Restricted Access" and select the following permissions:
    - "Mail Send" - Full Access
4. Name your API key (e.g., "mineLogin Email Service") and click "Create & View".
5. Copy the API key immediately and store it securely. You won't be able to see it again.

## Step 3: Verify Your Sender Identity

SendGrid requires you to verify your sender identity to prevent spam and improve deliverability.

1. Go to "Settings" > "Sender Authentication".
2. Choose either "Domain Authentication" (recommended) or "Single Sender Verification".
3. Follow the steps provided by SendGrid to complete the verification process.

## Step 4: Configure mineLogin

Now that you have your SendGrid account set up, you need to configure mineLogin to use it. Edit your mineLogin configuration file (usually `config.yml` or similar) and update the mailing section:

```yaml
mailing:
  enabled: true
  server-name: YourServerName
  sender-email: noreply@yourdomain.com
  from: YourServerName Support
  server: smtp.sendgrid.net
  port: 587
  username: apikey
  password: YOUR_SENDGRID_API_KEY
  email-title: Account Recovery for YourServerName
  transport-strategy: SMTP_TLS
```

Replace the following:
- `YourServerName`: The name of your Minecraft server
- `noreply@yourdomain.com`: The email address you verified with SendGrid
- `YOUR_SENDGRID_API_KEY`: The API key you created in Step 2

## Step 5: Test the Configuration

1. Save the configuration file and restart your server or reload the mineLogin plugin.
2. Try to use a feature that sends an email, such as the account recovery function.
3. Check if the email is received. If not, check your spam folder.

## Troubleshooting

If emails are not being sent or received:

1. Verify that all the configuration details are correct, especially the API key.
2. Check the server logs for any error messages related to email sending.
3. Ensure that your SendGrid account is in good standing and not suspended.
4. Test sending an email directly through SendGrid's web interface to rule out any issues with your SendGrid account.

## Best Practices

1. **Use a Dedicated Subdomain**: Consider setting up a subdomain (e.g., mail.yourserver.com) for sending emails to improve deliverability.
2. **Monitor Your SendGrid Dashboard**: Regularly check your SendGrid dashboard for any issues or important notifications.
3. **Keep Your API Key Secure**: Never share your API key publicly or commit it to version control systems.
4. **Set Up SPF and DKIM**: These email authentication methods can significantly improve your email deliverability.

## Limitations

Be aware of any sending limits associated with your SendGrid plan. The free plan typically has a limit on the number of emails you can send per day or month.

By properly configuring SendGrid with mineLogin, you ensure reliable email delivery for critical functions like account recovery and verification, enhancing the security and user experience of your Minecraft server.

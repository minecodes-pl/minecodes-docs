# Other Settings

The "other-settings" section in mineLogin contains various important configurations that don't fit into other specific categories. We'll break this down into several subsections for easier understanding and reference.

```yaml
other-settings:
  captcha: true
  captcha-type: CHAT
  delete-old-account-with-same-unique-id: true
  enabled-lobby-command: true
  unique-id-system-type: USER_STATE
  user-updater: ALWAYS_SAME_UUID
  premium-nicknames-protected: true
  login-timeout: 30s
  session-active-time: 3d
  auto-enable-session: false
  commands-repeat: 5
  nickname-allowed-regex: '[a-zA-Z0-9_]+'
  available-commands-before-login:
  - login
  - register
  - l
  - reg
  - restore
  - recovery
  - recoveryaccount
  - code
  - recoverycode
  - 2fa
  - verification
  custom-server-lost-connection-message: true
  multi-accounts-notification: true
```

## 1. Security Settings

### Captcha
- `captcha: true`
    - Enables or disables the captcha requirement during registration.
- `captcha-type: CHAT`
    - Determines how the captcha is presented. Options are CHAT or MAP.

### Account Protection
- `delete-old-account-with-same-unique-id: true`
    - When enabled, automatically deletes old accounts with the same unique ID when a premium player changes their nickname.
- `premium-nicknames-protected: true`
    - Protects premium player nicknames from being used by non-premium accounts.

## 2. Login and Session Management

### Timeouts and Sessions
- `login-timeout: 30s`
    - Time limit for players to log in or register.
- `session-active-time: 3d`
    - Duration of the login session for non-premium players.
- `auto-enable-session: false`
    - Determines if the session should be automatically enabled upon login.

### Commands and Repetition
- `commands-repeat: 5`
    - Interval (in seconds) for repeating login/register commands to the player.
- `available-commands-before-login:`
    - List of commands available to players before they log in.

## 3. Player Identification and Management

### Unique ID System
- `unique-id-system-type: USER_STATE`
    - Determines how player UUIDs are managed. Options:
        - USER_STATE: UUID from the database
        - ALWAYS_OFFLINE: UUID generated from the nickname
        - USER_STATE_ONLY_FOR_PAID: Database UUID for premium, generated for non-premium

### User Updating
- `user-updater: ALWAYS_SAME_UUID`
    - Defines how to update player data when switching between premium and non-premium modes.
    - Options:
        - ALWAYS_SAME_UUID: Player keeps the same UUID
        - UPDATE_UUID: UUID is updated when using /premium or /cracked commands

## 4. Server Management

### Lobby Command
- `enabled-lobby-command: true`
    - Enables or disables the /lobby command.

### Connection Messages
- `custom-server-lost-connection-message: true`
    - Enables custom messages when a player can't connect to a desired server.

## 5. Nickname Management

### Nickname Restrictions
- `nickname-allowed-regex: '[a-zA-Z0-9_]+'`
    - Regular expression defining allowed characters in nicknames.

## 6. Notifications

### Multi-Account Notifications
- `multi-accounts-notification: true`
    - Enables notifications about potential multi-account usage.

## Best Practices

1. **Captcha**: Enable captcha for registration to prevent automated account creation.

2. **Account Protection**: Keep premium nickname protection enabled to prevent impersonation.

3. **Login Timeouts**: Set a reasonable login timeout that gives players enough time to log in without leaving the server vulnerable for too long.

4. **Sessions**: Adjust session duration based on your server's security needs and player convenience.

5. **UUID Management**: Choose a UUID system type that fits your server setup, especially if you're running a mixed premium/non-premium server.

6. **Nickname Restrictions**: Use a nickname regex that balances security with player freedom in name choice.

7. **Available Commands**: Carefully consider which commands should be available before login to maintain security.

## Customization Tips

1. **Captcha Type**: Choose between CHAT and MAP based on your server's aesthetic preferences and anti-bot needs.

2. **Session Management**: Adjust `session-active-time` and `auto-enable-session` based on your player base's preferences and your security requirements.

3. **UUID System**: If running a mixed server, consider using `USER_STATE_ONLY_FOR_PAID` to differentiate between premium and non-premium accounts.

4. **Custom Messages**: Utilize `custom-server-lost-connection-message` to provide clear, branded information to players during connection issues.

Remember to restart your server or reload the plugin after making changes to these settings. It's also a good practice to test significant changes on a development server before applying them to your live environment.

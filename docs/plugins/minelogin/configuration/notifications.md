# Notifications Configuration

The notifications section in mineLogin allows server administrators to customize how and when players receive important messages. This section focuses on title notifications, which are prominent messages displayed on the player's screen.

Here's the relevant section from the configuration file:

```yaml
notifications-title:
  enabled: true
  fade-in: 1
  fade-out: 1
  stay: 3
  notification-title: '&#ffaf05&lm i n e L o g i n'
  required-verification: ' &8[&6#&8] &aConfirm verification!'
  success-premium-login: ' &8[&6#&8] &aSuccess premium log in!'
  success-session-login: ' &8[&6#&8] &aSuccess session log in!'
  success-cracked-login: ' &8[&6#&8] &aSuccess cracked log in!'
  success-register: ' &8[&6#&8] &aSuccess account registration.'
  need-registered: ' &8[&6#&8] &aYou need to register.'
  need-logged: ' &8[&6#&8] &aYou need to log in.'
```

## General Settings

1. `enabled: true`
    - Purpose: Toggles the title notifications feature on or off.
    - Values: `true` or `false`
    - When set to `false`, no title notifications will be displayed.

2. Timing Settings:
   ```yaml
   fade-in: 1
   fade-out: 1
   stay: 3
   ```
    - `fade-in`: Time in seconds for the title to fade in.
    - `fade-out`: Time in seconds for the title to fade out.
    - `stay`: Time in seconds the title remains on screen at full opacity.

3. `notification-title: '&#ffaf05&lm i n e L o g i n'`
    - Sets the main title text for all notifications.
    - Supports color codes and formatting.

## Specific Notification Messages

Each of these settings defines the message for a specific notification:

1. `required-verification: ' &8[&6#&8] &aConfirm verification!'`
    - Shown when a player needs to complete 2FA verification.

2. `success-premium-login: ' &8[&6#&8] &aSuccess premium log in!'`
    - Displayed after a successful login for premium (paid) accounts.

3. `success-session-login: ' &8[&6#&8] &aSuccess session log in!'`
    - Shown when a player successfully logs in via a session.

4. `success-cracked-login: ' &8[&6#&8] &aSuccess cracked log in!'`
    - Displayed after a successful login for non-premium accounts.

5. `success-register: ' &8[&6#&8] &aSuccess account registration.'`
    - Shown after successful account registration.

6. `need-registered: ' &8[&6#&8] &aYou need to register.'`
    - Displayed when an unregistered player needs to create an account.

7. `need-logged: ' &8[&6#&8] &aYou need to log in.'`
    - Shown when a player needs to log in.

## Best Practices

1. **Clear and Concise Messages**
    - Keep messages short and to the point for easy readability.
    - Use color coding to emphasize important parts of the message.

2. **Consistent Styling**
    - Maintain a consistent style across all messages for a professional look.
    - The `&8[&6#&8]` prefix in the example provides a consistent visual element.

3. **Appropriate Timing**
    - Adjust `fade-in`, `fade-out`, and `stay` times to ensure messages are visible long enough to be read but not so long as to be annoying.
    - A total time of 5 seconds (1s fade-in + 3s stay + 1s fade-out) is generally sufficient.

4. **Color Usage**
    - Use colors to differentiate message types (e.g., green for success, red for warnings).
    - The `&#ffaf05` in the main title is a hex color code for a custom orange color.

5. **Localization**
    - Consider offering messages in multiple languages if your server caters to an international audience.

## Customization Tips

1. **Color Codes**
    - Use `&` followed by a code for basic colors (e.g., `&a` for green, `&c` for red).
    - Use `&#RRGGBB` for hex color codes to get precise colors.

2. **Formatting Codes**
    - `&l` for bold, `&n` for underline, `&o` for italic, `&k` for obfuscated text.

3. **Placeholders**
    - If supported, consider using placeholders like `{player}` to personalize messages.

4. **Testing**
    - Always test your notifications in-game after making changes to ensure they look as intended.

## Example Custom Configuration

```yaml
notifications-title:
  enabled: true
  fade-in: 1
  fade-out: 1
  stay: 4
  notification-title: '&#3366ff&lYour Server Name'
  required-verification: ' &7[&e!&7] &bPlease verify your account'
  success-premium-login: ' &7[&a✔&7] &aWelcome back, premium player!'
  success-session-login: ' &7[&a✔&7] &aWelcome back!'
  success-cracked-login: ' &7[&a✔&7] &aLogin successful!'
  success-register: ' &7[&a✔&7] &aAccount created successfully!'
  need-registered: ' &7[&c!&7] &cPlease register to play'
  need-logged: ' &7[&c!&7] &cPlease log in to continue'
```

This example uses a custom blue color for the server name, employs icons for visual cues, and maintains a consistent style across all messages.

Remember to restart your server or reload the plugin after making changes to see them take effect. Always consider the overall user experience when configuring these notifications.

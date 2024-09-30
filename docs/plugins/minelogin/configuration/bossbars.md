# BossBar Configuration

The BossBar feature in mineLogin allows server administrators to display important login-related messages to players in a prominent and customizable bar at the top of the screen. This feature is particularly useful for guiding players through the login or registration process.

Here's the relevant section from the configuration file:

```yaml
boss-bar-commands:
  enabled: true
  color: YELLOW
  overlay: PROGRESS
  login-command: ' &8[&6#&8] &6Use login command: &e/login <password> &8[&6#&8] '
  register-command: ' &8[&6#&8] &6Use login command: &e/register <password> <password> {captcha} &8[&6#&8] '
  require-2-fa-command: ' &8[&6#&8] &6Use verification command: &e/2fa verify <2fa> &8[&6#&8] '
  require-create-2-fa-command: ' &8[&6#&8] &6Create verification by command: &e/2fa &8[&6#&8] '
```

## Important Note
This feature is not working on BungeeCord. It's primarily designed for Spigot/Paper servers or Velocity proxy.

## General Settings

1. `enabled: true`
    - Purpose: Toggles the BossBar feature on or off.
    - Values: `true` or `false`
    - When set to `false`, no BossBars will be displayed.

2. `color: YELLOW`
    - Purpose: Sets the color of the BossBar.
    - Options: BLUE, GREEN, PINK, PURPLE, RED, WHITE, YELLOW
    - Choose a color that stands out against your server's typical scenery.

3. `overlay: PROGRESS`
    - Purpose: Defines the visual style of the BossBar.
    - Options: PROGRESS, NOTCHED_6, NOTCHED_10, NOTCHED_12, NOTCHED_20
    - PROGRESS shows a solid bar, while NOTCHED options show segmented bars.

## Message Configurations

Each of these settings defines the message for a specific action:

1. `login-command: ' &8[&6#&8] &6Use login command: &e/login <password> &8[&6#&8] '`
    - Displayed when a player needs to log in.

2. `register-command: ' &8[&6#&8] &6Use login command: &e/register <password> <password> {captcha} &8[&6#&8] '`
    - Shown when a player needs to register.
    - Note the `{captcha}` placeholder, which will be replaced with the actual captcha if enabled.

3. `require-2-fa-command: ' &8[&6#&8] &6Use verification command: &e/2fa verify <2fa> &8[&6#&8] '`
    - Displayed when a player needs to complete 2FA verification.

4. `require-create-2-fa-command: ' &8[&6#&8] &6Create verification by command: &e/2fa &8[&6#&8] '`
    - Shown when a player needs to set up 2FA.

## Best Practices

1. **Clear and Concise Messages**
    - Keep messages short and to the point for easy readability.
    - Use color codes to emphasize important parts of the message (e.g., commands).

2. **Consistent Styling**
    - Maintain a consistent style across all messages for a professional look.
    - The `&8[&6#&8]` in the example provides a consistent visual element.

3. **Color Choice**
    - Choose a BossBar color that contrasts well with your server's typical environment.
    - Ensure the text color (set in the message) is readable against the BossBar color.

4. **Appropriate Overlay**
    - PROGRESS is suitable for most cases, but NOTCHED options can be used to indicate steps or time remaining.

5. **Localization**
    - Consider offering messages in multiple languages if your server caters to an international audience.

## Customization Tips

1. **Color Codes**
    - Use `&` followed by a code for colors (e.g., `&e` for yellow, `&6` for gold).
    - Use `&l` for bold, `&n` for underline, etc.

2. **Placeholders**
    - The `{captcha}` placeholder in the register command will be replaced with the actual captcha.
    - Consider adding other placeholders if supported by your version of mineLogin.

3. **Testing**
    - Always test your BossBar configurations in-game after making changes to ensure they look as intended.

## Example Custom Configuration

```yaml
boss-bar-commands:
  enabled: true
  color: BLUE
  overlay: NOTCHED_10
  login-command: ' &f[&b♦&f] &bLogin: &f/login <your password> &f[&b♦&f] '
  register-command: ' &f[&b♦&f] &bRegister: &f/register <password> <repeat> {captcha} &f[&b♦&f] '
  require-2-fa-command: ' &f[&b♦&f] &b2FA Verify: &f/2fa verify <code> &f[&b♦&f] '
  require-create-2-fa-command: ' &f[&b♦&f] &bSet up 2FA: &f/2fa &f[&b♦&f] '
```

This example uses a blue theme with a notched overlay, providing a distinct look while maintaining clarity in the instructions.

Remember to restart your server or reload the plugin after making changes to see them take effect. Always consider the overall user experience and ensure that the BossBar doesn't obstruct important game elements.

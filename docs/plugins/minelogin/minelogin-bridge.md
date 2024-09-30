# mineLogin-bridge Plugin Configuration

The mineLogin-bridge plugin offers extensive configuration options to customize its behavior and integration with your server. Below is a detailed explanation of the configuration file and important setup procedures:

```yaml
# Your server name.
server-name: mineCodes.pl

# Date format for each plugin messages with time.
date-format: dd.MM.yyyy HH:mm:ss

# Configuration for all communication between servers.
# Option only for Redis or Nats communication.
communication:
  # Type of communication between servers.
  # Options: PLUGIN_MESSAGING_CHANNEL, REDIS, NATS
  type: PLUGIN_MESSAGING_CHANNEL
  # Host of Redis or Nats server.
  host: localhost
  # Port of Redis or Nats server.
  port: 25565
  # Username of Nats server.
  username: username
  # Password of Redis or Nats server.
  password: password

# Configuration for all given maps.
maps:
  # Slot on the HotBar for the map with the verification QR code. (2FA)
  verification-qr-map-slot: 1
  # Url of image for the captcha map. (128x128)
  captcha-map-image: https://i.imgur.com/3bW99kb.png
  # Slot on the HotBar for the map with the captcha code.
  captcha-map-slot: 3

# Configuration for all things before player login.
login:
  # Should the plugin hide the player's items before logging in
  # IMPORTANT: This option is required for ProtocolLib plugin!
  hide-items-for-not-logged-players: true
  # Is the plugin supposed to hide players before logging in.
  hide-not-logged-players: true
  # Whether the player should receive the Blindness effect before logging in.
  give-blindness-effect-for-not-logged-players: true
  # Location where player will spawn on server join.
  # WARNING: Use /loginlocation command to set this location!
  login-location: 'world:2137.5189512412912:66.0:2137.5305646685747:179.70175:-10.200035:'
```

## Key Configuration Sections:

1. **Server Information**:
    - `server-name`: Set your server's name, used in various plugin messages.
    - `date-format`: Customize the date and time format for plugin messages.

2. **Communication Settings**:
    - Configure inter-server communication if using a network setup.
    - Options for PLUGIN_MESSAGING_CHANNEL, REDIS, or NATS.
    - Specify host, port, username, and password for Redis or NATS if used.

3. **Map Configurations**:
    - `verification-qr-map-slot`: Set the hotbar slot for the 2FA QR code map.
    - `captcha-map-image`: URL for the captcha image (must be 128x128 pixels).
    - `captcha-map-slot`: Set the hotbar slot for the captcha code map.

4. **Login Settings**:
    - `hide-items-for-not-logged-players`: Hide player items before login (important for ProtocolLib compatibility).
    - `hide-not-logged-players`: Option to hide players who haven't logged in yet.
    - `give-blindness-effect-for-not-logged-players`: Apply blindness effect to players before login.
    - `login-location`: Spawn location for players joining the server.

## Setting Login Location

The login location is a crucial setting that determines where players spawn when joining the server before authentication. It's set using an in-game command rather than direct configuration file editing.

### Using the /loginLocation Command

To set the login location:

1. **Command**: `/loginLocation`
2. **Required Permissions**: Server Operator status

### Steps to Set Login Location:

1. Ensure you have Operator status on the server.
2. Navigate to the exact location where you want players to spawn before login.
3. Execute the command `/loginLocation`.
4. The plugin will confirm that the login location has been set successfully.

### Important Notes:

- The login location is automatically updated in the configuration file after using the command.
- You do not need to manually edit the `login-location` in the `configuration.yml` file.
- Choose a location that is safe and contained, preventing unauthorized movement or interactions.

## Best Practices:

1. **Security**:
    - Keep the `communication` section secure, especially if using Redis or NATS.
    - Regularly update the `captcha-map-image` to prevent automated solving.
    - Set the login location in a contained, secure area.

2. **User Experience**:
    - Adjust map slots for optimal player interaction.
    - Consider the impact of hiding players and applying effects on the player experience.
    - Place signs or visual cues at the login location to guide players.

3. **Integration**:
    - Ensure communication settings match your network configuration if using multiple servers.
    - Test compatibility with other plugins, especially when hiding items for non-logged players.

4. **Maintenance**:
    - Regularly review and update the login location, especially after server map changes.
    - Periodically test the login process to ensure all features work as expected.

## Troubleshooting:

1. If inter-server communication fails, double-check the `communication` section settings.
2. For issues with map displays, ensure the specified slots are not conflicting with other plugins.
3. If players spawn in unexpected locations, use the `/loginLocation` command to reset the spawn point.
4. Check server logs for any error messages related to the login location or other configuration issues.

Remember to restart your server or reload the plugin after making changes to the configuration file or setting a new login location. Always test new configurations on a development server before applying them to your live environment.

By carefully configuring these settings and properly setting up the login location, you can create a secure, user-friendly authentication process for your Minecraft server using the mineLogin-bridge plugin.

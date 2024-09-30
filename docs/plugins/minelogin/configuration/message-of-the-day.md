# Message of the Day (MOTD) Configuration

The Message of the Day (MOTD) is part of the server-ping configuration in mineLogin. It allows you to customize the server information displayed in the Minecraft server list. This feature is crucial for making a good first impression on potential players and providing important information about your server.

Here's the relevant section from the configuration file:

```yaml
server-ping:
  message-of-the-day:
    enabled: true
    messages:
    - '  &e{online}&7/&c{slots}          &#ffaf05&l m i n e L o g i n {new} &8[&6#&8] &7Advanced login system.'
    - '  &aSurvival: &7{server:survival}      &#ffaf05&l m i n e L o g i n {new} &8[&6#&8] &ehttps://minelogin.minecodes.pl/'
  players-info:
    enabled: true
    messages:
    - ''
    - '                      &aBuy it!'
    - ' &8# &eSurvival: &7{server:survival}'
    - ' &8# &eCreative: &7{server:creative}'
    - ''
  version-protocol:
    enabled: true
    protocol: -1
    message: '&7Online &e{online}&7/&c{slots} &7players'
```

## Message of the Day (MOTD)

1. `enabled`:
    - Purpose: Toggles the custom MOTD feature on or off.
    - Values: `true` or `false`
    - When set to `false`, the server will use the default Minecraft MOTD.

2. `messages`:
    - Purpose: Defines the MOTD lines displayed in the server list.
    - You can define multiple lines, which will rotate if your server list ping interval allows it.
    - Supports color codes and placeholders.

#### Placeholders:
- `{online}`: Current number of online players
- `{slots}`: Maximum number of slots
- `{new}`: Can be used to highlight new features
- `{server:servername}`: Online players on a specific server (e.g., `{server:survival}`)

#### Color Codes:
- Use `&` followed by color codes for basic colors (e.g., `&e` for yellow)
- Use `&#RRGGBB` for hex color codes (e.g., `&#ffaf05` for a custom orange)

## Players Info

This section customizes the message shown when hovering over the player count in the server list.

1. `enabled`:
    - Toggles this feature on or off.

2. `messages`:
    - Defines the lines shown in the hover message.
    - Supports the same placeholders and color codes as the MOTD.

## Version Protocol

This section allows you to customize the version number display in the server list.

1. `enabled`:
    - Toggles this feature on or off.

2. `protocol`:
    - Set to `-1` to use a custom message instead of a version number.
    - Other values correspond to specific Minecraft versions.

3. `message`:
    - The custom message to display in place of the version number.
    - Supports placeholders like `{online}` and `{slots}`.

## Best Practices

1. Keep your MOTD concise and informative. Use it to highlight key features or current events on your server.

2. Use color codes to make important information stand out, but don't overuse them as it can make the text hard to read.

3. Regularly update your MOTD to keep it fresh and relevant. This can include mentioning seasonal events, new features, or current player counts.

4. Use the players info section to provide more detailed information that doesn't fit in the main MOTD.

5. Test your MOTD with different Minecraft clients to ensure it displays correctly across various versions.

6. If you're running multiple server types (e.g., survival, creative), use the `{server:name}` placeholder to show individual server stats.

## Example MOTD Configuration

```yaml
server-ping:
  message-of-the-day:
    enabled: true
    messages:
    - '&6&l✦ &e&lEpic Minecraft Network &6&l✦ {new} &a{online}&7/&c{slots} &7online &8| &bNew Summer Event! &8| &d/vote for rewards'
  players-info:
    enabled: true
    messages:
    - '&6✦ &e&lServer Information &6✦'
    - '&aSurvival: &f{server:survival} players'
    - '&bCreative: &f{server:creative} players'
    - '&dSkyblock: &f{server:skyblock} players'
    - '&6Join now for summer specials!'
  version-protocol:
    enabled: true
    protocol: -1
    message: '&7Join &e{online} &7others!'
```

This configuration creates an attractive and informative server listing that highlights the number of players online, mentions a summer event, and provides detailed player counts for different game modes when hovering over the player count.

Remember to restart your server or use the appropriate reload command after making changes to see them take effect.

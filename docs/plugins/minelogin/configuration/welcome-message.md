# Welcome Message Configuration

The main content of the welcome message in mineLogin is configured in the `messages.yml` file, under the key `welcome-message-after-successfully-authorize`. This message is displayed to players after they have successfully logged in or registered on the server.

## Location of the Welcome Message

File: `messages.yml`
Key: `welcome-message-after-successfully-authorize`

## Configuring the Welcome Message

The welcome message can be customized to include multiple lines, color codes, and placeholders. Here's an example of how it might look:

```yaml
welcome-message-after-successfully-authorize:
  - '&6&l✦ &e&lWelcome to Epic Minecraft Network &6&l✦'
  - '&aHello, &b{username}&a! You've successfully logged in.'
  - '&7You registered on &e{registerTime}'
  - '&7Your registered email is &e{email}'
  - '&dType &6/help &dfor a list of commands'
  - '&cRemember to read our rules at &6/rules'
  - '&eEnjoy your stay!'
```

## Key Components

1. **Multiple Lines**: Each line of the message is represented by a new item in the list (denoted by the `-` at the start of each line).

2. **Color Codes**:
    - Use `&` followed by a color code to change text color.
    - For example, `&6` for gold, `&e` for yellow, `&a` for green.
    - You can also use `&l` for bold, `&n` for underline, etc.

3. **Placeholders**:
    - `{username}`: Replaced with the player's username
    - `{registerTime}`: Shows the date and time when the player registered
    - `{email}`: Displays the email address associated with the player's account

## Best Practices

1. **Keep it Concise**: While you can add multiple lines, try to keep the message brief. Players should be able to read it quickly.

2. **Provide Useful Information**: Include important commands, current events, or key rules.

3. **Personalization**: Use the `{username}` placeholder to make the message feel more personal.

4. **Visual Appeal**: Use color codes to make important information stand out, but don't overuse them as it can make the text hard to read.

5. **Regular Updates**: Keep your welcome message up to date with current server information and events.

## Interaction with `welcome-picture-head`

While the main content of the welcome message is in `messages.yml`, the `welcome-picture-head` section in `configuration.yml` still controls whether the player's head is displayed alongside this message:

```yaml
welcome-picture-head:
  enabled: true
  display-type: ALL_PLAYERS
  only-lobby-servers: true
```

- If `enabled` is `true`, the player's head will be displayed with the welcome message.
- `display-type` determines whether all players or only premium players see their head.
- `only-lobby-servers` restricts the head display to lobby servers if set to `true`.

## Example Full Welcome Message Configuration

In `messages.yml`:
```yaml
welcome-message-after-successfully-authorize:
  - '&6&l✦ &e&lWelcome to Epic Minecraft Network &6&l✦'
  - '&aHello, &b{username}&a! You've successfully logged in.'
  - '&7You registered on &e{registerTime}'
  - '&7Your registered email is &e{email}'
  - '&dType &6/help &dfor a list of commands'
  - '&cRemember to read our rules at &6/rules'
  - '&eEnjoy your stay!'
```

In `configuration.yml`:
```yaml
welcome-picture-head:
  enabled: true
  display-type: ALL_PLAYERS
  only-lobby-servers: true
```

This configuration will display a colorful, informative welcome message to players after they log in, potentially accompanied by their player head (depending on the server they join and their account type).

Remember to restart your server or use the appropriate reload command after making changes to see them take effect.

# Geyser Configuration

[...previous content remains the same...]

## Important Configuration Note

When configuring the Geyser prefix, it's crucial to also update the username regex in the `other-settings` section of your mineLogin configuration. This ensures that the Geyser prefix is properly recognized and allowed in player usernames.

For example, if your Geyser configuration is:

```yaml
geyser:
  geyser-players-prefix: "."
```

You should update the `nickname-allowed-regex` in the `other-settings` section to include this prefix:

```yaml
other-settings:
  nickname-allowed-regex: '[.a-zA-Z0-9_]+'
```

This regex allows for the dot prefix as well as alphanumeric characters and underscores in usernames.

## Best Practices for Prefix and Regex Configuration

1. **Consistent Prefix and Regex**
    - Ensure that the prefix you choose for Geyser players is reflected in the `nickname-allowed-regex`.
    - If you change the Geyser prefix, always remember to update the regex accordingly.

2. **Testing Regex**
    - After updating the regex, test it thoroughly with various username formats, including those with and without the Geyser prefix.
    - Ensure that the regex doesn't accidentally allow unintended characters in usernames.

3. **Documentation**
    - Keep a note in your server documentation about the Geyser prefix and its impact on username regulations.
    - This helps both administrators and players understand the naming conventions on your server.

4. **Regular Review**
    - Periodically review your Geyser prefix and regex settings, especially after updates to mineLogin, Geyser, or Floodgate.

## Example Configurations

1. Using a dot prefix:
   ```yaml
   geyser:
     geyser-players-prefix: "."
   
   other-settings:
     nickname-allowed-regex: '[.a-zA-Z0-9_]+'
   ```

2. Using a bracketed prefix:
   ```yaml
   geyser:
     geyser-players-prefix: "[BE]"
   
   other-settings:
     nickname-allowed-regex: '(\[BE\])?[a-zA-Z0-9_]+'
   ```
   Note: In this case, the regex allows for an optional [BE] prefix at the start of the username.

Remember, the exact regex you use may need to be adjusted based on your specific server rules and naming conventions. Always test your configuration thoroughly to ensure it works as expected for both Java and Bedrock players.
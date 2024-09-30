# Commands Configuration

The commands configuration in mineLogin allows server administrators to customize various aspects of the plugin's commands. This configuration is stored in the `commands.yml` file and provides flexibility in how commands are named, enabled, and permissions are set.

## General Structure

Each command in mineLogin follows a similar configuration structure:

```yaml
command-name:
  original-name: originalCommandName
  enabled: true
  name: customCommandName
  description: Command description.
  permission: 'permission.node'
  aliases:
    - alias1
    - alias2
```

## Configuration Options

1. **original-name**
    - This is the internal name of the command used by the plugin.
    - Warning: Do not change this value as it may break the functionality of the command.

2. **enabled**
    - Determines whether the command is active and usable on the server.
    - Values: `true` or `false`
    - Use this to disable commands you don't want to be available on your server.

3. **name**
    - The actual command name that players will use.
    - You can customize this to fit your server's naming conventions.

4. **description**
    - A brief explanation of what the command does.
    - This description is typically shown in help menus or when using tab completion.

5. **permission**
    - The permission node required to use the command.
    - Leave blank (`''`) for no permission requirement.
    - You can set custom permissions to restrict command usage to certain player groups.

6. **aliases**
    - A list of alternative names for the command.
    - Players can use these aliases instead of the main command name.

## Best Practices

1. **Consistency**
    - Try to maintain a consistent naming scheme across all commands.
    - Use descriptive names that clearly indicate the command's function.

2. **Permissions**
    - Carefully consider which commands should be restricted and set appropriate permissions.
    - For sensitive commands (like unregister or change password), always use permissions.

3. **Aliases**
    - Choose intuitive aliases that are easy for players to remember.
    - Avoid aliases that might conflict with other plugins or vanilla Minecraft commands.

4. **Descriptions**
    - Write clear, concise descriptions that explain both the function and usage of the command.

5. **Disabling Commands**
    - Instead of removing a command from the configuration, use the `enabled: false` option to disable it.
    - This makes it easier to re-enable the command later if needed.

## Example Configuration

Here's an example of how you might customize the login command:

```yaml
login-command:
  original-name: login
  enabled: true
  name: signin
  description: Sign in to your account.
  permission: 'minelogin.signin'
  aliases:
    - logmein
    - access
```

In this example:
- The original login command is renamed to "signin".
- It requires the 'minelogin.signin' permission to use.
- Players can also use "logmein" or "access" as aliases for the command.

## Updating Commands

When updating the plugin, always check the `commands.yml` file for any new commands or changes. New versions might introduce new commands or modify existing ones.

Remember to restart your server after making changes to the commands configuration. This ensures that all changes take effect properly.

By carefully configuring your commands, you can create a user-friendly and secure authentication system that fits seamlessly with your server's overall design and functionality.

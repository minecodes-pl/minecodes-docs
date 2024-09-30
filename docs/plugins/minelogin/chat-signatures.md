# Disable Chat Signatures

Chat signatures are a security feature introduced in Minecraft 1.19 to verify the authenticity of player messages. However, in some server configurations, especially those using plugins like mineLogin, it might be necessary to disable this feature. This section will guide you through disabling chat signatures on different server platforms.

## Why Disable Chat Signatures?

1. **Plugin Compatibility**: Some plugins, including certain configurations of mineLogin, may not be fully compatible with chat signatures.
2. **Performance**: Disabling signatures can slightly reduce server load, especially on larger networks.
3. **Flexibility**: It allows more control over chat management and moderation plugins.

## Disabling Chat Signatures on Different Platforms

### 1. Velocity

For Velocity proxy servers, you need to modify the Velocity configuration file.

**File**: `velocity.toml`

**Configuration**:
```toml
force-key-authentication = false
```

**Explanation**:
- Setting `force-key-authentication` to `false` disables the requirement for players to have signed keys, effectively disabling chat signatures.

### 2. BungeeCord

For BungeeCord proxy servers, you need to modify the BungeeCord configuration file.

**File**: `config.yml`

**Configuration**:
```yaml
enforce_secure_profile: false
```

**Explanation**:
- Setting `enforce_secure_profile` to `false` disables the enforcement of secure profiles, which includes chat signatures.

### 3. Spigot/Paper

For Spigot or Paper servers, you need to modify the server properties file.

**File**: `server.properties`

**Configuration**:
```properties
enforce-secure-profile=false
```

**Explanation**:
- Setting `enforce-secure-profile` to `false` disables the requirement for secure profiles, effectively turning off chat signatures.

## Important Considerations

1. **Security Implications**: Disabling chat signatures removes a layer of security that verifies message authenticity. Ensure you have alternative measures in place to manage and moderate chat if needed.

2. **Client Compatibility**: Some clients might expect chat signatures to be enabled. Ensure your server software and plugins handle this gracefully.

3. **Network-Wide Configuration**: If you're running a network of servers, make sure to apply these changes consistently across all relevant configuration files.

4. **Plugin Interactions**: After disabling chat signatures, test thoroughly to ensure all chat-related plugins function correctly.

5. **Future Updates**: Keep in mind that future Minecraft updates might change how chat signatures work. Stay informed about updates and adjust your configuration as necessary.

## Applying Changes

After making these changes:

1. Save the configuration file.
2. Restart your server or proxy for the changes to take effect.
3. Test chat functionality to ensure everything works as expected.

By correctly configuring chat signatures based on your server setup, you can ensure compatibility with mineLogin and other plugins while maintaining appropriate chat management for your Minecraft server or network.

# Skins Configuration

The skins configuration in mineLogin allows you to manage how player skins are handled on your server. This includes options for both premium (paid) Minecraft accounts and non-premium (cracked) accounts.

Here's the relevant section from the configuration file:

```yaml
skin:
  premium-enabled: true

default-skin:
  enabled: true
  value: ewogICJ0aW1lc3RhbXAiIDogMTYzOTIwNTI0OTkwMiwKICAicHJvZmlsZUlkIiA6ICJkZGU4MTE1YjcwYjI0ZDU2YTllNTdiNWUzOTE0MjJhOSIsCiAgInByb2ZpbGVOYW1lIiA6ICJfYXJ0dXJlayIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8xNmVkMjEzNTAwMGZiOWYwMzMxMTIxMzkyZjFmYjUyOTFmNTJiMmNlNGFmMDJkNGFhM2JiM2U1OTUzYzU5YjMzIgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8yMzQwYzBlMDNkZDI0YTExYjE1YThiMzNjMmE3ZTllMzJhYmIyMDUxYjI0ODFkMGJhN2RlZmQ2MzVjYTdhOTMzIgogICAgfQogIH0KfQ==
  signature: jzHnovbTHe2Swg8W690SsnrE445ynmGVKuyTHANr+3NTfeCVkFaYw+LCkDhT2tmWwMsBtqyuo30xB0+RyS9xIrQ7c5FCFXyxjj8hwHuzkpO5GXyaO2V80Fp2SuF+tnS8h+O3NkNzzDqIq8VILGU5qcLqMVRmbSvf8TYomzXoItl7h4cW5wpLvuV7WL8YjGo9ICfmMEaA7TkjU6sHHkBc4cJfx1naWAe8hAB3C+dv7BHgm8gevm88/IE2TGugzOrk3m317H9TLCW+YM9pHk/4yKlCBxccFhH/Z5h4MCV+9YHLlz+h99+gC4tzafk68KqDtPD3aDEeSg3NNVvTSybOPZ1IctlnKtNb5GNSYXu6Jj6Ao2pxD4go1dFPWOZYvU1Cz/8fM8BqoeztqSKOXpWCWymmpk1kgqWEq2EyGMfPGxMFfAU+tDyGV+rGluumH/XOjmQDvNQePL7aZUzIem0Y1Yqrsu2EmLgbF/Gw+cB2NbJ7erOnpRUQafYvoTueA1rDgHF4hyl+2Dr5V1S9GQPAvzZLbcvX/7UHeo0mpTobGBeWP7Iv4vFZSRuSJ3tKr7jkgFwHtaSlRUNm75QipjOujsnOv8UG5sDks38fLnc1KZFz2RbrlRNvl0gGQULysWGVRsB03KrLEzLJcTw3gYGt8z7mjx2O42T2d8MIGCBswz0=
```

## Options Explained

1. Skin Configuration for Premium Accounts:
   ```yaml
   skin:
     premium-enabled: true
   ```
    - `premium-enabled`: Determines whether to download and use skins for premium (paid) Minecraft accounts.
    - Values: `true` or `false`
    - When `true`, the plugin will fetch and apply official skins for premium players.
    - When `false`, premium players will use the default skin or any custom skin system you have in place.
    - Note: This option is only effective on Velocity proxy.

2. Default Skin Configuration (for non-premium accounts):
   ```yaml
   default-skin:
     enabled: true
     value: ewogICJ0aW1lc3RhbXAiIDogMTYzOTIwNTI0OTkwMiwKICAicHJvZmlsZUlkIiA6ICJkZGU4MTE1YjcwYjI0ZDU2YTllNTdiNWUzOTE0MjJhOSIsCiAgInByb2ZpbGVOYW1lIiA6ICJfYXJ0dXJlayIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8xNmVkMjEzNTAwMGZiOWYwMzMxMTIxMzkyZjFmYjUyOTFmNTJiMmNlNGFmMDJkNGFhM2JiM2U1OTUzYzU5YjMzIgogICAgfSwKICAgICJDQVBFIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8yMzQwYzBlMDNkZDI0YTExYjE1YThiMzNjMmE3ZTllMzJhYmIyMDUxYjI0ODFkMGJhN2RlZmQ2MzVjYTdhOTMzIgogICAgfQogIH0KfQ==
     signature: jzHnovbTHe2Swg8W690SsnrE445ynmGVKuyTHANr+3NTfeCVkFaYw+LCkDhT2tmWwMsBtqyuo30xB0+RyS9xIrQ7c5FCFXyxjj8hwHuzkpO5GXyaO2V80Fp2SuF+tnS8h+O3NkNzzDqIq8VILGU5qcLqMVRmbSvf8TYomzXoItl7h4cW5wpLvuV7WL8YjGo9ICfmMEaA7TkjU6sHHkBc4cJfx1naWAe8hAB3C+dv7BHgm8gevm88/IE2TGugzOrk3m317H9TLCW+YM9pHk/4yKlCBxccFhH/Z5h4MCV+9YHLlz+h99+gC4tzafk68KqDtPD3aDEeSg3NNVvTSybOPZ1IctlnKtNb5GNSYXu6Jj6Ao2pxD4go1dFPWOZYvU1Cz/8fM8BqoeztqSKOXpWCWymmpk1kgqWEq2EyGMfPGxMFfAU+tDyGV+rGluumH/XOjmQDvNQePL7aZUzIem0Y1Yqrsu2EmLgbF/Gw+cB2NbJ7erOnpRUQafYvoTueA1rDgHF4hyl+2Dr5V1S9GQPAvzZLbcvX/7UHeo0mpTobGBeWP7Iv4vFZSRuSJ3tKr7jkgFwHtaSlRUNm75QipjOujsnOv8UG5sDks38fLnc1KZFz2RbrlRNvl0gGQULysWGVRsB03KrLEzLJcTw3gYGt8z7mjx2O42T2d8MIGCBswz0=
   ```
    - `enabled`: Determines whether to use a default skin for non-premium accounts.
    - Values: `true` or `false`
    - When `true`, non-premium players will use the specified default skin.
    - `value`: The Base64-encoded texture data for the default skin.
    - `signature`: The signature for the skin texture, ensuring its authenticity.

## Best Practices

1. **Premium Skins**:
    - Keep `premium-enabled: true` to ensure premium players have their official skins.
    - This enhances the authenticity of your server for paid account holders.

2. **Default Skin**:
    - Use `enabled: true` for the default skin to ensure all players have a skin, even if they're using a non-premium account.
    - Choose a neutral or server-themed default skin to maintain a consistent look.

3. **Custom Default Skin**:
    - To change the default skin, you'll need to obtain the new skin's texture value and signature.
    - You can get these values from websites that provide Minecraft skin data or by using tools that can extract this information from a skin file.

4. **Performance Consideration**:
    - If you're running a large server with many non-premium players, using a default skin can reduce the load on your server as it doesn't need to fetch individual skins.

5. **Legal Considerations**:
    - Ensure you have the right to use any custom default skin you implement.
    - Avoid using copyrighted or trademarked skins without permission.

## Changing the Default Skin

To change the default skin:

1. Choose a new skin you want to use as the default.
2. Use a Minecraft skin data extractor tool or service to get the Base64 `value` and `signature` for the new skin.
3. Replace the `value` and `signature` in the configuration with the new data.
4. Save the configuration and restart your server or reload the plugin.

## Troubleshooting

1. If premium skins aren't loading:
    - Ensure `premium-enabled` is set to `true`.
    - Check your server's internet connection, as it needs to fetch skins from Mojang's servers.

2. If the default skin isn't applying:
    - Verify that `enabled` under `default-skin` is set to `true`.
    - Make sure the `value` and `signature` are correctly formatted and not corrupted.

3. If you see Steve or Alex skins instead of your default:
    - This might indicate an issue with the skin data. Try re-extracting the skin data or using a different skin.

Remember, changes to the skin configuration typically require a server restart or plugin reload to take effect. Always test skin changes on a development server before applying them to your live environment.

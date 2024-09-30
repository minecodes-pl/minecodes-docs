# Sounds Configuration

The sounds section in mineLogin allows you to customize the audio feedback players receive during various authentication actions. This can enhance the user experience by providing audible cues for successful logins, failed attempts, and registrations.

Here's the relevant section from the configuration file:

```yaml
sounds:
  login-sound:
    sound:
      name: minecraft:entity.experience_orb.pickup
      pitch: 1.0
      source: AMBIENT
      volume: 1.0
    enabled: true
  wrong-password-sound:
    sound:
      name: minecraft:entity.bat.hurt
      pitch: 1.0
      source: AMBIENT
      volume: 1.0
    enabled: true
  register-sound:
    sound:
      name: minecraft:block.end_portal_frame.fill
      pitch: 1.0
      source: AMBIENT
      volume: 1.0
    enabled: true
```

## General Structure

Each sound event (login, wrong password, register) has the following properties:

- `enabled`: Toggles whether the sound is played (true/false)
- `sound`:
    - `name`: The Minecraft sound effect to play
    - `pitch`: The pitch of the sound (0.5 to 2.0, where 1.0 is normal)
    - `source`: The category of the sound (affects how the game handles it)
    - `volume`: The volume of the sound (0.0 to 1.0)

## Available Sound Events

1. `login-sound`: Played when a player successfully logs in
2. `wrong-password-sound`: Played when a player enters an incorrect password
3. `register-sound`: Played when a player successfully registers an account

## Configuring Sounds

For each sound event, you can:

1. Enable or disable the sound:
   ```yaml
   enabled: true  # or false to disable
   ```

2. Choose a Minecraft sound effect:
   ```yaml
   name: minecraft:entity.experience_orb.pickup
   ```
   You can find a list of available Minecraft sounds at: https://www.digminecraft.com/lists/sound_list_pc.php

3. Adjust the pitch:
   ```yaml
   pitch: 1.0  # Normal pitch, can be between 0.5 (lower) and 2.0 (higher)
   ```

4. Set the sound source:
   ```yaml
   source: AMBIENT  # Other options include PLAYER, BLOCK, WEATHER, etc.
   ```

5. Control the volume:
   ```yaml
   volume: 1.0  # Full volume, can be between 0.0 (silent) and 1.0 (loudest)
   ```

## Best Practices

1. **Choose Appropriate Sounds**: Select sounds that make sense for each action. For example, a positive sound for successful login, and a negative sound for wrong passwords.

2. **Balance Volume**: Keep the volume reasonable. You don't want to startle players with overly loud sounds.

3. **Consider Pitch**: Adjusting the pitch can help differentiate between different actions even if using the same base sound.

4. **Test Thoroughly**: After configuring, test each action to ensure the sounds are appropriate and not disruptive.

5. **Respect Player Preferences**: Some players might prefer to play without these sounds. Consider providing an in-game command to toggle them on/off for individual players.

## Example Configuration

Here's an example of a custom sound configuration:

```yaml
sounds:
  login-sound:
    sound:
      name: minecraft:block.note_block.pling
      pitch: 1.2
      source: PLAYER
      volume: 0.8
    enabled: true
  wrong-password-sound:
    sound:
      name: minecraft:block.anvil.land
      pitch: 0.8
      source: PLAYER
      volume: 0.5
    enabled: true
  register-sound:
    sound:
      name: minecraft:entity.player.levelup
      pitch: 1.0
      source: PLAYER
      volume: 0.7
    enabled: true
```

This configuration uses distinct sounds for each action, with adjusted pitches and volumes to create a pleasant audio experience.

Remember to restart your server or use the appropriate reload command after making changes to the sound configuration.

Note: The effectiveness of custom sounds may depend on the client's resource pack settings. If you're using custom resource packs on your server, ensure that these sounds are included and properly mapped.

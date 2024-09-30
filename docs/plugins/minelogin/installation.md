# Installation

Follow these steps to install and set up the mineLogin plugin for the first time:

1. Download the mineLogin plugin file for your proxy engine.
2. Place the plugin file in the `plugins` folder of your server.
3. Start or restart your server to generate the configuration files.
4. Stop the server.
5. Open the `plugins/mineLogin/configuration.yml` file.
6. Set your license key:
   ```yaml
   license-key: YOUR_LICENSE_KEY_HERE
   ```
   Replace `YOUR_LICENSE_KEY_HERE` with the license key you received when purchasing the plugin.
7. Configure the servers in the proxy section:
   ```yaml
   servers:
     login-servers:
     - auth
     fallback-server: true
     change-server-after-login: false
     after-login-servers: []
   ```
    - Add the names of your authentication servers to the `login-servers` list.
    - Set `fallback-server` to `true` if you want players to be moved to a fallback server when kicked from a network server.
    - If you want players to be moved to specific servers after login, set `change-server-after-login` to `true` and list the server names in `after-login-servers`.
8. Save the `configuration.yml` file.
9. Start your server.

Your mineLogin plugin is now installed and configured with basic settings. You can further customize the plugin by adjusting other configuration sections as needed.

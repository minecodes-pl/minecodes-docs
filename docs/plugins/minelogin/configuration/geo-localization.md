# Geo-Location Configuration

The geo-location feature in mineLogin allows server administrators to control access to the server based on the geographical location of players. This can be useful for region-specific servers or for implementing certain access controls.

Here's the relevant section from the configuration file:

```yaml
geo-location:
   enabled: false
   available-countries:
      - PL
      - FR
      - EN
      - US
      - GB
```

## Options Explained

1. `enabled: false`
   - Purpose: Toggles the geo-location feature on or off.
   - Values: `true` or `false`
   - When set to `true`, the plugin will check the player's location before allowing access.

2. `available-countries:`
   - Purpose: Lists the country codes that are allowed to access the server.
   - Format: A list of two-letter ISO country codes.
   - In the example, players from Poland (PL), France (FR), England (EN), United States (US), and Great Britain (GB) are allowed.

## Important Considerations

1. **Accuracy**: Geo-location based on IP addresses is not always 100% accurate. Some players might be incorrectly identified as being in a different country.

2. **VPNs and Proxies**: Players using VPNs or proxies may appear to be from a different country than their actual location.

3. **Privacy**: Be aware of any legal requirements or privacy concerns related to collecting and using location data.

4. **Player Experience**: Restricting access based on location can frustrate players who are unexpectedly blocked.

## Best Practices

1. **Clear Communication**
   - If you enable this feature, clearly communicate the restrictions to your player base.
   - Provide information on your website or server message about which regions can access the server.

2. **Whitelist Alternative**
   - Consider using a whitelist instead of geo-location if you're trying to create a region-specific community.

3. **Testing**
   - Thoroughly test the feature to ensure it's working as intended and not incorrectly blocking legitimate players.

4. **Regular Review**
   - Periodically review and update the list of allowed countries based on your server's needs and player feedback.

5. **Compliance**
   - Ensure that your use of geo-location data complies with relevant data protection laws and regulations.

## Implementation Tips

1. **Gradual Roll-out**
   - If implementing this feature on an existing server, consider a gradual roll-out to minimize disruption.

2. **Exceptions Handling**
   - Implement a system for handling exceptions, such as allowing specific players to bypass the geo-location check.

3. **Logging**
   - Set up logging for geo-location checks to monitor its effectiveness and troubleshoot any issues.

## Example Configurations

1. European Union Focus:
   ```yaml
   geo-location:
     enabled: true
     available-countries:
     - DE
     - FR
     - IT
     - ES
     - PL
     - NL
     - BE
     - SE
     - AT
   ```
   This configuration would allow access from major EU countries.

2. English-Speaking Countries:
   ```yaml
   geo-location:
     enabled: true
     available-countries:
     - US
     - CA
     - GB
     - AU
     - NZ
     - IE
   ```
   This setup focuses on major English-speaking countries.

## Troubleshooting

1. **Players Unable to Connect**:
   - Check if the player's country is in the `available-countries` list.
   - Verify that the geo-location service is working correctly.

2. **Unexpected Blocks**:
   - Some ISPs might route traffic through other countries. In such cases, you might need to add additional country codes or implement an exception system.

Remember to restart your server or reload the plugin after making changes to the geo-location configuration. Always monitor the impact of these restrictions on your player base and be prepared to adjust as necessary.

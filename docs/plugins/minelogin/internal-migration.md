# Internal Migration Between Database Types

mineLogin supports migration between different database types. This feature is useful when you need to change your database system or upgrade to a more scalable solution. The process involves exporting data from the current database, changing the configuration, and then importing the data into the new database.

## Migration Process

Follow these steps carefully to migrate your data:

1. **Export Data**
    - Command: `/minelogin internalMigration export`
    - Execute this command in the proxy server console.
    - This will start the process of exporting all user data to a temporary file.

2. **Wait for Export Completion**
    - Monitor the console for progress updates.
    - Ensure that all users have been successfully exported before proceeding.

3. **Change Database Configuration**
    - Open the mineLogin configuration file.
    - Update the database settings to reflect your new database type and connection details.
    - Save the configuration file.

4. **Restart the Server**
    - Restart your proxy server to apply the new database configuration.

5. **Import Data**
    - Command: `/minelogin internalMigration import`
    - Execute this command in the proxy server console after restart.
    - This will begin the process of importing user data from the temporary file into the new database.

6. **Wait for Import Completion**
    - Monitor the console for progress updates.
    - Do not allow new users to join the server until the import process is fully complete.

## Important Considerations

- **Backup**: Always create a full backup of your current database before starting the migration process.
- **Downtime**: Plan for server downtime during the migration process. Inform your players in advance.
- **Testing**: If possible, test the migration process on a staging server before performing it on your live server.
- **Version Compatibility**: Ensure that your new database system is compatible with your current version of mineLogin.

## Best Practices

1. **Timing**: Choose a low-traffic time for migration to minimize disruption.
2. **Verification**: After migration, verify that a sample of user accounts works correctly.
3. **Rollback Plan**: Have a plan to revert to the old database if issues arise.
4. **Player Communication**: Keep your players informed about the maintenance and any potential changes they might experience.

## Troubleshooting

- If the export or import process fails, check the server logs for detailed error messages.
- Ensure that the new database is properly set up and accessible from your server.
- If you encounter issues, you may need to manually review and transfer problematic data entries.

## Post-Migration Steps

1. **Performance Check**: Monitor the performance of your server with the new database to ensure it's functioning optimally.
2. **Clean-up**: Once you've confirmed that the migration was successful, safely remove the old database and any temporary files created during the migration.
3. **Documentation**: Update your server documentation to reflect the new database configuration.

By following these steps and best practices, you can successfully migrate your mineLogin data between different database types while minimizing risks and downtime.

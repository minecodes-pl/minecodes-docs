# Database Configuration

The database section in the `configuration.yml` file allows you to configure the connection to your database. This is a crucial part of the mineLogin plugin setup, as it determines where and how player data will be stored. Let's break down each option in detail:

```yaml
database:
  data-type: H2
  hostname: localhost
  port: 3306
  username: root
  password: securepass
  base: mineLogin
  mongo-db-connection-string: mongodb://localhost:27017
  ssl-use: false
  max-life-time: 1800000
  max-pool-size: 20
  show-mysql-errors: true
  connection-timeout: 3000
```

## Options Explained

1. `data-type`:
    - This determines the type of database you're using.
    - Options: MYSQL, H2, MONGODB
    - H2 is a lightweight, embedded database suitable for small servers or testing.
    - MySQL is recommended for larger servers or networks.
    - MongoDB is a NoSQL option for those preferring document-based storage.

2. `hostname`:
    - The address of your database server.
    - Use "localhost" if the database is on the same machine as your Minecraft server.
    - For remote databases, use the IP address or domain name.

3. `port`:
    - The port your database server is running on.
    - Default ports: MySQL (3306), MongoDB (27017)
    - H2 doesn't typically use a port as it's an embedded database.

4. `username` and `password`:
    - Credentials for accessing the database.
    - Ensure these are secure and match the credentials set up on your database server.

5. `base`:
    - The name of the database where mineLogin tables will be created.
    - You should create this database before starting the plugin.

6. `mongo-db-connection-string`:
    - Only used if `data-type` is set to MONGODB.
    - Provides a connection string for MongoDB, which includes all necessary connection details.

7. `ssl-use`:
    - Set to true if your database connection uses SSL encryption.
    - Recommended for added security, especially with remote databases.

8. `max-life-time`:
    - Maximum lifetime of a connection in the pool, in milliseconds.
    - Helps manage database resources by cycling connections.

9. `max-pool-size`:
    - Maximum number of connections that can be created in the connection pool.
    - Adjust based on your server's needs and database server capabilities.

10. `show-mysql-errors`:
    - If true, MySQL connection errors will be displayed in the console.
    - Useful for debugging, but can be set to false in production for security.

11. `connection-timeout`:
    - Time in milliseconds that the plugin will wait when trying to establish a database connection.

## Setting Up Your Database

1. For MySQL:
    - Create a new database on your MySQL server.
    - Create a user with permissions to access this database.
    - Use these details in the configuration.

2. For H2:
    - No additional setup is needed. The database file will be created automatically.

3. For MongoDB:
    - Install MongoDB if not already done.
    - Create a new database.
    - If using authentication, create a user with appropriate permissions.

## Best Practices

1. Use strong, unique passwords for database access.
2. Regularly backup your database.
3. If using a remote database, ensure the connection is secure (use SSL).
4. Monitor your database performance and adjust `max-pool-size` as needed.

By correctly configuring your database connection, you ensure that mineLogin can efficiently store and retrieve player data, which is crucial for the plugin's authentication and account management features.

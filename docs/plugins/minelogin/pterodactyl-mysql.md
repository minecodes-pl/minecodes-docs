# Pterodactyl Database Connection

When configuring mineLogin to work with a MySQL database in a Pterodactyl-managed server environment, it's crucial to understand the network setup within Docker containers. This section will guide you through the correct configuration, with a focus on using the internal Docker host.

## Key Configuration

In your mineLogin configuration file, the database section should look similar to this:

```yaml
database:
  data-type: MYSQL
  hostname: 172.18.0.1
  port: 3306
  username: your_mysql_username
  password: your_mysql_password
  base: mineLogin
```

## Important Note on Hostname

The most critical part of this configuration is the `hostname` setting:

```yaml
hostname: 172.18.0.1
```

This IP address (172.18.0.1) is typically the internal Docker host IP. Here's why this is important:

1. **Docker Networking**:
    - Pterodactyl uses Docker to containerize game servers.
    - Each container has its own isolated network environment.

2. **Host Machine Access**:
    - The IP 172.18.0.1 often represents the Docker host machine from within a container.
    - This allows the container to communicate with services running on the host, like MySQL.

3. **Security**:
    - Using this internal IP instead of 'localhost' or a public IP adds a layer of security.
    - It prevents the need to expose your MySQL server to the public internet.

4. **Consistency**:
    - This IP remains consistent across different Docker containers on the same host.
    - It provides a reliable way for all containers to access host services.

## Why Not Use 'localhost' or '127.0.0.1'?

- In a Docker environment, 'localhost' and '127.0.0.1' refer to the container itself, not the host machine.
- Using these would make mineLogin look for a MySQL server within its own container, which doesn't exist.

## Verifying the Correct IP

The exact IP can sometimes vary depending on your Docker network configuration. To verify:

1. Access your Pterodactyl console for the Minecraft server.
2. Run the command: `ip route | grep default`
3. The IP after "via" is typically your Docker host IP.

## Additional Configuration Steps

1. **MySQL Configuration**:
    - Ensure your MySQL server on the host machine is configured to accept connections from Docker containers.
    - You may need to bind MySQL to 0.0.0.0 instead of 127.0.0.1 in your MySQL configuration.

2. **Firewall Settings**:
    - If you're using a firewall on the host machine, ensure it allows connections from the Docker network to MySQL.

3. **User Privileges**:
    - Create a MySQL user with appropriate privileges for the mineLogin database.
    - Ensure this user can connect from the Docker network (% wildcard or specific Docker network range).

## Example MySQL User Creation

```sql
CREATE USER 'minelogin'@'172.18.0.%' IDENTIFIED BY 'securepassword';
GRANT ALL PRIVILEGES ON mineLogin.* TO 'minelogin'@'172.18.0.%';
FLUSH PRIVILEGES;
```

This creates a user that can connect from any IP in the 172.18.0.x range, which is typically the Docker network.

## Troubleshooting

If you're having connection issues:
1. Verify the Docker host IP using the method described above.
2. Check MySQL logs for connection attempts and any error messages.
3. Ensure the MySQL server is running and bound to the correct interface.
4. Verify that the database name, username, and password are correct in your mineLogin configuration.

By correctly configuring your database connection using the internal Docker host IP, you ensure a secure and efficient setup for mineLogin in a Pterodactyl-managed environment.

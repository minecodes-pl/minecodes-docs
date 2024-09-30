# Redis Setup for Communication

Redis is a powerful in-memory data structure store that can be used as a database, cache, and message broker. mineLogin can utilize Redis for efficient inter-server communication. This section will guide you through setting up Redis for use with mineLogin.

There are two main options for setting up Redis:

1. Redis Cloud (Free Tier)
2. Self-hosted Redis using Docker Compose

## Option 1: Redis Cloud

Redis Cloud offers a free tier with up to 512MB of memory, which is suitable for many small to medium-sized Minecraft server networks.

### Steps to set up Redis Cloud:

1. Go to the Redis Cloud website (https://redis.com/try-free/).
2. Sign up for a free account.
3. Create a new database:
    - Choose the free tier (512MB).
    - Select a cloud provider and region closest to your Minecraft servers.
    - Set a name for your database.
4. Once created, you'll receive connection details including:
    - Endpoint (hostname)
    - Port
    - Password

### Configuring mineLogin with Redis Cloud:

In your mineLogin configuration file, update the communication section:

```yaml
communication:
  type: REDIS
  host: your-redis-cloud-endpoint.com
  port: your-redis-cloud-port
  username: default
  password: your-redis-cloud-password
```

## Option 2: Self-hosted Redis using Docker Compose

For those who prefer to host Redis themselves or need more control over their setup, using Docker Compose is an excellent option.

### Prerequisites:

1. Install Docker and Docker Compose:
    - For installation instructions, visit: https://docs.docker.com/get-docker/
    - Docker Compose installation: https://docs.docker.com/compose/install/

### Steps to set up Redis with Docker Compose:

1. Create a new file named `docker-compose.yml` in your desired directory.
2. Add the following content to the file:

```yaml
version: '3'
services:
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes --requirepass your_strong_password

volumes:
  redis_data:
```

3. Replace `your_strong_password` with a secure password of your choice.
4. Open a terminal in the directory containing your `docker-compose.yml` file.
5. Run the following command to start Redis:

```
docker-compose up -d
```

This will start Redis in detached mode, running in the background.

### Configuring mineLogin with self-hosted Redis:

Update your mineLogin configuration file:

```yaml
communication:
  type: REDIS
  host: localhost  # Use the Docker host IP if Redis is on a different machine
  port: 6379
  username: null
  password: your_strong_password
```

## Security Considerations

1. **Password Protection**: Always use a strong password for your Redis instance.
2. **Network Security**: If using self-hosted Redis, ensure it's not exposed to the public internet. Use firewalls and security groups to restrict access.
3. **Regular Updates**: Keep your Redis installation up-to-date to benefit from the latest security patches.

## Monitoring and Maintenance

1. **Memory Usage**: Monitor Redis memory usage, especially if using the free tier of Redis Cloud.
2. **Performance**: Monitor Redis performance and adjust settings as needed for optimal communication between your Minecraft servers.

By properly setting up and configuring Redis, you can ensure efficient and reliable communication for your mineLogin-enabled Minecraft server network.

# Password Security Configuration

The password security section in mineLogin allows server administrators to configure various aspects of password handling and security. These settings are crucial for protecting user accounts and maintaining the overall security of your server.

Here's the relevant section from the configuration file:

```yaml
passwords-security:
  hash-type: BCRYPT
  delete-password-after-change-account-type: true
  salt-for-passwords: false
  password-restrictions:
    minimum-password-length: 6
    maximum-password-length: 16
    regex: ^[a-zA-Z0-9!%&#@*]*
  disallowed-passwords:
  - password
  - password123
  - haslo123
  - haslo1
  - dick123
  - pussy1
  - pussy123
```

## Options Explained

1. Hashing Algorithm
   ```yaml
   hash-type: BCRYPT
   ```
    - Purpose: Specifies the algorithm used for hashing passwords.
    - Options: BCRYPT, SHA512, SHA256, MD5
    - Recommendation: BCRYPT is the most secure option among these.

2. Password Deletion on Account Type Change
   ```yaml
   delete-password-after-change-account-type: true
   ```
    - Purpose: Determines whether to delete the password from the database when a player changes their account type (e.g., from cracked to premium).
    - Values: `true` or `false`
    - Security Implication: Enhances security by removing potentially unnecessary stored passwords.

3. Password Salting
   ```yaml
   salt-for-passwords: false
   ```
    - Purpose: Enables or disables the use of salt in password hashing.
    - Values: `true` or `false`
    - Note: Modern hashing algorithms like BCRYPT include salting by default, so this may be redundant if using BCRYPT.

4. Password Restrictions
   ```yaml
   password-restrictions:
     minimum-password-length: 6
     maximum-password-length: 16
     regex: ^[a-zA-Z0-9!%&#@*]*
   ```
    - `minimum-password-length`: Sets the minimum number of characters required for passwords.
    - `maximum-password-length`: Sets the maximum number of characters allowed for passwords.
    - `regex`: Defines a regular expression pattern that passwords must match.

5. Disallowed Passwords
   ```yaml
   disallowed-passwords:
   - password
   - password123
   - haslo123
   - haslo1
   - dick123
   - pussy1
   - pussy123
   ```
    - Purpose: Lists specific passwords that are not allowed to be used.
    - Format: A list of strings representing banned passwords.

## Best Practices

1. **Hashing Algorithm**
    - Use BCRYPT as it's designed for password hashing and includes built-in salting.
    - Avoid MD5 as it's considered cryptographically broken.

2. **Password Deletion**
    - Keep `delete-password-after-change-account-type` enabled for enhanced security.

3. **Password Restrictions**
    - Set a reasonable minimum length (8-12 characters is common).
    - Don't set the maximum length too low; longer passwords can be more secure.
    - Use a regex that enforces a mix of characters (e.g., requiring uppercase, lowercase, numbers, and symbols).

4. **Disallowed Passwords**
    - Regularly update the list of disallowed passwords.
    - Include common weak passwords, keyboard patterns, and terms related to your server.

## Implementation Tips

1. **Educate Users**
    - Provide guidelines for creating strong passwords.
    - Explain the importance of unique passwords for each service.

2. **Password Strength Meter**
    - Consider implementing a visual password strength meter during registration.

3. **Regular Security Audits**
    - Periodically review and update your password security settings.

4. **Two-Factor Authentication**
    - Encourage or require 2FA for an additional layer of security.

5. **Handling Existing Passwords**
    - If changing hashing algorithms, implement a system to rehash passwords upon next login.

## Example Enhanced Configuration

```yaml
passwords-security:
  hash-type: BCRYPT
  delete-password-after-change-account-type: true
  salt-for-passwords: false
  password-restrictions:
    minimum-password-length: 10
    maximum-password-length: 64
    regex: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,64}$
  disallowed-passwords:
  - password
  - 123456789
  - qwerty123
  - minecraft
  - yourservername
  - admin1234
```

This configuration:
- Uses BCRYPT for secure hashing.
- Requires passwords to be 10-64 characters long.
- Enforces the use of uppercase, lowercase, numbers, and special characters.
- Includes server-specific terms in the disallowed passwords list.

Remember to restart your server or reload the plugin after making changes to these settings. Always test new security configurations thoroughly before applying them to a live server.

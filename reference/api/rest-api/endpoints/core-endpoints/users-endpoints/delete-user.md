---
description: Deletes an existing user.
---

# Delete User

Requires `delete-user` permission.

| URL                    | Requires Auth | HTTP Method |
| ---------------------- | ------------- | ----------- |
| `/api/v1/users.delete` | `yes`         | `POST`      |

## Payload

| Argument               | Example             | Required                  | Description                                          |
| ---------------------- | ------------------- | ------------------------- | ---------------------------------------------------- |
| `userId` or `username` | `BsNr28znDkG8aeo7W` | Required                  | The id or username of the user.                      |
| `confirmRelinquish`    | `true`              | Optional Default: `false` | Deletes user even if it is the last owner of a room. |

## Example Call - Via userId

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.delete \
     -d '{ "userId": "BsNr28znDkG8aeo7W" }'
```

## Example Result

```javascript
{
  "success": true
}
```

## Example Call - Via username

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type:application/json" \
     http://localhost:3000/api/v1/users.delete \
     -d '{ "username": "test" }'
```

## Example Result

```javascript
{
  "success": true
}
```

## Change Log

| Version | Description                               |
| ------- | ----------------------------------------- |
| 3.7.0   | Added `confirmRelinquish` to the payload. |
| 0.35.0  | Added                                     |

# Channel Add Moderator

Gives the role of moderator for a user in the current channel.

| URL                             | Requires Auth | HTTP Method |
| ------------------------------- | ------------- | ----------- |
| `/api/v1/channels.addModerator` | `yes`         | `POST`      |

## Payload

| Argument | Example             | Required | Description      |
| -------- | ------------------- | -------- | ---------------- |
| `roomId` | `ByehQjC44FwMeiLbX` | Required | The channel's id |
| `userId` | `nSYqWzZ4GsKTX4dyK` | Required | The user id      |

## Example Call

```bash
curl -H "X-Auth-Token: 9HqLlyZOugoStsXCUfD_0YdwnNnunAJF8V47U3QHXSq" \
     -H "X-User-Id: aobEdbYhXfu5hkeqG" \
     -H "Content-type: application/json" \
     https://localhost:3000/api/v1/channels.addModerator \
     -d '{ "roomId": "ByehQjC44FwMeiLbX", "userId": "nSYqWzZ4GsKTX4dyK" }'
```

## Example Result

```javascript
{
   "success": true
}
```

## Bad Request Example Result

If the user is already a moderator, it will return a `400 bad request` status.

```javascript
{
    "success": false,
    "error": "User is already a moderator [error-user-already-moderator]",
    "errorType": "error-user-already-moderator"
}
```

## Change Log

| Version | Description |
| ------- | ----------- |
| 0.49.4  | Added       |

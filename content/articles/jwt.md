---
title: JSON Web Tokens
date: "2021-05-06"
---

**JWT** is a industry standard method for authorizing. These tokens are basically cryted text which can be decoded. A token has signature that is unique to where its created. **Jsonwebtoken** is an npm package that is used to sign and verify tokens.

## Signing(creating) a Token

Signing a token requires a private key. that key also used for verification so its important. we can also give tokens a payload(js object basically).

Synchronous sign.

```javascript
var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, secretKey);
```

Sign asynchronously.

```javascript
jwt.sign({ foo: "bar" }, privateKey, function (err, token) {
  console.log(token);
});
```

We can also add an expiration date to both of them.

```javascript
jwt.sign(
  {
    data: "foobar",
  },
  secretKey,
  { expiresIn: "1h" }
);
```

## Verifying a Token

We can verify a token with our private key. And also decode it to acces its payload.

Verify synchronous.

```javascript
var decoded = jwt.verify(token, secretKey);
console.log(decoded.foo); // bar
```

Verify asynchronous.

```javascript
jwt.verify(token, secretKey, function (err, decoded) {
  console.log(decoded.foo); // bar
});
```

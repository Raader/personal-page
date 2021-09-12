---
title: Hashing Passwords With Bcrypt
date: "2021-05-06"
---

A library to hash(crypt) text. Mostly passwords thou.

## Hashing a Password

Bcrypt hashes passwords based on salting.

```javascript
const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
```

Hashing a password async with promises.

```javascript
bcrypt.hash(myPlaintextPassword, saltRounds).then(function (hash) {
  // Store hash in your password DB.
});
```

Can also be done with callbacks instead.

```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  // Store hash in your password DB.
});
```

## Comparing a Password

comparing a password async

```javascript
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  // result == true
});
```

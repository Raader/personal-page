---
title: MongoDB & Mongoose
date: "2021-05-06"
---

**MongoDB** is a noSQL, general purpose database. **Mongoose** is a framework that makes it easier to use MongoDB with node.

## Connection

We can connect to our database easily with mongoose.

```javascript
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

We can also get notified when we connect successfully.

```javascript
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
});
```

## Creating and Saving Documents

In MongoDB values are stored in documents inside <u>clusters</u>. Mongoose lets us create **schemas** and **models** to create **documents**.

First thing we should do is to create a **schema**.

```javascript
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  birthday: { type: Date, default: Date.now },
});
```

A schema is like a blueprint for our models. Next step is to compile our **schema** into a **model**. Then we can create a **document**.

```javascript
const Kitten = mongoose.model("Kitten", kittySchema);
const silence = new Kitten({ name: "Silence" });
```

We used the **model** to construct a **document**. We can simply just call the **documents** save method to save a **document**.

```javascript
silence.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log("document saved!");
});
```

## Finding and Editing Documents

Finding and editing documents are easy thanks to mongoose.

### Finding documents

There are various ways to find documents in mongoose. Here are the ones that i use most.

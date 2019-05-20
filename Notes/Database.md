# Database

* A database is a collection of information/data, which has an interface.
* SQL (Relational Databases): Use IDs to relate different tables.
* NoSQL (Non-relational Databases): No tables. Not a flat database. Flexible structure.


### MongoDB
* A member of MEAN stack: MongoDB, Express, Angular, Node

* Installation: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
```bash
# Install
brew tap mongodb/brew
brew install mongodb-community@4.0
brew services start mongodb-community@4.0

# Run MongoDB
mongod --config /usr/local/etc/mongod.conf
# or
mongod

# Connect and Use MongoDB in Mongo shell
mongo
```

#### Mongo shell basics (CRUD)
* `help`
* `show dbs`
* `use db_name`
    - Use the database if it exists, unless create one and use it.
* insert
    - `db.dogs.insert({name: "Kelly", breed: "Mix"})` <- Insert an object to the dog collection
    - `show collections`
* find
    - `db.dogs.find()`
    - `db.dogs.find("unique ID")`
    - `db.dogs.find({name: "Ruby"})`
* update
    - `db.dogs.update({name: "Kelly"}, {$set: {name: "Taylor", isCute: true}})`
    - use $set to prevent overwrite the original object
* remove
    - `db.dogs.remove({breed: "Bombay"})`
    - `db.dogs.remove({breed: "Bombay"}).limit(1)`

#### Mondogoose
* A tool helps to interact with MongoDB in JavaScript file. A JS layer on the top of MongoDB.
* An ODM (Object Data Mapper)
* Install `npm install mongoose`
* Connect to MongoDB
```
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true})
```

* Define schema
```
car catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// ~ db.collection
var Cat = mongoose.model("Cat", catSchema); 
```

* add new obj to db
```
var aCat = new Cat({
    name: "George",
    age: 2,
    temperament: "Good"
});

aCat.save(function(err, cat) {
    if(err) {
        console.log("Something went wrong!");
    }else {
        console.log("Saved: "+cat);
    }
});
```

* create = new + save
```
Cat.create({
    name: "Harry",
    age: 5,
    temperament: "Mild"
}, function(err, cat) {
    if(err) {
        console.log("Something went wrong!");
    }else {
        console.log("Saved: "+cat);
    }
});

```

* fetch all objects
```
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error: "+err);
    }else {
        console.log("Found"+cats);
    }
});
```

var faker = require("faker");

console.log("===============================");
console.log("     WELCOME TO MY SHOP!");
console.log("===============================");
var names = [];
for(var i=0; i<10; i++) {
    names[i] = faker.name.findName();
}
names.forEach(function(name) {
    console.log(name + " - $" + faker.commerce.price());
});

console.log();
names.forEach(function(name, i) {
    console.log(i+1 + ". " + faker.address.state() + ", " +
                faker.address.country() + ", " +
                faker.address.city() + ", " +
                faker.address.streetName() + " " + faker.address.streetSuffix() + ", " +
                faker.address.zipCode());
});
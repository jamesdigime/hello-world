// Person class
// who what and why etc
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.firstName = name;
    }
    return Person;
})();

function greeter(person) {
    return "Hello, " + person.firstName;
}

// define a new Peson instance
var user = new Person("Jane User");

document.body.innerHTML = greeter(user);

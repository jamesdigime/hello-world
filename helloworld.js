// Person class
// who what and why etc
var Person = (function () {
    function Person(name) {
        this.name = name;
        this.firstName = name;
    }
    return Person;
}());
function greeter(person) {
    var greeting = "<h1>Hello, " + person.firstName + "</h1>";
    var timestamp = "This was called on " + getTimestamp();
    return greeting + "<br>" + timestamp;
}
function getTimestamp() {
    return "" + new Date().getTime();
}
// define a new Peson instance
var user = new Person("Jane User");
document.body.innerHTML = greeter(user);
var button = document.createElement("button");
button.textContent = "Say something!";
button.onclick = function () {
    alert("something!");
};
document.body.appendChild(button);

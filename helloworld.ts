// Person class
// who what and why etc
class Person
{
    // define var to hold the users first name
    firstName:String;
    constructor(public name:String)
    {
        this.firstName = name;
    }
}

function greeter(person:Person)
{
    return "Hello, " + person.firstName;
}

// define a new Peson instance
var user = new Person("Helium user");

document.body.innerHTML = greeter(user);
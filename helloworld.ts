class Person
{
    fname:String;
    constructor(public name:String)
    {
        this.fname = name;
    }
}

function greeter(person:Person)
{
    return "Hello, " + person.fname;
}

var user = new Person("Jane User");

document.body.innerHTML = greeter(user);
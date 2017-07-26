
interface person{
    firstName:string;
    lastName:string;
};
function greeter(person: person) {
    return "Hello, " + person
}

var user = "Jane User";

document.body.innerHTML = greeter(user);
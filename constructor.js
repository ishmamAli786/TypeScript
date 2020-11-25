//// Constructor is built in method
/// it is automacitlly called when we create the instance of the class
/// In TypeScript We Can Create Only One Constructor
var Teacher = /** @class */ (function () {
    ///The This Keywoerd refers to the current instance of the classs.
    /// Here, the parameters name and the name of class's field
    /// are the same. Hence To Provide ambiguity, the class' field 
    /// is prefixed with the this keyword.
    function Teacher(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Teacher.prototype.getFirstName = function () {
        console.log("My First Name Is:" + this.firstname + " My Last Name Is: " + this.lastname + " My Age Is: " + this.age);
    };
    Teacher.prototype.getLastName = function () {
    };
    return Teacher;
}());
var obj1 = new Teacher("Ishmam", "ali", 23);
// obj1.firstname = "Ishmam";
// obj1.lastname = "ali";
// obj1.age = 23;
obj1.getFirstName();

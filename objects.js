/// Create Instance Object
/// To Create an instance of the class, use the new keyword
/// followed by tha classname 
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getFirstName = function () {
        console.log("My First Name Is:" + this.firstname);
    };
    Student.prototype.getLastName = function () {
    };
    return Student;
}());
var obj = new Student();
obj.firstname = "Ishmam";
obj.getFirstName();

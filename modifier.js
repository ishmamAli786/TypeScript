var Teachers = /** @class */ (function () {
    function Teachers(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Teachers.prototype.getFirstName = function () {
        console.log("My First Name Is:" + this.firstname + " My Last Name Is: " + this.lastname + " My Age Is: " + this.age);
    };
    Teachers.prototype.getLastName = function () {
    };
    return Teachers;
}());
var obj = new Teachers("Ishmam", "ali", 23);
obj.getFirstName();

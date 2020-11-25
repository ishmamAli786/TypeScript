//// TypeScript is object Oriented Javascript
//// A Class In term of OOP is a BluePrint for Creating objects.
/// A Class encapsulate data for the object
/// creating classes
/// use the class keyword to declare a class in TypeScript 
///// Encapsulation is the process of combining data and function into a single unit is called encapsulation
//// A Fields is any variable declared in class
/// fields represent data related to objects
// cohesive
var Students = /** @class */ (function () {
    function Students() {
    }
    Students.prototype.getFirstName = function () {
    };
    Students.prototype.getLastName = function () {
    };
    return Students;
}());

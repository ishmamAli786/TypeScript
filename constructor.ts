//// Constructor is built in method
/// it is automacitlly called when we create the instance of the class
/// In TypeScript We Can Create Only One Constructor

class Teacher {
    firstname: string;
    lastname: string;
    age: number;


    ///The This Keywoerd refers to the current instance of the classs.
    /// Here, the parameters name and the name of class's field
    /// are the same. Hence To Provide ambiguity, the class' field 
    /// is prefixed with the this keyword.
    constructor(firstname?: string, lastname?: string, age?: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getFirstName() {
        console.log("My First Name Is:" + this.firstname + " My Last Name Is: " + this.lastname + " My Age Is: " + this.age);
    }
    getLastName() {

    }
}


let obj1 = new Teacher("Ishmam", "ali", 23)
// obj1.firstname = "Ishmam";
// obj1.lastname = "ali";
// obj1.age = 23;
obj1.getFirstName();
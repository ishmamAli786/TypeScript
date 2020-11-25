/// Create Instance Object
/// To Create an instance of the class, use the new keyword
/// followed by tha classname 


class Student {
    firstname: string;
    lastname: string;
    age: number;

    getFirstName() {
        console.log("My First Name Is:"+this.firstname);
    }
    getLastName() {

    }
}


let obj=new Student()
obj.firstname="Ishmam";
obj.getFirstName();
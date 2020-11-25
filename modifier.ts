class Teachers {
    constructor(private firstname: string, private lastname: string, private age: number) {
    }
    getFirstName() {
        console.log("My First Name Is:" + this.firstname + " My Last Name Is: " + this.lastname + " My Age Is: " + this.age);
    }
    getLastName() {

    }
}


let obj = new Teachers("Ishmam", "ali", 23);
obj.getFirstName();
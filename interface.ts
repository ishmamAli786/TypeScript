interface Namepro{
     firstname: string,
      lastname: string ,
      age:number,
      address:string
}

let namets = (namepro: Namepro)=>{
    console.log(namepro);
}
namets({firstname:"ishmam",lastname:"ali",age:23,address:"kamalia"});
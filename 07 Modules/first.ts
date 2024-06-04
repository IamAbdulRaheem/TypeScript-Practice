// Exporting a default export 

const a= 5;
export default a;

// Another Example of exporting a function

export const add= (a:number,b:number)=>{
    return a+b;
}

// Exporting a class

export class person{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    greet():string{
        return `Hello ${this.name}`
    }
}



// Exporting interface with default
export default interface student{
    name:string;
    age:number;
    details():string;
}

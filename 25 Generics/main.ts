                /*******************
                    * GENERICS * 
                 *******************/



//In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is 'generics', that is,
//being able to create a component that can work over a variety of types rather than a single one. 
//This allows users to consume these components and use their own types.


class container<T>{
    array:T[];
    constructor(){
        this.array=[]
    }
    add(item:T){
        this.array.push(item);
    }
}

let c= new container<string>();
c.add("Abdul Raheem!");
console.log(c);




// Generics Constraints

//You may sometimes want to write a generic that works only on a set of types where you have some knowledge about the capabilities

class myObj{
    name:string=" "
}

class Container<T extends myObj>{
    array:T[];
    constructor(){
        this.array=[];
    }
    add(item:T){
        this.array.push(item);
        console.log(item.name)
    }
    print(){
        this.array.forEach(value => {
            console.log(value.name)
        });
    }
}

// let con= new Container<string>()
// let con1= new Container<number>()

class myObj2 extends myObj{
    doSomething(){
        console.log(`${this.name} did it!`)
    }
}

let obj = new myObj2();
obj.name = "Abdul Raheem!";

let cont = new Container<myObj2>();
cont.add(obj);
cont.print();
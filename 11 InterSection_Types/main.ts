            /*************************
                * INTERSECTION TYPES * 
             *************************/


// Type InterSection: Intersection types allow you to combine multiple type into one. So intersection type have property of all the variable it intersects


// Example
interface student{
    studentId:number;
    studentName:string;
}
interface teachers{
    teacherId:number;
    teacherName:string;
}
let intersectionTypes: student & teachers={  // we can directly use this method
    studentId:0,
    studentName:"Abdul Raheem",
    teacherId:1,
    teacherName:"Zia Khan"
}
console.log(intersectionTypes.studentName);
console.log(intersectionTypes.teacherName);


// or we can also use this method
type intersection_Types= student & teachers;
let obj1:intersection_Types={
    studentName:"Abdul Raheem",
    studentId: 2,
    teacherName: "Zia Khan",
    teacherId: 3,
}
console.log(obj1.studentId);
console.log(obj1.teacherId);


"use strict";
/*************************
    * INTERSECTION TYPES *
 *************************/
Object.defineProperty(exports, "__esModule", { value: true });
let intersectionTypes = {
    studentId: 0,
    studentName: "Abdul Raheem",
    teacherId: 1,
    teacherName: "Zia Khan"
};
console.log(intersectionTypes.studentName);
console.log(intersectionTypes.teacherName);
let obj1 = {
    studentName: "Abdul Raheem",
    studentId: 2,
    teacherName: "Zia Khan",
    teacherId: 3,
};
console.log(obj1.studentId);
console.log(obj1.teacherId);

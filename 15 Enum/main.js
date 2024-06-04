"use strict";
/****************
    * ENUMS *
 ****************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
let color = Color[2];
console.log(color); // output: Green
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Blue"] = 2] = "Blue";
    Color1[Color1["Green"] = 3] = "Green";
})(Color1 || (Color1 = {}));
let color1 = Color1.Green;
console.log(color1);
var ColorIndex;
(function (ColorIndex) {
    ColorIndex[ColorIndex["Red"] = 1] = "Red";
    ColorIndex[ColorIndex["Blue"] = 2] = "Blue";
    ColorIndex[ColorIndex["Green"] = 4] = "Green";
})(ColorIndex || (ColorIndex = {}));
let colorIndex = ColorIndex["Blue"];
console.log(colorIndex);
let days = 4 /* Days.Firday */;
console.log(4 /* Days["Firday"] */); // Friday

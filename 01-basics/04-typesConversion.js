/* 1. приклади конвертації зі строкою */
let a = {};
a + ""; //[object object]
JSON.stringify(a); // поверне обєкт в строку'{}'

const b = [1, 2, 3, 4, 5] + ""; //"1,2,3,4,5"
const c = 112 + "abc"; //"112abc"
const d = undefined + "133"; // "undefined133"
const e = true + "test"; //"truetest"
const f = String(null); //"null"

/* числові конвертації */
1 + +"123"; // 124
1 + +"123a"; //NaN
1 + +"12 3"; //NaN
+""; //0
("0"); //0
!!" "; //true
!!""; //false

null >= 0; //true
null <= 0; //true
parseFloat("1.223dfkkdkfj"); //1.223
parseInt("1.223dfkkdkfj"); //1

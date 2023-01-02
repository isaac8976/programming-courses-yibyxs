//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1 = number;
let num2 = number;
let num3 = number;

num1 = parseInt(prompt('اكتب العدد الاول'));
num2 = parseInt(prompt('اكتب العدد الثاني'));
num3 = num1 - num2;

if (num3 > 0) {
  num3 = num2 - num1;
} else {
  num3 = num1 - num2;
}
console.log(num3);

let number = 266219;
let arrayNumber = ("" + number).split("").map(Number);
let sum = 1;
for (let i = 0; i < arrayNumber.length; i++) {
    sum *= arrayNumber[i];
}
sum = sum ** 3;
let arraySum = ("" + sum).split("").map(Number);
console.log(arraySum[0] + '' + arraySum[1]); 
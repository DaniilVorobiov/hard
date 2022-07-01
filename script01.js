let arr = ['101', '20', '3', '50','25', '3000', '584'];
console.log(arr.filter(num => ['2','4'].includes(num.toString()[0])));


let n = 100;

nextPrime:
for (let i = 0; i <= 6; i++) { // Для всех i...

  for (let j = 2; j < arr[i]; j++) { // проверить, делится ли число..
    if (arr[i] % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log( arr[i],"Делители этого числа: 1 и " + arr[i] ); // простое число
}


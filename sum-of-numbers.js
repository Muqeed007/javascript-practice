//  function sumOfNumbers(numbers){
//      let sum = 0;
//      console.log(number);
//      for(const number of numbers){
//          console.log(number);
//          sum = sum + number;
//      }
//      return sum;
//  }

//  // const number = [1,2,3,4];
//  // const sum = sumOfNumbers(number);
//  // console.log('sum of numbers:',sum);
//  const number = [10,20,30,40,50,60];
//  const sum = sumOfNumbers(number);
//  console.log('Sum of numbers =',sum);

function sumOfEvens(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const number = [1,2,3,4,5,6,7,8,9];
const sum = sumOfEvens(number)
console.log('Sum of Evens =', sum);
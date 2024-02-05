function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum,count);
    const average = sum / count;
    return average;
}
const numbers = [1,2,3,4,5,6];
const average = oddAverage(numbers);
console.log('Sum of Average =',average);
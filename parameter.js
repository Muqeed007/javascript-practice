function evenOdd(number){
    if(number % 2 === 0){
        console.log('This is EVEN number')
    }
    else{
        console.log('This is ODD number ')
    }
}
evenOdd(10);
evenOdd(20);

function addNumber(num1,num2){
    const total = num1 + num2;
    console.log('Sum of number:' , total);
}
//addNumber(10,20);

const fatherAge = 40;
const myAge = 10;
addNumber(fatherAge,myAge);

console.log('----------------');

const number = 31;
evenOdd(number);

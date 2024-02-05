// inch to feet conversion

function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = +feetNumber  +'ft'  +inchRemaining  +'inch';
    return result;
}
const muqeedHeight = inchToFeet(65);
console.log(muqeedHeight);
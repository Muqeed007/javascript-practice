// Answer 1
// function calculateMoney(numbers) {
//     if (numbers < 0) {
//         console.log("ERROR 404");
//     }
//     const ticketPrize = 120;
//     const totalTicketPrice = numbers * 120;
//     const guardCost = 500;
//     const totalStuffCost = 50 * 8;
//     const totalCost = guardCost + totalStuffCost;
//     const remainingMoney = totalTicketPrice - totalCost;
//     return remainingMoney;
// }
// const final = calculateMoney(10);
//  console.log("Remaining money =",final);

//  Answer 2
 function checkName(string){
     if (typeof string !== 'string'){
         return 'Invaid';
     }
     const lastLetter = string.charAt(string.length - 1).toLowerCase();
     const letters = ['a','e','i','o','u','w','y'];
     if(letters.includes(lastLetter)){
        return 'Good Name'
     }
     else {
         return 'Bad Name'
    }
 }
 const goodOrBad = checkName('dbfhgdhfgw');
 console.log(goodOrBad);

 function password(obj){
     if (!obj.name || !obj.birthYear || !obj.siteName){
         return 'Invalid';
        }
        if (obj.birthYear.toString().length !== 4){
            return 'Invalid';
        }
        let pass = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
        return pass;
    }  
    let obj = {
        name : "Ahmed Al Muqeed",
        birthYear : 2000,
        siteName : "harami",
    }
    const pass1 = password(obj);
    console.log(pass1);
    
    
    
function calculateMoney(numbers) {
    if (numbers < 0) {
        console.log("ERROR 404");
    } const ticketPrize = 120;
    const totalTicketPrice = numbers * 120;
    const guardCost = 500;
    const totalStuffCost = 50 * 8;
    const totalCost = guardCost + totalStuffCost;
    const remainingMoney = totalTicketPrice - totalCost;
    return remainingMoney;
}


function checkName(string) {
    if (typeof string !== 'string') {
        return 'Invaid';
    }
    const lastLetter = string.charAt(string.length - 1).toLowerCase();
    const letters = ['a', 'e', 'i', 'o', 'u', 'w', 'y'];
    if (letters.includes(lastLetter)) {
        return 'Good Name'
    }
    else {
        return 'Bad Name'
    }
}


function deleteInvalids(array) {

    const finalArray = [];

    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    for (let i = 0; i < array.length; i++) {
        const allElements = array[i];
        if (typeof allElements === 'number' && !isNaN(allElements)) {
            finalArray.push(allElements);
        }
    }
    return finalArray;
}


function password(obj) {
    if (!obj.name || !obj.birthYear || !obj.siteName) {
        return 'Invalid';
    }
    if (obj.birthYear.toString().length !== 4) {
        return 'Invalid';
    }
    let pass = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
    return pass;
}


function monthlySavings(array, number) {
    let totalEarn = 0;
    let earn = 0;
    for (const number of array) {
        earn = earn + number;
        if (typeof array.length >= 3000) {
            earn = earn - (earn * (20 / 100));
        }
        let savings = totalEarn - number;
        return savings;
    }
}

function calculateMoney(numbers) {
    if (numbers < 0) {
        console.log("ERROR 404");
    }
    const ticketPrize = 120;
    const totalTicketPrice = numbers * 120;
    const guardCost = 500;
    const totalStuffCost = 50 * 8;
    const totalCost = guardCost + totalStuffCost;
    const remainingMoney = totalTicketPrice - totalCost;
    return remainingMoney;
}
const final = calculateMoney(10);
console.log("Remaining money =",final);
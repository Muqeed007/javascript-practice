function monthlySavings(array, number) {
  let totalEarn = 0;
  let earn = 0;
  for (const number of array) {
      earn = earn + number;
      if (typeof array.length >= 3000) {
      earn = earn - (earn * (20/100));
    }
    let savings = totalEarn - number;
    return savings;
  }
}
const array = [1000, 2000, 3000];
const number = 5400;
const finalSaving = monthlySavings(array, number);
console.log("Total earn:", finalSaving);
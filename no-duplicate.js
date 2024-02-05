function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const pakukhor = ['muqeed','sagar','mony vai','saad','tamim','sagar','tamim','rafat vai','kawser vai','mony','muqeed'];
const uniqueArray = noDuplicate(pakukhor);
console.log(uniqueArray);
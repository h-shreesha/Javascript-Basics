// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["India", "Nepal", "Srilanka", "Pakistan", "Ethiopia"];
let count1 = "Ethiopia";
if((countries.includes(count1)) == true){
    // res = count1.toUpperCase();
    console.log(count1.toUpperCase());
}
else{countries.push("Ethiopia");}


// const array = [1, 2, 3];
// const value = 1;
// const isInArray = array.includes(value);
// console.log(array); // true
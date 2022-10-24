/*
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(
    "Min age is : " + ages[0] + " Max age is : " + ages[ages.length - 1]
);

// Find the median age(one middle item or two middle items divided by two)
console.log("Median age is : " + (ages[0] + ages[ages.length - 1])/2);

// Find the average age(all items divided by number of items)
let sum = 0;
for (const items of ages) {
    sum += items;
}
console.log('Avg age is : ' + sum/ages.length);

// Find the range of the ages(max minus min)
console.log("Range is : " + ((ages[ages.length - 1]) - (ages[0])));
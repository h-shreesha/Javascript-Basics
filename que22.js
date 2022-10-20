// 22. Write a program which tells the number of days in a month.

let mnth = prompt("Enter the month in number");

if(mnth == 1 || mnth == 3 || mnth == 5 || mnth == 7 || mnth == 8 || mnth == 10 || mnth ==  12){
    console.log('31 days');
}

else if(mnth == 4 || mnth == 6 || mnth == 9 || mnth == 11 ){
    console.log('30 days');
}

else if(mnth == 2){
    console.log('28 days');
}

else{console.log('Invalid');}
/*
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];


// add 'Meat' in the beginning of your shopping cart if it has not been already added
if ((shoppingCart.includes("Meat")) != true){
    shoppingCart.unshift("Meat");
    console.log(shoppingCart);
}

// add Sugar at the end of you shopping cart if it has not been already added

if (shoppingCart.includes("Sugar") != true) {
  shoppingCart.push("Sugar");
  console.log(shoppingCart);
}

// remove 'Honey' if you are allergic to honey

shoppingCart.splice(4, 1);
console.log(shoppingCart);

// modify Tea to 'Green Tea'

shoppingCart[3] = "Green tea";
console.log(shoppingCart);




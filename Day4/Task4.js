const cart = [
  { product: "Laptop", price: 50000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1500 }];
   const totalamount=cart.reduce((acc,item)=>{

    return acc+item.price

   },0)
  console.log(totalamount)



// Task 4: Calculate Total Cart Amount (reduce()) const cart = [ { product: "Laptop", price: 50000 },
// { product: "Mouse", price: 500 }, { product: "Keyboard", price: 1500 } ]; 
// Task: Calculate the total cart value.
//  Display the final amount. Interview Focus: reduce() 
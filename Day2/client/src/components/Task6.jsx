import { useState } from "react";

const Task6 = () => {
const [name,setName]=useState("");
const[price,setPrice]=useState("");
const[quantity,setQuantity]=useState("");
const[total,setTotal]=useState("");

 const checkdiscount =(e)=>{
    e.preventDefault();
     
    const totalAmount = Number(price) * Number(quantity);
    setTotal(totalAmount);

 }
  return (
    <>
    <form onSubmit={checkdiscount}>
       <input type="text" placeholder="Enter Name"   onChange={(e)=>setName(e.target.value)}/>
       <input type="number" placeholder="Enter your price"  onChange={(e)=>setPrice(e.target.value)}/>
       <input type="number" placeholder="Enter your quantity"  onChange={(e)=>setQuantity(e.target.value)}/>
       <button type="submit">submit</button>
    </form>
    <h3>productname:{name}</h3>
    <h3>productprice:{price}</h3>
    <h3>quantity need:{quantity}</h3>
    <h3>Total amount:{total}</h3>
          {total > 5000 && (
        <h3>🎉 Discount Eligible</h3>
      )}
    </>
  )
}

export default Task6
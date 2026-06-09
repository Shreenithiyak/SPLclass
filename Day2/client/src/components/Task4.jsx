import { useState } from "react"
const Task4 = () => {

const [name,setName]=useState("")  
const [salary,setSalary]=useState("") 
const [Bonus,setBonus]=useState(0)


const checkbonus=(e)=>{

  e.preventDefault();

    let bonusAmount;

    if(salary > 30000) {

      bonusAmount=5000;

    } else if(salary>20000) {

     bonusAmount=3000;

    } else {
   bonusAmount=1000;
    }
       setBonus(bonusAmount);
}
  return (
    <>
    
    <form onSubmit={checkbonus}>
        <input type="text" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Enter salary" onChange={(e)=>{setSalary(Number(e.target.value))}}/>
        <button type="submit">Check Bonus</button>
    </form>
      <h3>Name: {name}</h3>
      <h3>Bonus: ₹{Bonus}</h3>
      <h3>Final Salary: ₹{salary + Bonus}</h3>
    
    </>
  )
}

export default Task4
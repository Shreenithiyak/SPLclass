import { useState } from "react";
import Task1 from "./Task1";
import Task2 from "./Task2";


const Task3 = () => {
const[toggle,setToggle]=useState(false);

 const handleClick=()=>{
  setToggle(!toggle)
 }
  return (
    <>
    
    <div style={{backgroundColor:toggle?"blue":"white",
            color: toggle ? "black" : "white",
    }}>
    <h1>{toggle ? "Dark Mode" : "Light Mode"}</h1>
     <button onClick={handleClick}>click</button>
     <Task1/>
     <Task2/>
    </div>
    </>
  )
}

export default Task3
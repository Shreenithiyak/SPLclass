import { useState } from "react";

const Task5 = () => {
const [name,setName]=useState("");
const[mark,setMark]=useState("");
const [updated,setUpdated]=useState("");

const checkmark=(e)=>{
    e.preventDefault();

   let grade;

   if(mark >= 90) {

    grade= "Grade A";

   }else if(mark >= 75) {

    grade= "Grade B";

   }else if(mark >= 50){ 

    grade="Grade C";
   } else{
    grade="Fail";
   }
   setUpdated(grade);
}

  return (
    <>
    <form onSubmit={checkmark}>
    <input type="text" placeholder="ENTER NAME" onChange={(e)=>setName(e.target.value)}/>
    <input type="number" placeholder="ENTER NUMBER" onChange={(e)=>setMark(Number(e.target.value))}/>
    <button type="submit">Submit</button>
    </form>
    <h3>name:{name}</h3>
    <h3>mark:{mark}</h3>
    <h3>updated grade:{updated}</h3>
    
    
    </>
  )
}

export default Task5
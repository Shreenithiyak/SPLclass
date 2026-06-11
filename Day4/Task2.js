const userlist=[{ id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" }];

   const details=userlist.find((e)=>{
    return e.id===2
   })
   console.log(details)



// Task 2: Find a User by ID (find()) const users = [ { id: 1, name: "Sudhan" },
// { id: 2, name: "Kumar" }, { id: 3, name: "Ravi" } ]; 
// Task: Find the user whose id is 2. Display user details. Interview Focus: find()
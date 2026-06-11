import { useEffect, useRef, useState } from "react";

const Task5 = () => {
  const [search, setSearch] = useState("")
  const  previoussearch = useRef("")
  const[previousDisplay,setPreviousDisplay]= useState("")


useEffect(()=>{
    setPreviousDisplay(previoussearch.current)
      previoussearch.current=search;
},[search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input type="text"placeholder="Search"value={search}onChange={handleSearch}/>
      <h2>Current Search: {search}</h2>
      <h2>Previous Search: {previousDisplay}</h2>
    </div>
  );
};

export default Task5;
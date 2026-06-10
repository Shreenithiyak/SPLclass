import { useEffect, useRef, useState } from "react";

const Task5 = () => {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");
  const [previousDisplay, setPreviousDisplay] = useState("");

  useEffect(() => {
    setPreviousDisplay(previousSearch.current);
    previousSearch.current = search;
  }, [search]);

  const handleSearch = (e) => {
    previousSearch.current = search;
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
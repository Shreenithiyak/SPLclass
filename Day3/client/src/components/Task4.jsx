import axios from "axios";
import { useEffect, useState } from "react";

const Task4 = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=5");
        setProducts(response.data.products);
        setFilteredProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchproduct();
  }, []);

  const chkfilter = (e) => {
    const value = e.target.value;
    setSearch(value);
    const filterproduct = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredProduct(filterproduct);
  };

  return (
    <div>
      <h2>Product List</h2>

      <input type="text"placeholder="Search Product"value={search}onChange={chkfilter}/>

      <div>
        {filteredProduct.length === 0 ? (
          <h3>No Products Found</h3>
        ) : (
          filteredProduct.map((product) => (
            <div key={product.id}style={{border: "1px solid gray", margin: "10px",padding: "10px",borderRadius: "8px",}}>
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Task4;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductTable.css";
import Pagination from "./Pagination"

const ProductTable = () => {
  const [loadding, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postperPage,setPostperPage]=useState(5);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const post = await axios.get("https://dummyjson.com/products");
      setProducts(post.data.products);
      setLoading(false);
    }
    fetchData();
  }, []);
   
  const indexOfLastPost=postperPage*currentPage;
  const indexOfFirstPost=indexOfLastPost-postperPage;
  const currentPost=products.slice(indexOfFirstPost,indexOfLastPost);

  if(loadding){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <input id="search" placeholder="Search by title..." />
      <table>
        <tr>
          <th>
            <input type="checkbox" />
            All
          </th>
          <th>Title</th>
          <th>Discription</th>
          <th>Price</th>
          <th>Brand</th>
        </tr>

        {currentPost.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
          </tr>
        ))}
      </table>
      
      <Pagination postperPage={postperPage} totalPost={products.length} />
    </>
  );
};

export default ProductTable;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductTable.css";
import Pagination from "./Pagination";

const ProductTable = () => {
  const [loadding, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const post = await axios.get("http://localhost:5000/products");
      setProducts(post.data.products);
      setLoading(false);
    }
    fetchData();
  }, []);

  const indexOfLastPost = postperPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postperPage;
  const currentPost = products.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const changeHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedValue = products.map((product) => {
        return { ...product, isChecked: checked };
      });
      //console.log(checkedValue);
      setProducts(checkedValue);
    } else {
      const checkedValue = products.map((product) =>
        product.title === name ? { ...product, isChecked: checked } : product
      );
      console.log(checkedValue);
      setProducts(checkedValue);
    }
  };

  if (loadding) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <input id="search" placeholder="Search by title..." />
      <table>
        <tr>
          <th>
            <input
              type="checkbox"
              name="allselect"
              onChange={changeHandler}
              checked={!products.some((product) => product?.isChecked !== true)}
            />
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
              <input
                type="checkbox"
                name={item.title}
                checked={item?.isChecked || false}
                onChange={changeHandler}
              />
            </td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.brand}</td>
          </tr>
        ))}
      </table>

      <Pagination
        postperPage={postperPage}
        totalPost={products.length}
        paginate={paginate}
      />
    </>
  );
};

export default ProductTable;

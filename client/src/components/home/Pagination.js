import React from "react";
import "./Pagination.css"
const Pagination = ({ postperPage, totalPost,paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postperPage); i++) {
    pageNumber.push(i);
  }
  return (
    
      <div className="pagination">
        {pageNumber.map((number) => (
          <button onClick={()=>paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    
  );
};

export default Pagination;

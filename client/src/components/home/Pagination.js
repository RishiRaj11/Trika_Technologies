import React from "react";

const Pagination = ({ postperPage, totalPost }) => {
  const pageNumber = [];
  console.log(Math.ceil(totalPost / postperPage));
  for (let i = 1; i <= Math.ceil(totalPost / postperPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <>
        {pageNumber.map((number) => (
          <button>
            {number}
          </button>
        ))}
      </>
    </nav>
  );
};

export default Pagination;

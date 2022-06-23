import React from "react";
import Button from "./Button";

function Pagination({ page, last, navigate }) {
  return (
    <div className="pagination">
      <Button
        disabled={page === 1}
        onClick={() => navigate(`/${page - 1}`)}
        text="Previous"
      />
      <div className="pagination-number">Pag. {page}</div>
      <Button
        disabled={last}
        onClick={() => navigate(`/${page + 1}`)}
        text="Next"
      />
    </div>
  );
}

export default Pagination;

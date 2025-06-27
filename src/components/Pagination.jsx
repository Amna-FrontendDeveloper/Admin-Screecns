
import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onChangePage,
  totalItems,
  currentItemsCount,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm mt-4">
      {/* Left: Showing entries */}
      <div className="text-gray-600">
        Showing {currentItemsCount} of {totalItems} entries
      </div>
  
      {/* Right: Pagination buttons */}
      <div className="flex flex-wrap gap-2 justify-end">
        <button
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
  
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => onChangePage(pageNum)}
              className={`px-3 py-1 border rounded ${
                pageNum === currentPage
                  ? "bg-orange-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          );
        })}
  
        <button
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
  
  
};

export default Pagination;

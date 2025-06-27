import { useState, useMemo } from "react";

const usePagination = (data = [], itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    currentItemsCount: paginatedData.length,
    paginatedData,
  };
};

export default usePagination;

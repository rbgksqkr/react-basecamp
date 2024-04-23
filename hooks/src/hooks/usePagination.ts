import { useState } from "react";

const usePagination = (initialPage: number = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // 여기에 페이지네이션 관련 함수를 작성하세요.
  // 힌트:
  // 1. 다음 페이지로 이동하는 함수를 작성하세요.
  // 2. 이전 페이지로 이동하는 함수를 작성하세요.
  // 3. 이전 페이지로 이동할 때는 현재 페이지가 1보다 작아지지 않도록 주의하세요.

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return { currentPage, goToNextPage, goToPrevPage };
};

export default usePagination;

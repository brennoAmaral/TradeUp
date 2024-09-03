import { useState } from "react";

export default function usePageController(currentPage:number, lastPage:number, changePage: (page:number)=>void){
  const [page, setPage] = useState<number>(currentPage ?? 1);

  const maxPagesToShow = 7;
  let startPage = Math.max(page - Math.floor(maxPagesToShow / 2), 1);
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > lastPage) {
    endPage = lastPage;
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }


  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  function changePageAndFetch(page:number){
    setPage(page),
    changePage(page)
  }
  return{
    pages,
    page,
    changePageAndFetch
  }
}
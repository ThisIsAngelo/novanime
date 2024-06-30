import { useRef } from "react";

export default function Pagination({ page, setPage, lastPage }) {
  const pageRef = useRef();
  function scrollTop() {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  function handleNextPage() {
    if (page >= lastPage) {
      return;
    } else {
      setPage((prevState) => prevState + 1);
      scrollTop();
    }
  }

  function handlePrevPage() {
    if (page <= 1) {
      return;
    } else {
      setPage((prevState) => prevState - 1);
      scrollTop();
    }
  }

  function inputPage(e) {
    let keyword = pageRef.current.value;
    if (e.key === "Enter" || e.type === "click") {
      if (
        keyword < 1 ||
        keyword > lastPage ||
        keyword.includes(".") ||
        keyword.includes(",")
      ) {
        return;
      } else {
        e.preventDefault();
        keyword = parseInt(keyword);
        setPage(keyword);
        scrollTop();
        pageRef.current.value = "";
      }
    }
  }

  return (
    <div className="w-full flex flex-col items-center gap-2 h-[15vh]">
      <div className="w-full flex justify-center items-center gap-2 h-1/4 *:text-sm lg:*:text-lg">
        {page <= 1 ? null : (
          <button className="hover:text-color-primary" onClick={handlePrevPage}>
            Prev
          </button>
        )}
        <p>
          {page} of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <button className="hover:text-color-primary" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
      <div className="flex flex-col items-center gap-1 w-1/2">
        <h1 className="text-sm lg:text-lg">Go To</h1>
        <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2 xl:w-[40%] 2xl:w-[35%]">
          <input
            type="number"
            min="1"
            max={lastPage}
            ref={pageRef}
            onKeyDown={inputPage}
            className="text-color-dark w-1/2 text-sm lg:text-lg rounded-md p-1 text-center"
          />
          <button
            className="w-1/2 p-1 text-sm lg:text-lg border-2 border-color-primary rounded-md hover:bg-color-primary hover:text-color-dark transition ease-linear duration-150"
            onClick={inputPage}
          >
            GO
          </button>
        </div>
      </div>
    </div>
  );
}

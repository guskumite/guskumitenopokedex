import "boxicons";

const Pagination = ({
  LastPage,
  pagesInCurrentBlock,
  setcurrentPage,
  currentPage,
}) => {
  const theCurrentPageTag = "text-red-500";
  return (
    <ul className="flex flex-row mt-4">
      <li>
        <box-icon
          onClick={() => setcurrentPage(1)}
          className="w-[0.3rem] border-2"
          name="rewind-circle"
        ></box-icon>
      </li>
      <li>
        <box-icon
          onClick={() =>
            setcurrentPage(currentPage > 0 ? currentPage - 1 : currentPage)
          }
          className="w-[0.3rem] border-2"
          name="arrow-back"
        ></box-icon>
      </li>
      {pagesInCurrentBlock.map((page) => (
        <li
          onClick={() => setcurrentPage(page)}
          className={`w-[1.1rem] ml-8 border-2 border-slate-200 bg-zinc-300
            ${page === currentPage ? theCurrentPageTag : ""}`}
          key={page}
        >
          {page}
        </li>
      ))}
      <li>
        <box-icon
          onClick={() =>
            setcurrentPage(
              currentPage < LastPage ? currentPage + 1 : currentPage
            )
          }
          className="w-[0.3rem] border-2"
          name="right-arrow-alt"
        ></box-icon>
      </li>
      <li>
        <box-icon
          onClick={() => setcurrentPage(LastPage)}
          className="w-[0.3rem] border-2"
          name="fast-forward-circle"
        ></box-icon>
      </li>
    </ul>
  );
};

export default Pagination;

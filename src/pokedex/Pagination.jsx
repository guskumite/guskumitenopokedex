import "boxicons";

const Pagination = ({ LastPage, pagesInCurrentBlock, setcurrentPage }) => {
  return (
    <ul className="flex flex-row">
      <li>
        <box-icon className="w-[0.3rem] border-2" name="arrow-back"></box-icon>
      </li>
      <li>
        <box-icon
          className="w-[0.3rem] border-2"
          name="rewind-circle"
        ></box-icon>
      </li>
      {pagesInCurrentBlock.map((page) => (
        <li
          onClick={() => setcurrentPage(page)}
          className="w-[1.1rem] ml-8 border-2 border-slate-200 bg-zinc-300"
          key={page}
        >
          {page}
        </li>
      ))}
      <li>
        <box-icon
          className="w-[0.3rem] border-2"
          name="right-arrow-alt"
        ></box-icon>
      </li>
      <li>
        <box-icon
          className="w-[0.3rem] border-2"
          name="fast-forward-circle"
        ></box-icon>
      </li>
    </ul>
  );
};

export default Pagination;
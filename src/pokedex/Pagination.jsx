const Pagination = ({ LastPage, pagesInCurrentBlock }) => {
  const forward = ">";
  const fastForward = ">>";
  const rewind = "<";
  const fastRewind = "<<";
  return (
    <ul className="flex flex-row">
      <li>{fastRewind}</li>
      <li>{rewind}</li>
      {pagesInCurrentBlock.map((page) => (
        <li>{page}</li>
      ))}
      <li>{forward}</li>
      <li>{fastForward}</li>
    </ul>
  );
};

export default Pagination;

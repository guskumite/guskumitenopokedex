const paginateData = (items, currentPage) => {
  // How many items per page
  const ITEMS_PER_PAGE = 20;

  // The items for the current page

  const sliceEnd = currentPage * ITEMS_PER_PAGE;
  const sliceStart = sliceEnd - ITEMS_PER_PAGE;
  const itemsInCurrentPage = items.slice(sliceStart, sliceEnd);

  //Last page

  const LastPage = Math.ceil(items.length / ITEMS_PER_PAGE);

  // Current navigation block

  const PAGES_PER_BLOCK = 5;
  const currentBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

  //Pages that must be shown in the current Block

  const pagesInCurrentBlock = [];
  const maxPage = currentBlock * PAGES_PER_BLOCK;
  const minPage = maxPage - PAGES_PER_BLOCK + 1;
  for (let i = minPage; i <= maxPage; i++) {
    if (i <= LastPage) {
      pagesInCurrentBlock.push(i);
    }
  }

  return {
    itemsInCurrentPage,
    LastPage,
    pagesInCurrentBlock,
  };
};

export { paginateData };

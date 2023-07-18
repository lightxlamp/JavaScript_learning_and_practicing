function sortPages(pages) {
  // console.log(pages);

  const pagesArrayObject = Object.entries(pages);

  // console.log(pagesArrayObject);

  const pagesArrayObjectSorted = pagesArrayObject.sort(function (a, b) {
    return b[1] - a[1];
  });

  // console.log(pagesArrayObjectSorted);

  return pagesArrayObjectSorted;
}

function printReport(pages) {
    console.log('============')
    console.log('== REPORT ==')
    console.log('============')
    const sortedPages = sortPages(pages)
    for(const page of sortedPages) {
        const url = page[0];
        const hits = page[1];
        console.log(`Found ${hits} links to page: ${url}`)
    }
    console.log('=============')
    console.log('==== END ====')
    console.log('=============')
}

module.exports = {
  sortPages,
  printReport
};

const { JSDOM } = require("jsdom");

function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  linkElements.forEach((linkElement) => {
    // console.log(linkElement.href)
    if (linkElement.href.slice(0, 1) === "/") {
      // relative URL
      try {
        const urlObj = new URL(baseURL + linkElement.href)
        urls.push(urlObj.href);
      }
      catch(err) {
        console.log(`Error with relative url: ${err.message}`)
      }
    } else {
      // absolute
      try {
        const urlObj = new URL(linkElement.href)
        urls.push(urlObj.href);
      }
      catch(err) {
        console.log(`Error with relative url: ${err.message}`)
      }
    }
  });
  return urls;
}

function normalizeURL(urlString) {
  const urlObject = new URL(urlString);
  const hostPath = `${urlObject.hostname}${urlObject.pathname}`;
  // console.log(urlObject)
  if (hostPath.length > 0 && hostPath.slice(-1) === "/") {
    return hostPath.slice(0, -1);
  }
  return hostPath;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
};

// normalizeURL('https://blog.boot.dev/path')

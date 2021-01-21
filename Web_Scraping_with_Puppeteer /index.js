const puppeteer = require('puppeteer');
 
(async () => {
    let url = 'https://www.imdb.com/title/tt0960144/?ref_=nv_sr_srsg_0';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url, {waitUntil: 'networkidle2'}); // networkidle2 - everything is loaded 

    let data = await page.evaluate(() => {
        const title = document.querySelector('.title_wrapper > h1').innerText
        const rating = document.querySelector('span[itemprop=ratingValue]').innerText

        return {
            title, 
            rating
        }
    })

    console.log(data);

    //   await page.pdf({path: 'hn.pdf', format: 'A4'});
 
    await browser.close();
})();
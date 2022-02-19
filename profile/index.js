const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ionicabizau.github.io/github-profile-languages/api.html?heficience');
  await page.screenshot({ path: 'language-graph.png' });

  await browser.close();
})();
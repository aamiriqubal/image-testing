import { toMatchImageSnapshot } from "jest-image-snapshot";
const puppeteer = require("puppeteer");
jest.useRealTimers();
expect.extend({ toMatchImageSnapshot });

it("Image testing - home page", async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--single-process", "--no-zygote", "--no-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    /**
     * This is weird but as the UI has some shadow thing implemented,
     * it takes a while for the page to apply css and stabilise
     */
    await new Promise((r) => setTimeout(r, 100));

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot();
  } catch (e) {
    console.error(e);
  } finally {
    // this try, catch, finally thing is done to make sure puppeteer closes the chrome browser even if the test fails,
    // need to find some better solution for it.
    await browser.close();
  }
});

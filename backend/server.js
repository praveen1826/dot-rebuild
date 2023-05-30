import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import puppeteer from "puppeteer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let url =
  "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json";

let settings = { method: "Get" };

fetch(url, settings)
  .then((res) => res.json())
  .then((json) => {
    const ind = json.IND;
    console.log(ind);
    const app = express();
    app.use(cors());
    app.get("/", function (req, res) {
      res.json(ind);
    });

    app.listen(5000);
  });

const crawler = (async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: process.env.CHROME_BIN || null,
    args: [
      "--no-sandbox",
      "--headless",
      "--disable-gpu",
      "--disable-dev-shm-usage",
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://www.who.int/emergencies/disease-outbreak-news", {
    waitUntil: "networkidle2",
  });
  const spanVal = await page.$eval(".sf-list-vertical", (el) => el.innerText);
  const app = express();
  app.use(cors());
  app.get("/", (req, res) => {
    res.json({ foo: spanVal });
  });
  app.listen(5001);
  console.log(spanVal);
  //await page.screenshot({ path: "mywebsite.png" });
  //console.log(await page.content());
  console.log("done");

  await browser.close();
})();

const app = express();
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  console.log(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(3000);

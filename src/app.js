const express = require("express");
const helmet = require("helmet");
const boom = require("express-boom");
const axios = require("axios");
const $ = require("cheerio");
const { getFixtures } = require("./fixtures");
const { cache } = require("./middleware/cache");

const app = express();
const port = 5000;

app.use(helmet());
app.use(boom());

app.get("/", (req, res) => {
  res.status(200).json({ statusCode: 200, message: "live on TV API" });
});

app.get("/sky", cache(86400), (req, res) => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.live-footballontv.com/live-football-on-sky-sports.html"
      );

      const matchFixtures = getFixtures(
        $("#listings .row-fluid", response.data)
      );
      res.status(200).json(matchFixtures);
    } catch (error) {
      res.boom.badImplementation(error);
    }
  };

  getData();
});

app.get("/bt", cache(86400), (req, res) => {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://www.live-footballontv.com/live-football-on-bt-sport.html"
      );

      const matchFixtures = getFixtures(
        $("#listings .row-fluid", response.data)
      );
      res.status(200).json(matchFixtures);
    } catch (error) {
      res.boom.badImplementation(error);
    }
  };

  getData();
});

app.use(function (req, res) {
  res.boom.notFound(); // Responds with a 404 status code
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

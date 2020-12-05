import axios from "axios";
import $ from "cheerio";
import { getFixtures } from "../../utils/_fixtures";

export default (req, res) => {
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
};

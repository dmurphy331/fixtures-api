import axios from "axios";
import $ from "cheerio";
import { getFixtures } from "../../utils/_fixtures";

export default async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.live-footballontv.com/live-football-on-sky-sports.html"
    );

    const matchFixtures = getFixtures($("#listings .row-fluid", response.data));
    res.status(200).json(matchFixtures);
  } catch (error) {
    res.status(500).json(error);
  }
};

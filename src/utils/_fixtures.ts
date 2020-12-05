import moment from "moment";

const getFixtures = (elements) => {
  let matchfixtures = [];
  let date = "";
  for (let index = 0; index < elements.length; index++) {
    const row = elements[index];

    if (row.children.length === 1) {
      let parseDate = moment(
        row.children[0].children[0].data,
        "dddd Do MMMM YYYY"
      );

      if (parseDate.isValid()) {
        date = parseDate.format("dddd Do MMMM YYYY");
      }
    }

    if (row.children.length === 4) {
      const fixture = {
        matchfixture: row.children[0].children[0].data,
        competition: row.children[1].children[0].data,
        kickoff: row.children[2].children[0].data,
        channels: row.children[3].children[0].data,
      };

      matchfixtures.push({
        date: date,
        ...fixture,
      });
    }
  }

  return matchfixtures;
};

export { getFixtures };

const tables = require("../tables");
const { getStatisticsFromArrayOfBikes } = require("../services/Statistics");

const getBikesStatictics = async (req, res) => {
  try {
    const bikes = await tables.bikes.getAllBikes();
    res.status(200).send(getStatisticsFromArrayOfBikes(bikes));
  } catch (err) {
    console.error(err);
    res.status(500).send("il y a une erreur");
  }
};

const getBikes = async (req, res) => {
  try {
    const bikes = await tables.bikes.getAllBikes();
    res.status(200).send(bikes);
  } catch (err) {
    console.error(err);
    res.status(500).send("il y a une erreur");
  }
}

module.exports = {
  getBikes,
  getBikesStatictics
};

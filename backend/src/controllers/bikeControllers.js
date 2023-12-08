const bikes = require("../Data/db.json");

const getBikes = async (req, res) => {
  try {
    res.status(200).send(bikes);
  } catch (err) {
    console.error(err);
    res.status(500).send("il y a une erreur");
  }
};

module.exports = {
  getBikes,
};

const getStatisticsFromArrayOfBikes = (aBikes) => {
    
    result = {
      numberBike: null,
      sumAllKilometers: null,
      averageKilometers: null,
      sumAllPrices: null,
      averagePrices: null,
    }

    let nbBikes = aBikes.length;

    for (let i = 0 ; i < nbBikes ; i++) 
    {
      result.sumAllKilometers += aBikes[i].kilometers;
      result.sumAllPrices += aBikes[i].price;
    }

    result.averageKilometers = result.sumAllKilometers / nbBikes;
    result.averagePrices = result.sumAllPrices / nbBikes;
    result.numberBike = nbBikes;

    return result
};

module.exports = {
  getStatisticsFromArrayOfBikes
};

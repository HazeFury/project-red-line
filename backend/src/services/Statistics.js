const getStatisticsFromArrayOfBikes = (aBikes) => {
    
    result = {
      numberBikes: null,
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
    result.numberBikes = nbBikes;

    return result
};

module.exports = {
  getStatisticsFromArrayOfBikes
};

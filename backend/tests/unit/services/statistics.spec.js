const { getStatisticsFromArrayOfBikes } = require("../../../src/services/Statistics");

// Test unitaire du service Statistics
// Ce service ne contient qu'une seule fonction
// 'getStatisticsFromArrayOfBikes(aBikes)'
describe("Unit test : service Statistics", () => {
  it("should throw an error if the parameter is not a non-empty array", () => {
    // Préparation d'un jeux de données
    const invalidInputs = [undefined, null, "not an array", 123, {}];

    invalidInputs.forEach((invalidInput) => {
      // On test !
      expect(() => getStatisticsFromArrayOfBikes(invalidInput)).toThrowError(
        "Invalid input: Parameter must be a non-empty array of bikes"
      );
    });
  });

  it("should return a correct object of statistics when passing a valid parameter", () => {
    // Préparation d'un jeux de données
    const validArrayOfBikes = [
      { kilometers: 50, price: 100 },
      { kilometers: 75, price: 150 },
      { kilometers: 60, price: 120 },
    ];

    // On exécute la fonction getStatisticsFromArrayOfBikes
    const result = getStatisticsFromArrayOfBikes(validArrayOfBikes);

    // On test !
    expect(result.numberBikes).toBe(3);
    expect(result.sumAllKilometers).toBe(185);
    expect(result.averageKilometers).toBeCloseTo(61.67, 2);
    expect(result.sumAllPrices).toBe(370);
    expect(result.averagePrices).toBeCloseTo(123.33, 2);
  });

  it("should handle an array with a single bike correctly", () => {
    // Préparation d'un jeux de données
    const singleBikeArray = [{ kilometers: 50, price: 100 }];

    // On exécute la fonction getStatisticsFromArrayOfBikes 
    const result = getStatisticsFromArrayOfBikes(singleBikeArray);

    // On test !
    expect(result.numberBikes).toBe(1);
    expect(result.sumAllKilometers).toBe(50);
    expect(result.averageKilometers).toBe(50);
    expect(result.sumAllPrices).toBe(100);
    expect(result.averagePrices).toBe(100);
  });
});
const RetirementCalculator = require('../models/retirement');

describe('RetirementCalculator', () => {
  test('savemoneybeforeretire should return the number of years before retirement age', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const age = 40;
    const retirementAge = 65;

    // Act
    const result = calculator.savemoneybeforeretire(age, retirementAge);

    // Assert
    expect(result).toBe(25);
  });

  test('beforeretmoney should return the number of years in retirement', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const estimatedAge = 90;
    const retirementAge = 65;

    // Act
    const result = calculator.beforeretmoney(estimatedAge, retirementAge);

    // Assert
    expect(result).toBe(25);
  });

  test('retmoney should return the retirement money with interest', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const payout = 50000;
    const inflationRate = 3;
    const yearsBeforeRetirement = 25;

    // Act
    const result = calculator.retmoney(payout, inflationRate, yearsBeforeRetirement);

    // Assert
    expect(result).toBeCloseTo(104688.8964827108, 0); // Adjust expected value based on your calculation
  });

  test('rettotalmoney should return the total retirement money', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const retirementMoney = 191269.89;
    const yearsInRetirement = 25;

    // Act
    const result = calculator.rettotalmoney(retirementMoney, yearsInRetirement);

    // Assert
    expect(result).toBeCloseTo(57380967.00000001, 0); // Adjust expected value based on your calculation
  });

  test('savemoneyplus should return the saved money with interest', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const savedMoney = 100000;
    const interestIncome = 5;
    const yearsBeforeRetirement = 25;

    // Act
    const result = calculator.savemoneyplus(savedMoney, interestIncome, yearsBeforeRetirement);

    // Assert
    expect(result).toBeCloseTo(338635.4940899389, 0); // Adjust expected value based on your calculation
  });

  test('outcome should return the difference between total retirement money and saved money with interest', () => {
    // Arrange
    const calculator = new RetirementCalculator();
    const totalRetirementMoney = 57380967.2;
    const savedMoneyWithInterest = 437034.59;

    // Act
    const result = calculator.outcome(totalRetirementMoney, savedMoneyWithInterest);

    // Assert
    expect(result).toBeCloseTo(56943932.61, 2); // Adjust expected value based on your calculation
  });
});

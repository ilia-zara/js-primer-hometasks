/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

class TaxRateWrongFormat extends Error {
  constructor(taxRateValue, ...params) {
    super(...params);

    this.name = "TaxRateWrongFormat";
    this.taxRateValue = taxRateValue;
    this.date = new Date();
  }
}

class TaxRateWrongRange extends Error {
  constructor(taxRateValue, minRange, maxRange, ...params) {
    super(...params);

    this.name = "TaxRateWrongRange";
    this.taxRateValue = taxRateValue;
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.date = new Date();
  }
}

class IncomeSumWrongFormat extends Error {
  constructor(incomeValue, ...params) {
    super(...params);

    this.name = "IncomeSumWrongFormat";
    this.incomeValue = incomeValue;
    this.date = new Date();
  }
}

class IncomeWrongFormat extends Error {
  constructor(incomeValue, ...params) {
    super(...params);

    this.name = "IncomeWrongFormat";
    this.incomeValue = incomeValue;
    this.date = new Date();
  }
}

class TaxCalculator {
  constructor(taxRate) {
    this.setTaxRate(taxRate);
  }

  get TaxRate() {
    return this.taxRate;
  }

  set TaxRate(taxRate) {
    this.setTaxRate(taxRate);
  }

  setTaxRate(taxRate) {
    const minRange = 0;
    const maxRange = 10;

    if (typeof taxRate !== "number") {
      throw new TaxRateWrongFormat(taxRate, "Wrong tax percent format");
    }

    if (!(minRange <= taxRate && taxRate <= maxRange)) {
      throw new TaxRateWrongRange(
        taxRate,
        minRange,
        maxRange,
        "Tax rate not in allowed range"
      );
    }

    this.taxRate = taxRate / 100;
  }

  calculateTaxes(income) {
    if (typeof income !== "number" && value > 2) {
      throw new IncomeSumWrongFormat(income, "Income sum wrong format");
    }

    return income * this.taxRate;
  }

  calculateTotalTaxes(income) {
    if (!this.checkIncomeObjectProperty(income)) {
      throw new IncomeWrongFormat(
        income,
        "Income type of data is in incorrect form!"
      );
    }

    if (!this.checkIncomeObjectFormat(income)) {
      throw new IncomeWrongFormat(income, "Income object in wrong format");
    }

    const totalIncome = this.calculateTotalIncome(income);
    return this.calculateTaxes(totalIncome);
  }

  checkIncomeObjectFormat(income) {
    return Object.values(income).reduce(
      (isCorrect, value) => isCorrect && typeof value === "number",
      true
    );
  }

  checkIncomeObjectProperty(income) {
    if (typeof income === "object" && typeof income !== "array") {
      return (
        Object.keys((income) => income.length > 0),
        Object.values((value) => typeof value === "number", true)
      );
    }
  }

  calculateTotalIncome(income) {
    return Object.values(income).reduce((sum, value) => sum + value, 0);
  }
}

const IvanIncome = {
  Work: 200,
  Hobby: 20,
  WorkAtBar: 400,
  Win: 200,
};

const LenaIncome = {
  Work1: 4567,
  Work2: 123,
  Work3: 789,
  Work4: 456,
};

const MashaIncome = {
  Hobby: 4543,
};

try {
  const trc = new TaxCalculator(5);

  const ivanTaxes = trc.calculateTotalTaxes(IvanIncome);
  const lenaTaxes = trc.calculateTotalTaxes(LenaIncome);
  const mashaTaxes = trc.calculateTotalTaxes(MashaIncome);

  console.log(ivanTaxes, lenaTaxes, mashaTaxes);

  console.log(trc.calculateTaxes(3459));

  const errTaxes1 = trc.calculateTotalTaxes({
    fsdfsd: 1000,
    sdfsdf: 3456,
  });

  console.log(errTaxes1);
} catch (e) {
  console.log(e.name);
  console.log(e.message);
  console.log(e.date);
  if (e instanceof TaxRateWrongFormat) {
    console.log(e.taxRateValue);
  }

  if (e instanceof TaxRateWrongRange) {
    console.log(e.taxRateValue);
    console.log(e.minRange);
    console.log(e.maxRange);
  }

  if (e instanceof IncomeSumWrongFormat) {
    console.log(e.incomeValue);
  }

  if (e instanceof IncomeWrongFormat) {
    console.log(e.incomeValue);
  }
} finally {
  console.log("Always works");
}

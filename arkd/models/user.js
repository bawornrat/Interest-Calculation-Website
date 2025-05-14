// Class to represent a User object.
class User {
  // Constructor to initialize a User object with provided properties.
  constructor(bankname, beforesavedmoney, permonth, duration, intrate, allsavedmoney, totalintrate, savemoneyinterest) {
      this.bankname = bankname;                   // Bank name
      this.beforesavedmoney = beforesavedmoney;   // Amount saved before
      this.permonth = permonth;                   // Amount saved per month
      this.duration = duration;                   // Duration of savings
      this.intrate = intrate;                     // Interest rate
      this.allsavedmoney = allsavedmoney;         // Total saved money
      this.totalintrate = totalintrate;           // Total interest rate
      this.savemoneyinterest = savemoneyinterest; // Saved money with interest
  }
}

  
  module.exports = User;
  
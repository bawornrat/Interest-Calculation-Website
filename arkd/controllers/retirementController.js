const Retirement = require('../models/retirement')

const retirementview = (req, res) => {
    res.render("retirementview",{ showResult: false })
  };

  
// Function to calculate retirement.
const retirementcal = (req, res) => {
  // Declaring an empty array to store retirement calculations.
  var sumretire = [];
    
    // Creating a new instance of the Retirement class.
    const retirementCalculator = new Retirement();
    
    // Destructuring request body to extract relevant data.
    const { age, afterage, savedmoney, intincome, infmoney, estage, payout} = req.body;
    
    // Calculating various retirement-related values using methods from the Retirement class.
    const savemoneybeforeretire = retirementCalculator.savemoneybeforeretire(age,afterage);
    const beforeretmoney= retirementCalculator.beforeretmoney(estage,afterage);
    const presentmoney = parseFloat(payout);
    const retmoney = retirementCalculator.retmoney(payout,infmoney,savemoneybeforeretire);
    const rettotalmoney = retirementCalculator.rettotalmoney(retmoney,beforeretmoney);
    const savemoneyplus = retirementCalculator.savemoneyplus(savedmoney,intincome,savemoneybeforeretire);
    const outcome = retirementCalculator.outcome(rettotalmoney,savemoneyplus);
    //const outmonth = retirementCalculator.outmonth(outcome,beforeretmoney);
    sumretire =[savemoneybeforeretire,
      beforeretmoney,
      presentmoney,
      retmoney,
      rettotalmoney,
      savemoneyplus,
      outcome,
      ];
    
    res.render("retirementview",{sumretire:sumretire, showResult:true})
  };


// Exporting the retirementview and retirementcal functions.
module.exports = {
  retirementview,
  retirementcal
  // You can export other tag controllers here if needed.
};

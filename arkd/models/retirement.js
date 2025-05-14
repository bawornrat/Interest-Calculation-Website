class Retirement {
    // Method to calculate the number of years before retirement.
    savemoneybeforeretire(age, afterage) {
        console.time("savemoneybeforeretire");
        var savemoneybeforeretire = afterage - age;
        console.timeEnd("savemoneybeforeretire");
        return savemoneybeforeretire;
    }

    // Method to calculate the number of years in retirement.
    beforeretmoney(estage, afterage) {
        console.time("beforeretmoney");
        var beforeretmoney = estage - afterage;
        console.timeEnd("beforeretmoney");
        return beforeretmoney;
    }

    // Method to calculate the retirement money with interest.
    retmoney(payout, infmoney, savemoneybeforeretire) {
        console.time("retmoney");
        var retmoney = payout * Math.pow(1 + (infmoney / 100), savemoneybeforeretire);
        console.timeEnd("retmoney");
        return retmoney;
    }

    // Method to calculate the total retirement money.
    rettotalmoney(retmoney, beforeretmoney) {
        console.time("rettotalmoney");
        var rettotalmoney = retmoney * 12 * beforeretmoney;
        console.timeEnd("rettotalmoney");
        return rettotalmoney;
    }

    // Method to calculate the saved money with interest.
    savemoneyplus(savedmoney, intincome, savemoneybeforeretire) {
        console.time("savemoneyplus");
        var savemoney2 = savedmoney * Math.pow(1 + (intincome / 100), savemoneybeforeretire);
        console.timeEnd("savemoneyplus");
        return savemoney2;
    }

    // Method to calculate the outcome (difference between total retirement money and saved money with interest).
    outcome(rettotalmoney, savemoneyplus) {
        console.time("outcome");
        var outcome = rettotalmoney - savemoneyplus;
        console.timeEnd("outcome");
        return outcome;
    }
}

module.exports = Retirement;

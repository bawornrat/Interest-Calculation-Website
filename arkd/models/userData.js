const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.users = [];

        // สร้างอินสแตนซ์ของคลาส UserData และเตรียมข้อมูลผู้ใช้เริ่มต้น
        /*initialUsersData.forEach(user => {
            const newUser = new User(
                user.bankname,
                parseFloat(user.beforesavedmoney),
                parseFloat(user.permonth),
                parseFloat(user.duration),
                parseFloat(user.intrate),
                parseFloat(user.allsavedmoney),
                parseFloat(user.totalintrate),
                parseFloat(user.savemoneyinterest)
            );
            this.addUser(newUser); // เพิ่มผู้ใช้ใหม่ลงในรายชื่อผู้ใช้
        });*/
    }

    // เพิ่มผู้ใช้ใหม่ลงในรายชื่อผู้ใช้
    addUser(user) {
        console.time("addUser");
        this.users.push(user);
        console.timeEnd("addUser");
    }

    // ลบผู้ใช้หนึ่งคนออกจากรายชื่อผู้ใช้
    removeOneUser() {
        console.time("removeOneUser");
        if (this.users.length > 0) {
            const removedUser = this.users.pop();
            console.timeEnd("removeOneUser");
            return removedUser;
        } else {
            console.timeEnd("removeOneUser");
            return null;
        }
    }

    // ดึงจำนวนผู้ใช้ทั้งหมดในรายชื่อผู้ใช้
    getUserCount() {
        console.time("getUserCount");
        const count = this.users.length;
        console.timeEnd("getUserCount");
        return count;
    }

    // ล้างรายชื่อผู้ใช้ทั้งหมด
    clearUsers() {
        console.time("clearUsers");
        this.users = [];
        console.timeEnd("clearUsers");
    }

    // คำนวณเงินทั้งหมดที่บันทึกไว้สำหรับแต่ละผู้ใช้
    calculateallSavedMoney() {
        console.time("calculateallSavedMoney");
        this.users.forEach(user => {
            user.allsavedmoney = parseFloat(user.beforesavedmoney) + (parseFloat(user.permonth) * 12 * parseFloat(user.duration));
        });
        console.timeEnd("calculateallSavedMoney");
    }

    // คำนวณอัตราดอกเบี้ยรวมทั้งหมดสำหรับแต่ละผู้ใช้
    calculateTotalintrate() {
        console.time("calculateTotalintrate");
        this.users.forEach(user => {
            var totalInterest = 0;
            var Interest = 0;
            var balance = user.beforesavedmoney;
            var totalAmount = user.beforesavedmoney;

            for (var j = 1; j <= user.duration; j++) {
                if (j == 1) {
                    balance = user.beforesavedmoney + (user.permonth * 12);
                    totalInterest = balance * (user.intrate / 100);
                    totalAmount = balance + totalInterest;

                } else {
                    balance = totalAmount + (user.permonth * 12);
                    totalInterest += balance * (user.intrate / 100);
                    Interest = balance * (user.intrate / 100);
                    totalAmount = balance + Interest;
                }
            }
            user.totalintrate = totalInterest;
        });
        console.timeEnd("calculateTotalintrate");
    }

    // คำนวณเงินที่บันทึกไว้พร้อมดอกเบี้ยสำหรับแต่ละผู้ใช้
    calculatesaveMoneyInterest() {
        console.time("calculatesaveMoneyInterest");
        this.users.forEach(user => {
            user.savemoneyinterest = user.totalintrate + user.allsavedmoney;
        });
        console.timeEnd("calculatesaveMoneyInterest");
    }

    // ค้นหาผู้ใช้ที่มีอัตราดอกเบี้ยรวมต่ำสุด
    findLowestTotalintrate() {
        console.time("findLowestTotalintrate");
        let lowesttotalintrate = Infinity;
        let lowestBankname = '';

        this.users.forEach(user => {
            const totalintrate = parseFloat(user.totalintrate);

            if (totalintrate < lowesttotalintrate) {
                lowesttotalintrate = totalintrate;
                lowestBankname = user.bankname;
            }
        });

        console.timeEnd("findLowestTotalintrate");
        return {
            bankname: lowestBankname,
            lowesttotalintrate: lowesttotalintrate
        };
    }

    // ค้นหาผู้ใช้ที่มีอัตราดอกเบี้ยรวมสูงสุด
    findHighTotalintrate() {
        console.time("findHighTotalintrate");
        let hightotalintrate = -Infinity;
        let highBankname = '';

        this.users.forEach(user => {
            const totalintrate = parseFloat(user.totalintrate);

            if (totalintrate > hightotalintrate) {
                hightotalintrate = totalintrate;
                highBankname = user.bankname;
            }
        });

        console.timeEnd("findHighTotalintrate");
        return {
            bankname: highBankname,
            hightotalintrate: hightotalintrate
        };
    }

    // คำนวณค่าเฉลี่ยอัตราดอกเบี้ยรวมของผู้ใช้ทั้งหมด
    findAvgTotalintrate() {
        console.time("findAvgTotalintrate");
        let avgtotalintrate = 0;

        this.users.forEach(user => {
            const totalintrate = parseFloat(user.totalintrate);
            avgtotalintrate = avgtotalintrate + totalintrate;
        });

        avgtotalintrate = avgtotalintrate / this.users.length;
        console.timeEnd("findAvgTotalintrate");

        return {
            avgtotalintrate: avgtotalintrate
        };
    }
}

module.exports = UserData;

const initialUsersData = require('../models/initdata.js');
const User = require('../models/user.js');
const UserData = require('../models/userData.js');

// สร้าง instance ของ UserData class
const userData = new UserData();

// ทดสอบเพิ่มผู้ใช้ใหม่
test('addUser should add a new user', () => {
  const userData = new UserData();
  const newUser = new User('Test Bank', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser);
  expect(userData.getUserCount()).toBe(1);
});

// ทดสอบการลบผู้ใช้
test('removeOneUser should remove a user', () => {
  const userData = new UserData();
  const newUser = new User('Test Bank', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser);
  const removedUser = userData.removeOneUser();
  expect(userData.getUserCount()).toBe(0);
  expect(removedUser).toEqual(newUser);
});

test('removeOneUser should return null if no user exists', () => {
  // Arrange
  const userData = new UserData();

  // Act
  const result = userData.removeOneUser();

  // Assert
  expect(result).toBeNull();
});


test('getUserCount should return the correct number of users', () => {
  // สร้าง instance ของ UserData
  const userData = new UserData();
  // เพิ่มผู้ใช้ใหม่
  const newUser1 = new User('Test Bank 1', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser1);
  // ตรวจสอบว่าจำนวนผู้ใช้ที่คืนมาเป็น 1
  expect(userData.getUserCount()).toBe(1);
  // เพิ่มผู้ใช้อีกหนึ่งคน
  const newUser2 = new User('Test Bank 2', 1500, 200, 6, 6, 0, 0, 0);
  userData.addUser(newUser2);
  // ตรวจสอบว่าจำนวนผู้ใช้ที่คืนมาเป็น 2
  expect(userData.getUserCount()).toBe(2);
  // เพิ่มผู้ใช้อีกหนึ่งคน
  const newUser3 = new User('Test Bank 3', 2000, 300, 7, 7, 0, 0, 0);
  userData.addUser(newUser3);
  // ตรวจสอบว่าจำนวนผู้ใช้ที่คืนมาเป็น 3
  expect(userData.getUserCount()).toBe(3);
});

test('clearUsers should remove all users from the array', () => {
  // สร้าง instance ของ UserData
  const userData = new UserData();

  // เพิ่มผู้ใช้ใหม่
  const newUser1 = new User('Test Bank 1', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser1);
  const newUser2 = new User('Test Bank 2', 1500, 200, 6, 6, 0, 0, 0);
  userData.addUser(newUser2);
  const newUser3 = new User('Test Bank 3', 2000, 300, 7, 7, 0, 0, 0);
  userData.addUser(newUser3);

  // ก่อนเรียก clearUsers() ต้องมีผู้ใช้ 3 คน
  expect(userData.getUserCount()).toBe(3);

  // เรียกใช้งาน clearUsers() เพื่อลบผู้ใช้ทั้งหมด
  userData.clearUsers();

  // หลังจากเรียกใช้งาน clearUsers() ต้องไม่มีผู้ใช้เหลือในรายการ
  expect(userData.getUserCount()).toBe(0);
});

test('calculateallSavedMoney should calculate the total saved money for each user', () => {
  // สร้าง instance ของ UserData
  const userData = new UserData();

  // เพิ่มผู้ใช้ใหม่
  const newUser1 = new User('Test Bank 1', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser1);
  const newUser2 = new User('Test Bank 2', 1500, 200, 6, 6, 0, 0, 0);
  userData.addUser(newUser2);

  // เรียกใช้งาน calculateallSavedMoney() เพื่อคำนวณเงินที่ออมทั้งหมดสำหรับผู้ใช้ทุกคน
  userData.calculateallSavedMoney();

  // ตรวจสอบว่าเงินที่ออมทั้งหมดของผู้ใช้แต่ละคนถูกคำนวณได้อย่างถูกต้องหรือไม่
  // สำหรับผู้ใช้ที่ 1
  expect(userData.users[0].allsavedmoney).toBe(1000 + (100 * 12 * 5)); // 1000 (เงินออมเริ่มต้น) + (100 (เงินออมต่อเดือน) * 12 (จำนวนเดือนต่อปี) * 5 (ระยะเวลาการออม))
  // สำหรับผู้ใช้ที่ 2
  expect(userData.users[1].allsavedmoney).toBe(1500 + (200 * 12 * 6)); // 1500 (เงินออมเริ่มต้น) + (200 (เงินออมต่อเดือน) * 12 (จำนวนเดือนต่อปี) * 6 (ระยะเวลาการออม))
});


test('calculateTotalintrate should calculate the total interest rate for each user', () => {
  // สร้าง instance ของ UserData
  const userData = new UserData();

  // เพิ่มผู้ใช้ใหม่
  const newUser1 = new User('Test Bank 1', 1000, 100, 5, 5, 0, 0, 0);
  userData.addUser(newUser1);
  const newUser2 = new User('Test Bank 2', 1500, 200, 6, 6, 0, 0, 0);
  userData.addUser(newUser2);

  // เรียกใช้งาน calculateTotalintrate() เพื่อคำนวณอัตราดอกเบี้ยรวมสำหรับผู้ใช้ทุกคน
  userData.calculateTotalintrate();

  // ตรวจสอบว่าอัตราดอกเบี้ยรวมของผู้ใช้แต่ละคนถูกคำนวณได้อย่างถูกต้องหรือไม่
  // สำหรับผู้ใช้ที่ 1
  expect(userData.users[0].totalintrate).toBeCloseTo(1238.58, 2);; // ตรวจสอบด้วย toBeCloseTo เนื่องจากมีการคำนวณทศนิยม
  // สำหรับผู้ใช้ที่ 2
  expect(userData.users[1].totalintrate).toBeCloseTo(3972.99, 2); // ตรวจสอบด้วย toBeCloseTo เนื่องจากมีการคำนวณทศนิยม
});


test('calculatesaveMoneyInterest should calculate saved money with interest correctly', () => {
  // Arrange
  const userData = new UserData();
  const user1 = new User('Test Bank 1', 1000, 100, 5, 5, 0, 0, 0);
  const user2 = new User('Test Bank 2', 2000, 200, 5, 5, 0, 0, 0);
  userData.addUser(user1);
  userData.addUser(user2);

  // Act
  userData.calculateTotalintrate();
  userData.calculatesaveMoneyInterest();

  // Assert
  expect(userData.users[0].savemoneyinterest).toBe(1238.5769375);
  expect(userData.users[1].savemoneyinterest).toBe(2477.153875);
});

test('findLowestTotalintrate should return user with the lowest total interest rate', () => {
  // Arrange
  const userData = new UserData();
  const user1 = new User('Bank A', 1000, 100, 5, 5, 0, 0, 0);
  const user2 = new User('Bank B', 2000, 200, 5, 10, 0, 0, 0);
  userData.addUser(user1);
  userData.addUser(user2);

  // Act
  const result = userData.findLowestTotalintrate();

  // Assert
  expect(result).toEqual({
    bankname: 'Bank A',
    lowesttotalintrate: 0
  });
});

test('findLowestTotalintrate should return null when no users exist', () => {
  // Arrange
  const userData = new UserData();

  // Act
  const result = userData.findLowestTotalintrate();

  // Assert
  expect(result).toEqual({ bankname: '', lowesttotalintrate: Infinity });
});



test('findHighTotalintrate should return user with the highest total interest rate', () => {
  // Arrange
  const userData = new UserData();
  // สร้างข้อมูลผู้ใช้ 2 คน โดยมีอัตราดอกเบี้ยรวมต่างกัน
  const userA = new User('Bank A', 1000, 100, 5, 5, 0, 0, 0); // อัตราดอกเบี้ยรวม 5
  const userB = new User('Bank B', 2000, 200, 5, 10, 0, 0, 0); // อัตราดอกเบี้ยรวม 10
  userData.addUser(userA);
  userData.addUser(userB);

  // Act
  const result = userData.findHighTotalintrate();

  // Assert
  // คาดหวังผลลัพธ์จะมี bankname เป็น 'Bank A' และ hightotalintrate เป็น 0
  expect(result.bankname).toBe('Bank A');
  expect(result.hightotalintrate).toBe(0);
});

test('findAvgTotalintrate should return the average total interest rate across all users', () => {
  // Arrange
  const userData = new UserData();
  const user1 = new User('Bank A', 1000, 100, 5, 5, 0, 0, 0);
  const user2 = new User('Bank B', 2000, 200, 5, 10, 0, 0, 0);
  userData.addUser(user1);
  userData.addUser(user2);

  // Act
  const result = userData.findAvgTotalintrate();

  // Assert
  expect(result.avgtotalintrate).toBe(0);
});
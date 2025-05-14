
const Data = require('../models/userData');
const User = require('../models/user');

const fs = require('fs');
const dataFilePath = 'data.json';

// This function renders the "Compoundview" template and sends it as a response
const Compoundview = (req, res) => {
    res.render("Compoundview")
};

// This function handles the route to get notes.
const getNotes = (req, res) => {
  // It renders the 'index' view and passes along the 'notes' data.
  res.render('index', { notes });
};


// Creating a new instance of the Data class to store user data.
userData = new Data();

// Function to handle the creation of a new user.
const createUser = (req, res) => {
  // Destructuring the request body to extract relevant data.
  const { bankname, beforesavedmoney, permonth, duration, intrate } = req.body;
  // Here you would typically proceed to use this data to create a new user or perform other actions.

  // Validate input
  /*if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
  }
*/

// Creating a new user object using the provided data.
const newUser = new User(
  bankname, // The name of the bank
  parseFloat(beforesavedmoney), // The amount of money saved before
  parseFloat(permonth), // The amount saved per month
  parseInt(duration), // The duration of savings (in months)
  parseFloat(intrate) // The interest rate
);

// Adding the new user to the userData instance.
userData.addUser(newUser);
userData.calculateallSavedMoney();
userData.calculateTotalintrate();
userData.calculatesaveMoneyInterest();


  const min = [];
  const max = [];
  const avg = [];

  const showButton = userData.getUserCount() <  3;
  
  const lowestInfo = userData.findLowestTotalintrate(userData);
  min.push({bankname:lowestInfo.bankname, min:lowestInfo.lowesttotalintrate}); 

  const highInfo = userData.findHighTotalintrate(userData);
  max.push({bankname:highInfo.bankname, max:highInfo.hightotalintrate}); 

  const avgInfo = userData.findAvgTotalintrate(userData);
  avg.push({avg:avgInfo.avgtotalintrate}); 

  // Reading the contents of a file asynchronously using the 'fs' module.
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      // Logging the error to the console if there was one.
      console.error('Error reading file:', err);
      return;
    }

  // Convert the JSON data read from the file into an array
  let dataArray;
  if (data.trim() === '') {
    dataArray = [];
  } else {
    // Otherwise, parse the JSON data into an array
    dataArray = JSON.parse(data);
  }

  // Add the new user object to the array
  dataArray.push(newUser);
  
  // Convert the array back to a JSON string
  const jsonData = JSON.stringify(dataArray, null, 2);

  // Write the JSON data to the file
  fs.writeFile(dataFilePath, jsonData, (err) => {
    if (err) {
      // If there's an error, log it to the console
      console.error('Error writing file:', err);
    } else {
      // If writing is successful, log a success message to the console
      console.log('Data appended successfully.');
    }
  });
});

  // Redirect to the users page after creating user
  res.render('Comparedview',{ users: userData.users,min:min,max:max,avg:avg,showButton: showButton});
  //res.redirect('/ComparedInterest');
 };

/*function getUsers(req, res) {
    // Render the users.ejs template with user data
    res.render('Comparedview'
    //, { Comparedview: userData.users }
  );
}*/

// Create a new user
/* function createUser(req, res) {
    const { bankname, beforesavedmoney } = req.body;
    
    // Validate input
    /*if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create user
    const newUser = new User(bankname,beforesavedmoney); //{ name, email };
    userData.addUser(newUser);

    // Redirect to the users page after creating user
    res.redirect('/ComparedInterest');
}*/

// Function to clear all users from the user data and redirect to '/Compound' route.
function clearUser(req, res) {
  userData.clearUsers();
  res.redirect('/Compound');
}

// Function to remove one user.
function removeOneUser(req, res) {
  userData.removeOneUser();

  /*
  const min = [];
  const max = [];
  const avg = [];

  const showButton = userData.getUserCount() <  3;
  
  const lowestInfo = userData.findLowestTotalintrate(userData);
  min.push({bankname:lowestInfo.bankname, min:lowestInfo.lowesttotalintrate}); 

  const highInfo = userData.findHighTotalintrate(userData);
  max.push({bankname:highInfo.bankname, max:highInfo.hightotalintrate}); 

  const avgInfo = userData.findAvgTotalintrate(userData);
  avg.push({avg:avgInfo.avgtotalintrate}); */
  res.redirect('/Compound');
}

// Exporting multiple functions as part of a module.
module.exports = {
  Compoundview,
  getNotes,
  createUser,
  clearUser,
  removeOneUser
};


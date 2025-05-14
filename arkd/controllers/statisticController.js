
const fs = require('fs');

// Function to handle rendering of the statistic view.
const statisticview = (req, res) => {
  // Reading the contents of 'data.json' synchronously.
  const jsonData = fs.readFileSync('data.json', 'utf-8');
  // Parsing the JSON data into a JavaScript object.
  const data = JSON.parse(jsonData);
  // Rendering the 'statisticview' template with the parsed data.
  res.render("statisticview", { data: data });
};

  
  module.exports = {
    statisticview,
    // Export other tag controllers
  };
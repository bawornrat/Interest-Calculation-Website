const express = require('express');
const compoundController = require('./controllers/compoundController');
const retirementController = require('./controllers/retirementController');
const statisticController = require('./controllers/statisticController');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
 
// parse data from url
app.use(bodyParser.urlencoded({ extended: true }));

// load static files such as image
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

// Include routes from different modules
app.get('/',compoundController.getNotes);
app.post('/CompoundInterest', compoundController.createUser);
app.get('/Compound', compoundController.Compoundview);
app.get('/retirement', retirementController.retirementview);
app.get('/statistic', statisticController.statisticview);

app.get('/clearUser', compoundController.clearUser);
app.get('/removeOneUser', compoundController.removeOneUser);
app.post('/retirementcal', retirementController.retirementcal);
//app.get('/ComparedInterest', compoundController.getUser);
//app.use('/CompoundInterest', require('./routes/CompoundInterest'));
//app.use('/ComparedInterest', require('./routes/ComparedInterest'));
//app.use('/login', require('./routes/login'));
//app.use('/', require('./routes/place'));



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

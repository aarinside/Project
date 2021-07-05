let express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    database = require('./database'),
    bodyParser = require('body-parser')

// Connect MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected')
}, error => {
    console.log('Cannot Connect' + error)

})

const userAPI = require('../manager-truck-api/routes/user.route');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// API
app.use('/api', userAPI);

//Create Port
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log('Connected yo port' + PORT)
})

module.exports = server;

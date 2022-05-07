const express = require('express')
const path = require('path');
//#var cookieParser = require('cookie-parser');
//#var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.disable('etag');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('trust proxy', true);

// [START session]
// Configure the session and session storage.
//#app.use(cookieParser());
//#app.use(bodyParser.json());
//#app.use(bodyParser.urlencoded({ extended: true }));//default false
// [END session]

//public static
app.use(express.static(path.join(__dirname, 'public')));

// Books
app.use('/scoreboard', require('./routes/scoreboard/crud'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
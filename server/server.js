const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const path = require('path');

const config = require('./config');

// MongoDB connect
const mongoose = require('mongoose');
mongoose.connect(config.db.mlabUrl, { useNewUrlParser: true });

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, '../public')));
// app.use('/', indexRouter);
app.use('/api/v1', restRouter);

// app.use((req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, '../public')});
// });

app.listen(config.app.port, () => {
  console.log('Server started at port: ' + config.app.port + '!');
});
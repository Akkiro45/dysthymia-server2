const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const _ = require('lodash');
const helmet = require('helmet');

const ml = require('./algorithm/mlData');
const { URL, DAY, checkDataAvailability } = require('./utility/utility');

const app = express();
const port = process.env.PORT ? process.env.PORT : 4000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  let resBody = {};
  let error = {};
  const token = req.header('x-auth');
  const fromUser = parseInt(req.query.fromUser);
  const headers = {
    'x-auth': token
  }
  if(token) {
    axios.get(`${URL}/stats/get`, { headers })
      .then(response=> {
        const check = checkDataAvailability(response.data.data);
        if(check.available) {
          ml.rawData(response.data.data)
            .then(score => {
              resBody.status = 'ok';
              if(score.score) {
                resBody.score = score.score;
                resBody.time = new Date().getTime() + (1 * 60 * 1000) ;
                resBody.startDay = score.weekDate.startDate;
                resBody.endDay = score.weekDate.endDate;
              } else {
                resBody.initialTime = (14 - score.dataSize) * DAY;
              }
              return res.status(200).send(resBody);
            });
        } else {
          resBody.status = 'ok';
          resBody.initialTime = check.initialTime;
          return res.status(200).send(resBody);
        }
      })
      .catch(e=> {
        console.log('error');
        console.log(e);
        if(e.response) {
          error.msg = 'Not Found!';
          resBody.error = error;
          resBody.status = 'error';
          return res.status(404).send(resBody);
        } else {
          error.msg = 'Server error!';
          resBody.status = 'error';
          resBody.error = error;
          return res.status(200).send(resBody);
        }
      });
  } else {
    error.msg = 'Invalid Token';
    resBody.status = 'error';
    resBody.error = error;
    return res.status(200).send(resBody);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {
  app
};

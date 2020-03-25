const moment = require('moment');

const URL = 'https://desolate-springs-80998.herokuapp.com';
const DAY = 86400000;
const checkDataAvailability = (data) => {
  if(data) {
    if(data.unlocks) {
      if(data.unlocks.length >= 2) {
        const start = moment(data.unlocks[0].date, 'DD/MM/YY').valueOf();
        const end = moment(data.unlocks[data.unlocks.length - 1].date, 'DD/MM/YY').valueOf();
        if(start && end) {
          const days = Math.trunc((end - start) / 86400000);
          if(days >= 14 && data.unlocks.length >= 14) {
            return { available: true };
          } else {
            return { available: false, initialTime: new Date().getTime() + (days * DAY) };
          }
        }
      }
    }
  }
  return { available: false, initialTime: new Date().getTime() + (14 * DAY) };
}

module.exports = {
  URL,
  DAY,
  checkDataAvailability
}

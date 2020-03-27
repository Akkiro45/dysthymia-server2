const getHTML = require('./getHTML');

const getMailOptions = (emailId, userName, score, startDay, endDay) => {
  return {
    from: 'dysthymiadev@gmail.com',
    to: emailId,
    subject: `${userName}'s Depression Score!`,
    html: getHTML(userName, score, startDay, endDay)
  }
}

module.exports = getMailOptions;

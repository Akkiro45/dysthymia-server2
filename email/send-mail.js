const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const getMailOptions = require('./mail-options');

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENT_ID, // ClientID
  process.env.CLIENT_SECRET, // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN
});

module.exports = (emailId, userName, score, startDay, endDay) => {
  return new Promise((resolve, reject) => {
    oauth2Client.getAccessToken()
      .then(tokens => {
        const accessToken = tokens.token;
        const AUTH = {
          type: 'OAuth2',
          user: 'dysthymiadev@gmail.com',
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken
        };
        const transporter = nodemailer.createTransport({
          // service: 'gmail',
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: AUTH
        });
        transporter.sendMail(getMailOptions(emailId, userName, score, startDay, endDay), (e, mailRes) => {
          if(e) {
            console.log(e);
            reject();
          }
          resolve();
        });
      })
      .catch(err => {
        console.log(err);
        reject()
      });
  });
}

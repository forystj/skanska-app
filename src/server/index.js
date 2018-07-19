const express = require('express');
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');
const app     = express();
const PORT    = process.env.PORT || 3002;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('*', function(req, res){
  res.sendFile('index.html', {root : './public/'})
});

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use('/send', function(req, res) {
  const SESCREDENTIALS = {
    accessKeyId: "YOUR_ID",
    secretAccessKey: "YOUR_ACCESS_KEY"
    };

  const transporter = nodemailer.createTransport(ses({
      region: "us-west-2",
      accessKeyId: SESCREDENTIALS.accessKeyId,
      secretAccessKey: SESCREDENTIALS.secretAccessKey
    }));

    const data = req.body;
    const mailOptions = {
      from: 'EMAIL_CONNECTED_TO_SECRET_KEYS',
      to: 'EMAIL_YOU_WANT_SENT_TO',
      subject: data.contactSubject,
      text: data.contactMessage
    };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    console.log('Data:' + data.contactName);
  });
  res.json(data);
});

app.listen(PORT, '0.0.0.0', () => console.log('Skanska App Running On PORT: ' + PORT));

// module.exports = app;

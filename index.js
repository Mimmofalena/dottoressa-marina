const express = require("express");
// const helmet = require("helmet");
const path = require("path");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const cors = require("cors");
// const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8080;

//data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.post(`/form`, (req, res, next) => {
  let { message, firstName, lastName, email } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_USER,
    subject: "Sending with SendGrid is Fun",
    html: `
  <div className="email" style="
             border: 1px solid black;
             padding: 20px;
             font-family: sans-serif;
             line-height: 2;
             font-size: 20px;
            ">
             <h2>Hai ricevuto una mail da:</h2>
             <p>Utente: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <br/>
             <p>Messaggio: <br/>${message}</p>

             </div>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send(200);
    })
    .catch((error) => {
      res.send(400);
    });
});
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}..`);
});

const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8080;

//data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.post(`/form`, (req, res, next) => {
  let { message, firstName, lastName, email } = req.body;
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "cucinotta.dom@gmail.com", // Change to your recipient
    from: "dombusiness89@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
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
      console.log("Email sent");
    })
    .catch((error) => {
      res.send(400);
      console.error(error);
    });
});
// app.post(`/form`, (req, res, next) => {
//   let { message, firstName, lastName, email } = req.body;
//   const transport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,

//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//     debug: true,
//     logger: true,
//   });

//   const mailOptions = {
//     from: process.env.MAIL_USER,
//     replyTo: email,
//     to: process.env.MAIL_TO,
//     subject: `Nuova mail ricevuta da ${email}`,
//     html: `<html>
//  <body><div className="email" style="
//             border: 1px solid black;
//             padding: 20px;
//             font-family: sans-serif;
//             line-height: 2;
//             font-size: 20px;
//             ">
//             <h2>Hai ricevuto una mail da:</h2>
//             <p>Utente: ${firstName} ${lastName}</p>
//             <p>Email: ${email}</p>
//             <br/>
//             <p>Messaggio: <br/>${message}</p>

//             </div> </body>
// </html>`,
//   };

//   transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       res.status(400);
//       return console.log(error);
//     }
//     console.log("Message sent:", info.messageId);
//   });

//   res.status(200);
//   res.end();
//   next();
// });
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname) + "./client/build", "index.html");
// });
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}..`);
});

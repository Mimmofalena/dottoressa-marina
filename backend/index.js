const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://www.dottoressamarinatricoli.it/"
  ); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 3000;
process.env.NODE_ENV = "development";
process.env.NODE_ENV = "production";
let URL = "";

if (process.env.NODE_ENV === "production") {
  URL = process.env.URL_PRODUCTION;
}
// else if (process.env.NODE_ENV === "development") {
//   URL = process.env.URL_DEVELOPMENT;
// }

app.use(express.static(path.resolve(__dirname, "/build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/json", (req, res) => {
//   res.json({ nome: "dio", cognome: "infame" });
// });
app.post(
  `http://www.dottoressamarinatricoli.it//api/form`,
  async (req, res, next) => {
    try {
      console.log(req.body);
      let { message, firstName, lastName, email } = req.body;

      const transport = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      await transport.sendMail({
        from: process.env.MAIL_USER,
        replyTo: email,
        to: process.env.MAIL_TO,
        subject: `Nuova mail ricevuta da ${email}`,
        html: `<div className="email" style="   
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
      });

      res.status(200);
      res.json({
        data: req.body,
      });
      res.end();
    } catch (err) {
      console.log(err);
      res.status(400);
    }
  }
);

console.log("we are in", process.env.NODE_ENV);
// console.log(process.env.URL_DEVELOPMENT);
// console.log(process.env.URL_PRODUCTION);
console.log("URL is", URL);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}..`);
});

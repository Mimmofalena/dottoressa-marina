const express = require("express");
const helmet = require("helmet");
const path = require("path");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 8080;
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, "../client/build")));

const whitelist = [
  "http://localhost:3000/",
  " http://localhost:8080/",
  "https://marinatricolidoc.herokuapp.com/",
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.get(`/`, (req, res, next) => {
  try {
    res.json({
      message: "Hello from server!",
    });
  } catch (err) {
    console.log(err);
  }
});

app.post(`/form`, async (req, res, next) => {
  try {
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
      data: {
        message,
        firstName,
        lastName,
        email,
      },
    });
    res.end();
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

// if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname), "client/build", "index.html");
});
// }

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}..`);
});

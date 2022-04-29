const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");

const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.static(path.resolve(__dirname, "/build")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/dottoressa-marina/send_mail", cors(), async (req, res, next) => {
  try {
    let { message, firstName, lastName, email } = req.body;

    const transport = nodemailer.createTransport({
      service: "gmail",
      //   host: process.env.MAIL_HOST,
      //   port: process.env.MAIL_PORT,
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
    res.end();
  } catch (err) {
    res.status(400);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000..");
});

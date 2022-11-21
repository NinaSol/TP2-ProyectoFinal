"use strict";
import nodemailer from "nodemailer";
import config from "../config.js";
import dotenv from "dotenv";
dotenv.config();

export default async function main(toEmail) {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL,
    to: toEmail,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent");
        }
      });
    }
  });
}

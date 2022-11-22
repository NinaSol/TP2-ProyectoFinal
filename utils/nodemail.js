"use strict";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export default async function enviarMail(toEmail, ticket) {
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
    subject: "Tu compra a sido procesada",
    html:
      "<h1>ticket:</h1>  " +
      ticket._id +
      "<br>" +
      "<p>Horario de compra: </p>" +
      ticket.fechaDeCompra +
      "<p>Pelicula: </p>" +
      ticket.nombre +
      "<p>Precio: </p>" +
      ticket.precio,
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

"use strict";

/**
 * ContactForm.js controller
 *
 * @description: A set of functions called "actions" of the `contact-form` plugin.
 */

require("dotenv").config();

const nodemailer = require("nodemailer");

const emailUtils = {
  getTransporter() {
    const transporter = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      tls: {
        ciphers: "SSLv3"
      },
      auth: {
        user: process.env.TRANSPORTER_EMAIL,
        pass: process.env.TRANSPORTER_EMAIL_PW
      }
    });
    return transporter;
  }
};

const buildMessage = (name, email, message) =>
  /*template*/
  `<p>Sender's name: ${name || "NO NAME GIVEN"}</p>
  <p>Sender's email: ${email || "NO EMAIL GIVEN"}</p>
  <hr/>
  <p>Message:</p>
  <p>${message || "NO MESSAGE GIVEN"}</p>
  `;

module.exports = {
  index: function(ctx) {
    const { name, email, message } = JSON.parse(ctx.request.body);
    const transporter = emailUtils.getTransporter();
    const mailOptions = {
      from: email,
      to: process.env.OWNER_EMAIL,
      subject: `Email from contact form from ${name || "UNKNOWN"}`,
      html: buildMessage(name, email, message)
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.error(error);
        ctx.send(error);
      } else {
        ctx.send("Email sent: " + info.response);
      }
    });
  }
};

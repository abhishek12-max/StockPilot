const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (to, subject, html) => {
  await resend.emails.send({
    from: "StockPilot <noreply@codeabhi.in>",
    to,
    subject,
    html,
  });
};

module.exports = sendMail;
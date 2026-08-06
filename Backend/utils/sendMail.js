const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);
const sendMail = async (email, subject, html) => {
  try {
    await resend.emails.send({
      from: "TradeX <onboarding@resend.dev>",
      to: email,
      subject,
      html,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = sendMail;


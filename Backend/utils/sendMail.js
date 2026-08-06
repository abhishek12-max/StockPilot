const { Resend } = require("resend");

console.log("===== RESEND FILE LOADED =====");
console.log("API KEY EXISTS:", !!process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (email, subject, html) => {
  console.log("Sending email to:", email);

  const result = await resend.emails.send({
    from: "TradeX <onboarding@resend.dev>",
    to: email,
    subject,
    html,
  });

  console.log("RESEND RESULT:", result);
  return result;
};

module.exports = sendMail;
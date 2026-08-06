const transporter= require("../config/mail.config");
const sendMail= async (email,subject,html) => {
     try {
         const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: html
}
  return  await transporter.sendMail(mailOptions)
     } catch (error) {
          throw new Error(error.message);
     }
   
}

module.exports= sendMail;
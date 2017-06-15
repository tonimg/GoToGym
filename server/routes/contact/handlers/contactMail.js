const nodemailer = require('nodemailer')

function contactMail (req, res) {
  const { name, email, subject, message } = req.body

  const myMail = process.env.MAIL_ACCOUNT
  const myPassword = process.env.MAIL_PASSWORD

  console.log(myMail)
  console.log(myPassword)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myMail,
      pass: myPassword
    }
  })

  const subjectMail = 'You have a contact request from your webpage!!!'
  const messageMail = `
${name} with email ${email} has sent you this message:
  Subject: ${subject}
  Message: ${message}
`
  // setup email data with unicode symbols
  let mailOptions = {
    from: email,
    to: process.env.MAIL_ACCOUNT,
    subject: subjectMail,
    text: messageMail
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
    res.send('Your message has been sent to us!')
  })
}

module.exports = contactMail

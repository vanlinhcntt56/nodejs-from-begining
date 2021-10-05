const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email, 
    from: 'vanlinh.cntt56@gmail.com', 
    subject: 'Thanks for joining in!',
    text: `<strong>Welcome to the app, ${name}</strong>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

const sendCancelationEmail = (email, name) => {
  const msg = {
    to: email, 
    from: 'vanlinh.cntt56@gmail.com', 
    subject: 'Thanks for joining in!',
    text: `<strong>Goodbye, ${name}</strong>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}

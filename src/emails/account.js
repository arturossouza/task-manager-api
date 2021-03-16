const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRIG_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arturossouza@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}! Let me know how to get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arturossouza@gmail.com',
        subject: 'Why are you leaving?',
        text: `Bye bye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

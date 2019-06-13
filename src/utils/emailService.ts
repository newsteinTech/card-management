
import { mailTransporter } from 'utils/mailTransporter'
const transporter = mailTransporter.transporter;

export class EmailService {
    static sendWelcome(name, email, password) {
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Newstein " <info@newstein.in>', // sender address
            to: `${email}, ${email}`, // list of receivers
            subject: 'Welcome to mSupply', // Subject line
            text:  `Hi ${name},

            Greetings from mSupply.

            As per your request, your password has been updated. New Password is '${password}'. Please login to the system and Change the Password.

            Regards
            Team mSupply`
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }
}
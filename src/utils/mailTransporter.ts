import { nodemailer } from "nodemailer"

export class mailTransporter {
    
    public static transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // "",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "", // "", //  user
            pass: "" //"" //  password
        }
    });
}

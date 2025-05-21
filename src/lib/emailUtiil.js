import nodemailer from "nodemailer";


export async function sendCustomerEmail(data){
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Or use another SMTP provider
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"${data.name}" <${data.email}>`,
        to: process.env.CONTACT_EMAIL, // Your receiving email
        subject: "Request for contact",
        text: data.message,
        html: `<p><strong>From:</strong> ${data.name} (${data.email})</p>
           <p><strong>Message:</strong></p>
           <p>${data.message}</p>`,
    };

    await transporter.sendMail(mailOptions);
}

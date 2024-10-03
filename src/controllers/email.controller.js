import nodemailer from "nodemailer";
import generateInvoice from "./invoice.controller.js";
import path from "path";
import { fileURLToPath } from "url";


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pritishpatra06@gmail.com",
    pass: "process.env.EMAIL_PASS", 
  },
});


async function sendInvoiceEmail(invoiceData, recipientEmail) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    
    const filePath = path.join(__dirname, "invoice.pdf");
    await generateInvoice(invoiceData, filePath);

    
    const mailOptions = {
      from: "pritishpatra06@gmail.com",
      to: "pritishpatra29@gmail.com", 
      subject: "Your Invoice",
      text: "Please find attached your invoice.",
      attachments: [
        {
          filename: "invoice.pdf",
          path: filePath, 
        },
      ],
    };

    
    await transporter.sendMail(mailOptions);
    console.log("Invoice email sent successfully");
  } catch (error) {
    console.error("Error sending invoice email:", error);
  }
}


export default sendInvoiceEmail;

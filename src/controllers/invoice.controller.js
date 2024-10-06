import fs from "fs";
import PDFDocument from "pdfkit";

// Function to generate a PDF invoice
function generateInvoice(invoiceData, filePath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Add content to the PDF
    doc.fontSize(25).text("Invoice", 100, 80);
    doc.fontSize(12).text(`Invoice Number: ${invoiceData.number}`, 100, 120);
    doc.text(`Date: ${invoiceData.date}`, 100, 140);
    doc.text(`Customer Name: ${invoiceData.customer}`, 100, 160);

    
    // Add items table
    let itemsStartY = 200;
    invoiceData.items.forEach((item, index) => {
      doc.text(
        `Item: ${item.description} - ${item.price} USD`,
        100,
        itemsStartY + index * 20
      );
    });

    // Close the PDF and save it
    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

export default generateInvoice;

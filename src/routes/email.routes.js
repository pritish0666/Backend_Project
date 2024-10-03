import sendInvoiceEmail from "../controllers/email.controller.js";


import { Router } from "express";   

const router = Router();

router.post("/send-invoice", async (req, res) => {
  const { email, invoiceData } = req.body; // Data from frontend

  try {
    await sendInvoiceEmail(invoiceData, email);
    res.status(200).json({ message: "Invoice sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send invoice", error });
  }
});

export default router;
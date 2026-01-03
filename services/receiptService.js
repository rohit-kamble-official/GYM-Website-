import { jsPDF } from 'jspdf';
import { CLUB_DETAILS } from '../constants';

export const generateReceiptPDF = (transaction) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(15, 15, 15);
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text(CLUB_DETAILS.name, 105, 25, { align: 'center' });
  
  // Content
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(16);
  doc.text('PAYMENT RECEIPT', 105, 55, { align: 'center' });
  
  doc.setFontSize(12);
  let y = 70;
  const lineSpacing = 10;
  
  doc.text(`Transaction ID: ${transaction.transactionId}`, 20, y); y += lineSpacing;
  doc.text(`Date: ${transaction.date}`, 20, y); y += lineSpacing;
  doc.text(`Member Name: ${transaction.userName}`, 20, y); y += lineSpacing;
  doc.text(`Email: ${transaction.userEmail}`, 20, y); y += lineSpacing;
  doc.text(`Phone: ${transaction.userPhone}`, 20, y); y += lineSpacing;
  
  y += 5;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, 190, y);
  y += 10;
  
  doc.setFontSize(14);
  doc.text('Membership Details:', 20, y); y += lineSpacing;
  
  doc.setFontSize(12);
  doc.text(`Plan: ${transaction.planName}`, 20, y); y += lineSpacing;
  doc.text(`Amount Paid: INR ${transaction.amount.toLocaleString()}`, 20, y); y += lineSpacing;
  doc.text(`Status: PAYMENT SUCCESSFUL`, 20, y); y += lineSpacing;
  
  y += 20;
  doc.setFontSize(10);
  doc.text('Gym Location:', 20, y); y += 5;
  doc.text(CLUB_DETAILS.address, 20, y); y += 5;
  doc.text(`Contact: ${CLUB_DETAILS.phone} | ${CLUB_DETAILS.email}`, 20, y);
  
  doc.text('Thank you for joining Maharudraya Fitness!', 105, 270, { align: 'center' });
  
  // Save PDF
  doc.save(`Receipt_${transaction.transactionId}.pdf`);
  return doc;
};
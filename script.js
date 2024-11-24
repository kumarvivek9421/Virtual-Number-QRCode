// Include QRCode library (from a CDN)
const loadQRCodeLibrary = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.onload = () => console.log('QRCode library loaded');
    document.head.appendChild(script);
  };
  
  loadQRCodeLibrary();
  
  document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const qrCodeContainer = document.getElementById('qrCode');
  
    generateBtn.addEventListener('click', () => {
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
  
      if (!phoneNumber) {
        alert('Please enter a phone number');
        return;
      }
  
      // Clear any previous QR Code
      qrCodeContainer.innerHTML = '';
  
      // Generate QR Code with "tel:" scheme
      new QRCode(qrCodeContainer, {
        text: `tel:${phoneNumber}`,
        width: 250,
        height: 250,
      });
  
      console.log(`QR Code generated for: tel:${phoneNumber}`);
    });
  });
  
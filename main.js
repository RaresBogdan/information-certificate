const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", () => {
  window.print();
});


// Initialize the Pikaday date picker
const dateInput = document.getElementById('certificate_date');
const picker = new Pikaday({
  field: dateInput,
  format: 'YYYY-MM-DD', // Modify the format as needed
  toString(date) {
    return date.toISOString().slice(0, 10);
  },
});

// Initialize the signature pad
const signatureCanvas = document.getElementById('signature');
const signaturePad = new SignaturePad(signatureCanvas);

// Clear signature when the "Clear" button is clicked
const clearSignatureBtn = document.getElementById('clearSignature');
clearSignatureBtn.addEventListener('click', () => {
  signaturePad.clear();
});

// Initialize the signature pad for the second signature pad with ID "signatureSecond"
const signatureCanvasSecond = document.getElementById('signatureSecond');
const signaturePadSecond = new SignaturePad(signatureCanvasSecond);

// Clear signature when the "Clear" button is clicked for the second signature pad
const clearSignatureBtnSecond = document.getElementById('clearSignatureSecond');
clearSignatureBtnSecond.addEventListener('click', () => {
  signaturePadSecond.clear();
});



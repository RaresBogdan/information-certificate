function validateForm() {
  const requiredFields = document.querySelectorAll('[required]');
  const errorMessages = [];

  requiredFields.forEach(field => {
      if (field.type === 'radio') {
          const radioGroup = document.getElementsByName(field.name);
          let radioChecked = false;

          radioGroup.forEach(radio => {
              if (radio.checked) {
                  radioChecked = true;
              }
          });

          if (!radioChecked) {
              const label = document.querySelector(`label[for="${field.name}"]`);
              errorMessages.push(`Please select an option for "${label.innerText}"`);
          }
      } else {
          if (!field.value.trim()) {
              errorMessages.push(`Please fill in the "${field.name.replace(/_/g, ' ')}" field`);
          }
      }
  });

  if (errorMessages.length > 0) {
      alert(errorMessages.join('\n'));
      return false;
  }

  return true;
}

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
  if (validateForm()) {
      window.print();
  }
});



// Initialize the Pikaday date picker
const dateInput = document.getElementById('certificate_date');
const picker = new Pikaday({
  field: dateInput,
  format: 'YYYY-MM-DD',
  toString(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  },
});

// Initialize the signature pad
const signatureCanvas = document.getElementById('signature');
const signaturePad = new SignaturePad(signatureCanvas);

// Clear signature when the "Clear" button is clicked
const clearSignatureBtn = document.getElementById('clearSignature');
clearSignatureBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  signaturePad.clear(); // Clear the signature canvas
});

// Initialize the signature pad for the second signature pad with ID "signatureSecond"
const signatureCanvasSecond = document.getElementById('signatureSecond');
const signaturePadSecond = new SignaturePad(signatureCanvasSecond);

// Clear signature when the "Clear" button is clicked for the second signature pad
const clearSignatureBtnSecond = document.getElementById('clearSignatureSecond');
clearSignatureBtnSecond.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  signaturePadSecond.clear(); // Clear the signature canvas
});


// Initialize the signature pad for the second signature pad with ID "signatureSecond"
const signatureCanvasThird = document.getElementById('signatureThird');
const signaturePadThird = new SignaturePad(signatureCanvasThird);

// Clear signature when the "Clear" button is clicked for the second signature pad
const clearSignatureBtnThird = document.getElementById('clearSignatureThird');
clearSignatureBtnThird.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the form from submitting
  signaturePadThird.clear(); // Clear the signature canvas
});

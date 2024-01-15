
(function () {
let form = document.querySelector('#contact-form');
let emailInput = document.querySelector('#contact-email');

function validateEmail() {
    
    let value = emailInput.value;
    let hasAtSign = value.indexOf('@') > -1;
    let hasDot = value.indexOf ('.') > -1;
    return value && hasAtSign && hasDot;
}
    function showErrorMessage(input, message) {
        let container = input.parentElement; // The .input-wrapper
      
        // Check and Remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) {
          container.removeChild(error);
        }
      
        // Now add the error if the message isn’t empty
        if (message) {
          let error = document.createElement('div');
          error.classList.add('error-message');
          error.innerText = message;
          container.appendChild(error);
        }
      }
      function validateEmail() {
        let value = emailInput.value;
      
        if (!value) {
          showErrorMessage(emailInput, 'Email is a required field.');
          return false;
        }
      
        if (value.indexOf('@') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid email address.');
          return false;
        }
      
        if (value.indexOf('.') === -1) {
          showErrorMessage(emailInput, 'You must enter a valid email address.');
          return false;
        }
      
        showErrorMessage(emailInput, null);
        return true;
      }
      form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        if (validateForm()){
            alert('Success!');
        }
      })
    })();
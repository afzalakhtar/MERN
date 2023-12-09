// Check and Set Error Message
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
// Set Success Message
const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
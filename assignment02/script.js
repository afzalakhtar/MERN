form.addEventListener('submit', e => {
    var form = document.getElementById('form');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');

    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setErrorFor(username, 'Username should be filled');
    } else {
        setSuccessFor(username);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email  should be filled');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email should be valid');
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password  should be filled');
    } else {
        setSuccessFor(password);
    }
    
    if(password2Value === '') {
        setErrorFor(password2, 'Re-Password  should be filled');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Re-Password should match with Password');
    } else{
        setSuccessFor(password2);
        window.location.replace("signin.html");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
    
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
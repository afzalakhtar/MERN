console.log('js loaded!')
var form = document.getElementById('formReg');
form.addEventListener('submit', e => {
    confirm.log(123546)
    // var form = document.getElementById('regi_form');
    var userName = document.getElementById('username');
    var email = document.getElementById('email');
    var pass = document.getElementById('password');
    var pass2 = document.getElementById('password2');

    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    console.log(12)
    const userVal = userName.value.trim();
    const emailVal = email.value.trim();
    const passVal = pass.value.trim();
    const pass2Val = pass2.value.trim();

    if(userVal == ''){
        setErrorFor(userName, 'User name should not be blank')
    }else{
        setSuccessFor(userName)
    }

    if(emailVal == ''){
        setErrorFor(emailVal, 'Email should not be blank')
    }else if (!isEmail(emailValue)) {
        setErrorFor(emailVal, 'Email should be valid');
    } else{
        setSuccessFor(emailVal)
    }

    if(passVal == ''){
        setErrorFor(passVal, 'Password should not be blank')
    }else{
        setSuccessFor(passVal)
    }

    if(pass2Val == ''){
        setErrorFor(pass2Val, 'Re-Password should not be blank')
    } else if(passVal !== pass2Val) {
        setErrorFor(password2, 'Re-Password should match with Password');
    } else{
        setSuccessFor(pass2Val)
        window.location.replace("signin.html");
    }


}

const setErrorFor = (input, message) => {
    console.log(13)
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
const setSuccessFor = (input) =>{
    console.log(14)
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

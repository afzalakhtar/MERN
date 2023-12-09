let userName, email, pass = document.getElementById('password'), pass2,
    form = document.querySelector('#formReg');

    
// Signup Form Validation
    form.addEventListener("submit", (event) => {
    userName = document.getElementById('username');
    email = document.getElementById('email');
    pass2 = document.getElementById('password2');

    event.preventDefault();

    checkInputs();
});


const checkInputs = () => {
    const userVal = userName.value.trim(), emailVal = email.value.trim(), passVal = pass.value.trim(),
        pass2Val = pass2.value.trim(), regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/, mailformat = regex.test(emailVal);

    if (userVal == '') {
        setErrorFor(userName, 'User name should not be blank')
    } else {
        setSuccessFor(userName)
    }

    if (emailVal == '' || !mailformat) {
        setErrorFor(email, 'Please enter a valid email address')
    } else {
        setSuccessFor(email)
    }

    if (passVal == '') {
        setErrorFor(pass, 'Password should not be blank')
    } else if (passVal.length < 6) {
        setErrorFor(pass, 'Minimum number of characters is 6');
    } else if (passVal.length > 12) {
        setErrorFor(pass, 'Maximum number of characters is 12');
    }
    else {
        setSuccessFor(pass)
    }

    if (pass2Val == '') {
        setErrorFor(pass2, 'Re-Password should not be blank')
    } else if (passVal !== pass2Val) {
        setErrorFor(pass2, 'Re-Password should match with Password');
    } else {
        setSuccessFor(pass2)
        window.location.replace("signin.html");
    }


}

// Check password strength
const strengthbar = document.getElementById("meter");
pass.addEventListener("keyup", function (e) {
    checkpassword(pass.value);
    e.preventDefault();
});
const checkpassword = (password) => {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!.]+/)) {
        strength += 1;

    }
    let progressBar = document.querySelector('progress')

    switch (strength) {
        case 0:
            strengthbar.value = 0;
            break;

        case 1:
            strengthbar.value = 25;
            setErrorFor(pass, 'Bad');
            progressBar.classList.add("poor");
            break;

        case 2:
            strengthbar.value = 50;
            setErrorFor(pass, 'Poor');
            progressBar.className = '';
            progressBar.classList.add("poor");
            break;

        case 3:
            strengthbar.value = 75;
            setErrorFor(pass, 'Okay, but not Strong!');
            progressBar.className = '';
            progressBar.classList.add("okay");
            break;

        case 4:
            strengthbar.value = 100;
            setErrorFor(pass, 'Excellent, Strong!');
            progressBar.className = '';         
            progressBar.classList.add("good");
            break;
    }
}

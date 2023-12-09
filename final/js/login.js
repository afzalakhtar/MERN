// Signin Form validation
function checkLogin(){
    const loginForm = document.querySelector('#formsi'), logInUser = document.getElementById('username'),
    logInPass = document.querySelector('#password');
    loginForm.addEventListener('submit', (event) => {
        
        
        logInUserVal = logInUser.value.trim();
        logInPassVal = logInPass.value.trim();

        event.preventDefault();
        if(logInUserVal == ''){
            setErrorFor(logInUser, 'User name should not be blank')
        }else{
            setSuccessFor(logInUser)
        }

        if(logInPassVal == ''){
            setErrorFor(logInPass, 'Password should not be blank')
        }else{
            setSuccessFor(logInPass)
            window.location.replace("index.html");
        }
    });
}


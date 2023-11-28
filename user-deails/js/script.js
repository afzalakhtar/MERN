

function validateForm() {
    // Get the form elements
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
  
    // Check if the username field is empty
    if (username.value == "") {
      alert("Please enter a username");
      return false;
    }
  
    // Check if the email field is empty
    if (email.value == "") {
      alert("Please enter an email address");
      return false;
    }
  
    // Check if the password field is empty
    if (password.value == "") {
      alert("Please enter a password");
      return false;
    }
  
    // Check if the confirm password field is empty
    if (confirmPassword.value == "") {
      alert("Please confirm your password");
      return false;
    }
  
    // Check if the passwords match
    if (password.value != confirmPassword.value) {
      alert("The passwords do not match");
      return false;
    }
  
    // The form is valid
    return true;
  }
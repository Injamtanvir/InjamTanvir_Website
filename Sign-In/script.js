document.addEventListener('DOMContentLoaded', function() {
    var signup = document.querySelector('.signup');
    var signin = document.querySelector('.signin');
    var signUpScreen = document.querySelector('.signup-screen');
    var signInScreen = document.querySelector('.signin-screen');
    var a = false;

    signup.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Toggle between sign-up and sign-in screens
        toggleScreens();
    });

    signin.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Toggle between sign-up and sign-in screens
        toggleScreens();
    });

    var toggleScreens = function() {
        signup.classList.toggle('option-toggle');
        signin.classList.toggle('option-toggle');
        signInScreen.classList.toggle('non-display');
        signUpScreen.classList.toggle('non-display');
        a = !a;
    };

    var handleSignup = function() {
        // Here, you can implement any front-end validation or operations you need before redirection
        window.location.href = '/Menu/menu.html'; // Redirects to the menu page after sign up
    };

    var handleSignin = function() {
        // Here, you can implement any front-end validation or operations you need before redirection
        window.location.href = '/Menu/menu.html'; // Redirects to the menu page after sign in
    };

    // Adding event listeners to sign-up and sign-in buttons
    document.getElementById('signup-form').addEventListener('submit', handleSignup);
    document.getElementById('signin-form').addEventListener('submit', handleSignin);
});

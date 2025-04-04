function toggleForms() {
    var signupForm = document.getElementById('signup-form');
    var signinForm = document.getElementById('signin-form');
    if (signupForm.style.display === 'none') {
      signupForm.style.display = 'block';
      signinForm.style.display = 'none';
    } else {
      signupForm.style.display = 'none';
      signinForm.style.display = 'block';
    }
  }
  
  
  function handleSignup() {
    // Here, you can implement any front-end validation or operations you need before redirection
    window.location.href = '/Menu/menu.html'; // Redirects to the Dashboard after sign up
  }
  
  function handleSignin() {
    // Here, you can implement any front-end validation or operations you need before redirection
    window.location.href = '/Menu/menu.html'; // Redirects to the Dashboard after sign in
  }

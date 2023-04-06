let email = document.getElementById('email');
let button = document.getElementById('button');

function validateEmail(email) {
    const ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(email);
}

email.addEventListener('keydown', function() {
  let email = this.value;
  
  if(validateEmail(email)) {
    button.classList.add('is-active');
  }
});

button.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.add('is-done','is-active');
  
  setTimeout(function(){ 
    button.innerHTML = "Thanks! Check Your Email."
  }, 500);
});
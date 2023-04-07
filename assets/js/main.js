let emailNews = document.getElementById('email');
let buttonNews = document.getElementById('button');

function validateEmail(email) {
    const ex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return ex.test(emailNews);
}

email.addEventListener('keydown', function() {
  let emailNews = this.value;
  
  if(validateEmail(email)) {
    buttonNews.classList.add('is-active');
  }
});

buttonNews.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.add('is-done','is-active');
  
  setTimeout(function(){ 
    buttonNews.innerHTML = "Thanks! Check Your Email."
  }, 500);
});
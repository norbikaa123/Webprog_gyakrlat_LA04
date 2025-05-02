document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const location = document.getElementById('location').value.trim();
  const message = document.getElementById('message').value.trim();
  const alertBox = document.getElementById('formAlert');
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  if ([name, email, subject, location, message].some(f => f.length < 10) || !isValidEmail(email)) {
    alertBox.className = 'alert alert-danger';
    alertBox.textContent = 'Minden mezőt ki kell tölteni! A szöveges mezők legalább 10 karakteresek legyenek, és az email cím formátuma is legyen helyes.';
    alertBox.classList.remove('d-none');
  } else {
    alertBox.className = 'alert alert-success';
    alertBox.textContent = 'Az üzeneted sikeresen elküldve!';
    alertBox.classList.remove('d-none');
    this.reset();
  }
});

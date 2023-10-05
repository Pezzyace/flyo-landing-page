const emailInput = document.getElementById('email-input');
const error = document.getElementById('error');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener("click", () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(emailInput.value.trim())) {
    error.style.display = "block";
  }
  else{
   error.style.display = 'none';
   alert('received');
  }

})
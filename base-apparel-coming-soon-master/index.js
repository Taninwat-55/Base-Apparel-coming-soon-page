const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorIcon = document.createElement('img');
errorIcon.src = './images/icon-error.svg';
errorIcon.className = 'error-icon';
errorIcon.style.display = 'none';
errorIcon.style.position = 'absolute';
errorIcon.style.right = '30%';
errorIcon.style.top = '13px';
emailForm.appendChild(errorIcon);
const arrow = document.querySelector('.arrow');

arrow.addEventListener('click', (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailRegex.test(emailValue)) {
    emailForm.classList.add('error');
    errorIcon.style.display = 'block';
  } else {
    emailForm.classList.remove('error');
    errorIcon.style.display = 'none';
    emailInput.value = '';
    alert('Thank you for subscribing!');
  }
});

emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue && emailRegex.test(emailValue)) {
    emailForm.classList.remove('error');
    errorIcon.style.display = 'none';
  }
});

emailForm.addEventListener('submit', (e) => {
  e.preventDefault();
  arrow.click();
});

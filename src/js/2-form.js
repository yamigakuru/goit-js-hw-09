let formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  } else if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  saveToLocalStorage();
});

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email || '';
    messageInput.value = formData.message || '';
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: "", message: "" };
  form.reset();
});

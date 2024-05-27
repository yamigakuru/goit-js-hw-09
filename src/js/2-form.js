let formData = {
  email: '',
  message: '',
};

function saveFormData() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
}

function clearFormData() {
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
}

window.addEventListener('load', loadFormData);

document
  .querySelector('.feedback-form')
  .addEventListener('input', function (event) {
    formData[event.target.name] = event.target.value;
    saveFormData();
  });

document
  .querySelector('.feedback-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
      alert('Fill please all fields');
    } else {
      console.log(formData);
      clearFormData();
    }
  });

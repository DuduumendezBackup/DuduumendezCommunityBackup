const welcomeMessage = document.getElementById('welcome-message');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    if (name !== '') {
        welcomeMessage.textContent = `Welcome, ${name}! in DUDUU_MENDEZ COMMUNITY`;
        nameForm.style.display = 'none';
    }
});
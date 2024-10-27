const form = document.getElementById('resume-form') as HTMLFormElement;
const dynamicResume = document.getElementById('dynamic-resume') as HTMLElement;

const dynamicName = document.getElementById('dynamic-name') as HTMLElement;
const dynamicEmail = document.getElementById('dynamic-email') as HTMLElement;
const dynamicPhone = document.getElementById('dynamic-phone') as HTMLElement;
const dynamicEducation = document.getElementById('dynamic-education') as HTMLElement;
const dynamicSkills = document.getElementById('dynamic-skills') as HTMLElement;

// Event listener 
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // Prevent default form submission

    // Capture Form Values
    const nameInput = (document.getElementById('name-input') as HTMLInputElement).value.trim();
    const emailInput = (document.getElementById('email-input') as HTMLInputElement).value.trim();
    const phoneInput = (document.getElementById('phone-input') as HTMLInputElement).value.trim();
    const educationInput = (document.getElementById('education-input') as HTMLInputElement).value.trim();
    const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value.trim();

    // Validation
    if (!nameInput || !emailInput || !phoneInput || !educationInput || !skillsInput) {
        alert('Please fill in all fields.');
        return;
    }

    // Populate Resume
    dynamicName.textContent = nameInput;
    dynamicEmail.textContent = `Email: ${emailInput}`;
    dynamicPhone.textContent = `Phone: ${phoneInput}`;
    dynamicEducation.textContent = educationInput;

    // Populate Skills
    dynamicSkills.innerHTML = '';
    const skills = skillsInput.split(','); // Split skills by comma
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        dynamicSkills.appendChild(li);
    });

    // Show the Resume
    dynamicResume.classList.remove('hidden');

    // Construct WhatsApp Message
    const message = `Name: ${nameInput}\nEmail: ${emailInput}\nPhone: ${phoneInput}\nEducation: ${educationInput}\nSkills: ${skillsInput}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '923172813709'; // Update with your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 1000);
});

// Make Resume Editable
const editButton = document.getElementById('edit-button') as HTMLButtonElement;
const nameInputField = document.getElementById('name-input') as HTMLInputElement;
const emailInputField = document.getElementById('email-input') as HTMLInputElement;
const phoneInputField = document.getElementById('phone-input') as HTMLInputElement;
const educationInputField = document.getElementById('education-input') as HTMLInputElement;
const skillsInputField = document.getElementById('skills-input') as HTMLInputElement;

// Event listener for edit button
editButton.addEventListener('click', () => {
    nameInputField.value = dynamicName.textContent || '';
    emailInputField.value = dynamicEmail.textContent?.replace('Email: ', '') || '';
    phoneInputField.value = dynamicPhone.textContent?.replace('Phone: ', '') || '';
    educationInputField.value = dynamicEducation.textContent || '';
    skillsInputField.value = dynamicSkills.innerHTML.split('<li>').map(li => li.replace('</li>', '').trim()).join(', ');

    // Show form for editing
    form.classList.remove('hidden');
});




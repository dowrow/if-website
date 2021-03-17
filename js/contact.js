const YEARLY_ORDERS_PARAM_NAME = 'entry.71325983';
const EMAIL_PARAM_NAME = 'entry.1587798568';
const MESSAGE_PARAM_NAME = 'entry.596173072';
const FORM_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwAWNkeoXgKi_vvmBrefbK_sDhg-VqQsXSvcscteSv7-p3mA/formResponse';

const contactForm = document.querySelector('.contact__form');
const contactInputs = document.querySelector('.contact__inputs');
const contactThankYou = document.querySelector('.contact__thank-you');
const yearlyOrdersInput = document.querySelector('#contact-yearly-orders');
const emailInput = document.querySelector('#contact-email');
const messageInput = document.querySelector('#contact-message');
const formButton = document.querySelector('.contact__button');
const formButtonText = document.querySelector('.contact__button-text');
const formButtonCheck = document.querySelector('.contact__button-check');

async function submitFormData() {
    const body = new FormData();

    body.append(YEARLY_ORDERS_PARAM_NAME, yearlyOrdersInput.value);
    body.append(EMAIL_PARAM_NAME, emailInput.value);
    body.append(MESSAGE_PARAM_NAME, messageInput.value);
    
    await fetch(FORM_URL, {
        method: 'POST',
        body
    });
}

function displaySuccess() {
    formButton.disabled = true;
    formButtonText.classList.add('contact__button-text--hidden');
    formButtonCheck.classList.add('contact__button-check--visible');
    contactInputs.classList.add('contact__inputs--hidden');
    contactThankYou.classList.add('contact__thank-you--transition');
    contactThankYou.classList.add('contact__thank-you--visible');
}

function onSubmit(event) {
    event.preventDefault();
    displaySuccess();
    submitFormData();
}

contactForm.addEventListener('submit', onSubmit);
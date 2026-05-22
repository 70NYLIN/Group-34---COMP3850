const state = {
  role: '',
  interest: ''
};

function showStep(step) {
  document.querySelectorAll('.tt-step').forEach((section) => {
    section.classList.add('tt-hidden');
  });

  document.getElementById(step).classList.remove('tt-hidden');

  const progressMap = {
    step1: '33%',
    step2: '66%',
    step3: '100%',
    confirmStep: '100%'
  };

  const counterMap = {
    step1: 'Step 1 of 3',
    step2: 'Step 2 of 3',
    step3: 'Step 3 of 3',
    confirmStep: 'Complete'
  };

  document.getElementById('progressBar').style.width = progressMap[step];
  document.getElementById('stepCount').textContent = counterMap[step];
}

function setupOptions(containerId, stateKey, nextBtnId) {
  const container = document.getElementById(containerId);
  const buttons = container.querySelectorAll('.tt-option');
  const nextBtn = document.getElementById(nextBtnId);

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((button) => {
        button.classList.remove('selected');
      });

      btn.classList.add('selected');
      state[stateKey] = btn.getAttribute('data-value');
      nextBtn.disabled = false;
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

setupOptions('roleOptions', 'role', 'next1');
setupOptions('programOptions', 'interest', 'next2');

document.getElementById('next1').addEventListener('click', () => {
  showStep('step2');
});

document.getElementById('next2').addEventListener('click', () => {
  showStep('step3');
});

document.getElementById('back2').addEventListener('click', () => {
  showStep('step1');
});

document.getElementById('back3').addEventListener('click', () => {
  showStep('step2');
});

document.getElementById('submitBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let ok = true;

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';

  if (!name) {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    ok = false;
  }

  if (!email) {
    document.getElementById('emailError').textContent = 'Please enter your email.';
    ok = false;
  } else if (!isValidEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    ok = false;
  }

  if (!ok) return;

  document.getElementById('summary').innerHTML = `
    <div class="tt-summary-row">
      <strong>Reference ID</strong>
      <span>#TT2026</span>
    </div>

    <div class="tt-summary-row">
      <strong>Role</strong>
      <span>${state.role}</span>
    </div>

    <div class="tt-summary-row">
      <strong>Area of Interest</strong>
      <span>${state.interest}</span>
    </div>

    <div class="tt-summary-row">
      <strong>Name</strong>
      <span>${name}</span>
    </div>

    <div class="tt-summary-row">
      <strong>Email</strong>
      <span>${email}</span>
    </div>

    <div class="tt-summary-row">
      <strong>Message</strong>
      <span>${message || 'N/A'}</span>
    </div>
  `;

  showStep('confirmStep');
});

document.querySelectorAll('.tt-faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const answer = button.nextElementSibling;

    button.setAttribute('aria-expanded', String(!expanded));

    if (!expanded) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});

showStep('step1');
// Linear Progress Bar Logic
(function () {
    const form = document.getElementById('form-linear');
    const progressBar = document.getElementById('progress-bar-linear');
    const nextButton = document.getElementById('next-button-linear');
    const submitButton = document.getElementById('submit-button-linear');
    const formSteps = form.querySelectorAll('.form-step');
  
    let currentStep = 0;
  
    function updateProgressBar() {
        const progress = ((currentStep + 1) / formSteps.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
  
    function showStep(step) {
        formSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
        nextButton.style.display = step < formSteps.length - 1 ? 'block' : 'none';
        submitButton.style.display = step === formSteps.length - 1 ? 'block' : 'none';
    }
  
    nextButton.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateProgressBar();
            showStep(currentStep);
        }
    });
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Linear Form Submitted!');
    });
  
    showStep(currentStep);
    updateProgressBar();
})();


// Circle Progress Bar Logic
(function () {
    const form = document.getElementById('form-circles');
    const circles = form.querySelectorAll('.circle');
    const lines = form.querySelectorAll('.line');
    const nextButton = document.getElementById('next-button-circles');
    const submitButton = document.getElementById('submit-button-circles');
    const formSteps = form.querySelectorAll('.form-step');
  
    let currentStep = 0;
  
    function updateProgressCircles() {
        circles.forEach((circle, index) => {
            circle.classList.toggle('active', index <= currentStep);
            circle.classList.toggle('completed', index < currentStep);
        });
  
        lines.forEach((line, index) => {
            line.classList.toggle('active', index < currentStep);
        });
    }
  
    function showStep(step) {
        formSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
        nextButton.style.display = step < formSteps.length - 1 ? 'block' : 'none';
        submitButton.style.display = step === formSteps.length - 1 ? 'block' : 'none';
    }
  
    nextButton.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateProgressCircles();
            showStep(currentStep);
        }
    });
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Circle Form Submitted!');
    });
  
    showStep(currentStep);
    updateProgressCircles();
})();


// Basic Progress Bar Logic
(function () {
    const form = document.getElementById('form-basic');
    const basics = form.querySelectorAll('.basic');
    const nextButton = document.getElementById('next-button-basic');
    const submitButton = document.getElementById('submit-button-basic');
    const formSteps = form.querySelectorAll('.form-step');
  
    let currentStep = 0;
  
    function updateProgressBasics() {
        basics.forEach((basic, index) => {
            basic.classList.toggle('active', index <= currentStep);
        });
    }
  
    function showStep(step) {
        formSteps.forEach((stepElement, index) => {
            stepElement.classList.toggle('active', index === step);
        });
        nextButton.style.display = step < formSteps.length - 1 ? 'block' : 'none';
        submitButton.style.display = step === formSteps.length - 1 ? 'block' : 'none';
    }
  
    nextButton.addEventListener('click', () => {
        if (currentStep < formSteps.length - 1) {
            currentStep++;
            updateProgressBasics();
            showStep(currentStep);
        }
    });
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Basic Form Submitted!');
    });
  
    showStep(currentStep);
    updateProgressBasics();
})();

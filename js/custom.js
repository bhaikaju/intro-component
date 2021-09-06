const inputs = document.getElementsByTagName('input');

function validateInputs() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('blur', function () {
            const nameError = document.getElementsByClassName('fname-error');
            const errorIcon = document.getElementsByClassName('error-icon');

            if (!this.value) {
                this.classList.add('invalid');
                nameError[i].classList.add('visible');
                errorIcon[i].classList.add('visible');
            } else {
                nameError[i].classList.remove('visible');
                errorIcon[i].classList.remove('visible');
                this.classList.remove('invalid');
            }
        })
    }
}

validateInputs();

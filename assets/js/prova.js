document.getElementById('Confirmpassword').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = this.value;
    var errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.innerText = 'As senhas não coincidem!';
        errorMessage.style.color = 'red';
        this.classList.add('error');
    } else {
        errorMessage.innerText = '';
        errorMessage.style.color = 'transparent';
        this.classList.remove('error');
    }
});
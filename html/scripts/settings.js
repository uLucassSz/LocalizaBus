if (localStorage.getItem("Login") === null) window.location.href = "https://localizabus.discloud.app/"

const inputCPF = document.getElementById('inputCPF');
const inputTel = document.getElementById('inputTel');

inputCPF.addEventListener('input', function() {
    let cpf = inputCPF.value.replace(/\D/g, '');

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    inputCPF.value = cpf;
});

inputTel.addEventListener('input', function() {
    let telefone = inputTel.value.replace(/\D/g, '');

    telefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');

    inputTel.value = telefone;
});

const sidebarLink = document.querySelectorAll('.sidebar-link');
const settingsProfile = document.querySelector('.settings-profile')
const settingsPayments = document.querySelector('.settings-payments');

sidebarLink.forEach(link => {
    link.addEventListener('click', () => {
        sidebarLink.forEach(element => {
            element.classList.remove('active')
        })
        link.classList.add('active')

        if(link.textContent === 'Informações pessoais') {
            settingsProfile.classList.add('active')
            settingsPayments.classList.remove('active')
        } else if (link.textContent === 'Pagamentos') {
            settingsPayments.classList.add('active')
            settingsProfile.classList.remove('active')
        }
    });
});

const pwShowHide = document.querySelectorAll(".eye-icon");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".passwordInput");
        
        pwFields.forEach(passowrd => {
            if(passowrd.type === "password"){
                passowrd.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            passowrd.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
})

const methodAddWrapper = document.querySelector('.methodAdd')
const methodEditWrapper = document.querySelector('.methodEdit')

function methodAdd() {
    methodAddWrapper.classList.add('active');
    document.body.style.overflowY = 'hidden'
}
function methodEdit(method) {
    const methodDiv = method.closest(".method")
    const methodValue = methodDiv.getAttribute('data-method')
    const methodShow = document.getElementById('methodValue')

    methodShow.innerText = methodValue

    methodEditWrapper.classList.add('active');
    document.body.style.overflowY = 'hidden'
}
function closeMethod() {
    methodAddWrapper.classList.remove('active');
    methodEditWrapper.classList.remove('active');
    document.body.style.overflowY = 'auto'
}

// SHOW VALUES SETTINGS
const userData = JSON.parse(localStorage.getItem('Login'));

if (userData && userData.name) {
    const inputName = document.getElementById('inputName');
    const profileName = document.getElementById('profileName');

    inputName.value = profileName.textContent = userData.name;
}

if (userData && userData.email) {
    const inputEmail = document.getElementById('inputEmail');
    const profileEmail = document.getElementById('profileEmail');

    inputEmail.value = profileEmail.textContent = userData.email;
}

if (userData && userData.password) {
    const inputPass = document.getElementById('inputPass');
    inputPass.value = userData.password;
}
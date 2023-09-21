// if (localStorage.getItem("Login") === null) window.location.href = "https://localizabus.discloud.app/"

const profileAvatar = document.getElementById('profileAvatar')
const selectFile = document.getElementById('file')

selectFile.addEventListener('change', (e) => {
    profileAvatar.src = URL.createObjectURL(e.target.files[0]);
})

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

const inputName = document.getElementById('inputName');
const profileName = document.getElementById('profileName');
if (userData && userData.name) {
    inputName.value = profileName.textContent = userData.name;
}

const inputEmail = document.getElementById('inputEmail');
const profileEmail = document.getElementById('profileEmail');
if (userData && userData.email) {
    inputEmail.value = profileEmail.textContent = userData.email;
}

const inputPass = document.getElementById('inputPass');
if (userData && userData.password) {
    inputPass.value = userData.password;
}

if (userData && userData.cpf) {
    inputCPF.value = userData.cpf
}

if (userData && userData.phone) {
    inputTel.value = userData.phone
}

const inputDate = document.getElementById('birthday')
if (userData && userData.birthday) {
    inputDate.value = userData.birthday
}

// SAVE CHANGES

// const userData = JSON.parse(localStorage.getItem("Login"));
const userId = userData._id; // Declare a variável userId aqui


console.log("userId:", userId);
function saveChanges() {    

    

    fetch(`https://localizabus.discloud.app/updateuser?id=${userId}`, {
        method: "POST", // Use POST para enviar dados
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail,
            phone: inputTel,
            password: inputPass,
            cpf: inputCPF,
            birthday: inputDate
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message === "success") {
            alert("Informações atualizadas com sucesso!");

            // Atualize os dados do usuário no armazenamento local
            userData.name = inputName;
            userData.email = inputEmail;
            userData.phone = inputTel;
            userData.password = inputPass;
            userData.cpf = inputCPF;
            userData.birthday = inputDate;

            localStorage.setItem("Login", JSON.stringify(userData));
        } else {
            alert("Falha ao atualizar informações. Por favor, tente novamente.");
        }
    })
    .catch((error) => {
        console.error("Erro ao atualizar informações:", error);
    });
}

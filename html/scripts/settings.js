const inputCEP = document.getElementById('inputCEP');
const inputEndereco = document.getElementById('inputEndereco');
const inputComplemento = document.getElementById('inputComplemento');

inputCEP.addEventListener('input', () => {
    let cep = inputCEP.value.replace(/\D/g, '');

    if (cep.length > 5) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5);
    }


    if (cep.length === 9) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    inputEndereco.value = data.logradouro;
                } else {
                    inputEndereco.value = '';
                    inputComplemento.value = '';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar CEP:', error);
            });
    } else {
        inputEndereco.value = '';
        inputComplemento.value = '';
    }
});

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
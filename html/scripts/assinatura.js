if (localStorage.getItem('Login') === null) window.location.href = "https://localizabus.discloud.app/";

let target = JSON.parse(localStorage.getItem('Login'))
if(!target.signature) window.location.href = 'https://localizabus.discloud.app/'

function toggleColor(element) {
    const color = element.getAttribute('data-color');
    const colorSpan = document.getElementById('selectedColor');
    const imgCard = document.getElementById('imgCard')

    colorSpan.textContent = color.charAt(0).toUpperCase() + color.slice(1)

    switch(color) {
        case 'escuro':
            imgCard.src = '../assets/buspremiumdark.png';
            break;
        case 'roxo':
            imgCard.src = '../assets/buspremium.png';
            break;
    }

    const colors = document.querySelectorAll('.color');

    colors.forEach(color => color.classList.remove('active'));
    element.classList.add('active')
}

const select = document.querySelector('select');
const inputAndress = document.querySelector('.andress-input');

select.addEventListener('change', () => {
    const selectOption = select.value;

    if(selectOption === 'endereco') {
        inputAndress.style.display = 'none'
    } else {
        inputAndress.style.display = 'flex'
    }
})

inputCEP = document.getElementById('cep');
inputEndereco = document.getElementById('endereco');
inputBairro = document.getElementById('bairro');

inputCEP.addEventListener('input', () => {
    let cep = inputCEP.value.replace(/\D/g, '');

    if (cep.length > 5) {
        cep = cep.substring(0, 5) + '-' + cep.substring(5);
    }

    if(cep.length === 9) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                inputEndereco.value = data.logradouro;
                inputBairro.value = data.bairro;
            } else {
                inputEndereco.value = '';
                inputBairro.value = '';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
    } else {
        inputEndereco.value = '';
        inputBairro.value = '';
    }
});

const inputNumber = document.getElementById('inputNumber');

inputNumber.addEventListener('input', () => {
    const valor = inputNumber.value;

    if (valor <= 0) {
        inputNumber.value = '';
    }
})
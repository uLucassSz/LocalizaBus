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

function toggleMethod(element){
    const methods = document.querySelectorAll('.method')

    methods.forEach(method => method.classList.remove('active'));

    element.classList.add('active');
}

const inputNumber = document.getElementById('inputNumber');

inputNumber.addEventListener('input', () => {
    const valor = inputNumber.value;

    if (valor <= 0) {
        inputNumber.value = '';
    }
})
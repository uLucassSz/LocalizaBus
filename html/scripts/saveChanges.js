const dataUser = JSON.parse(localStorage.getItem('Login'));
const userId = dataUser._id;

const valueName = document.getElementById('inputName').value;
const valuePass = document.getElementById('inputPass').value;
const valueEmail = document.getElementById('inputEmail').value;
const valueDate = document.getElementById('birthday').value
const valueCPF = document.getElementById('inputCPF').value;
const valueTel = document.getElementById('inputTel').value;


function changesSave() {    
    fetch(`https://localizabus.discloud.app/updateuser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: userId,
            name: valueName,
            email: valueEmail,
            phone: valueTel,
            password: valuePass,
            cpf: valueCPF,
            birthday: valueDate
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.message === "Informações do usuário atualizadas com sucesso") {
            alert("Informações atualizadas com sucesso!");

            console.log(valueName)
            console.log(valueEmail)
            console.log(valueTel)
            console.log(valuePass)
            console.log(valueCPF)
            console.log(valueDate)

            dataUser.name = valueName;
            dataUser.email = valueEmail;
            dataUser.phone = valueTel;
            dataUser.password = valuePass;
            dataUser.cpf = valueCPF;
            dataUser.birthday = valueDate;

            localStorage.setItem("Login", JSON.stringify(dataUser));
        } else {
            alert("Falha ao atualizar informações. Por favor, tente novamente.");
        }
    })
    .catch((error) => {
        console.error("Erro ao atualizar informações:", error);
    });
}

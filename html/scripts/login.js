// VIEW PASSWORD
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

const storage = localStorage.getItem("Login")
if (storage) logged(storage)

const button = document.getElementById("button")

function tradeLogin() {

    const emaildiv = document.getElementById("emaildiv")
    const description = document.getElementById("description")
    const title = document.getElementById("title")
    const forget = document.getElementById("forget")
    const account = document.getElementById("account")
    
    emaildiv.style.display = emaildiv.style.display == "block" ? 'none' : 'block'
    forget.style.display = forget.style.display == "none" ? 'flex' : 'none'

    description.innerText = description.innerText == "Entre agora e continue desfrutando  de todos os benefícios!"
        ? "Cadastre-se agora para aproveitar todos os benefícios!"
        : "Entre agora e continue desfrutando  de todos os benefícios!"
    
    title.innerText = title.innerText == "ENTRAR" ? "CADASTRAR" : "ENTRAR"

    button.innerText == "ENTRAR" 
        ? (() => {
            button.innerText = "CADASTRAR"
            button.onclick = register
        })()
        : (() => {
            button.innerText = "ENTRAR"
            button.onclick = login
        })()

    account.innerText = account.innerText == "Ainda não possui uma conta?" ? "Já possui uma conta?" : "Ainda não possui uma conta?"
    return
}

async function register() {
    const user = document.getElementById("user").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value

    return fetch("https://localizabus.discloud.app/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user, password, email })
        })
            .then(res => res.json())
            .then(data => {
                if(data.message) return // Falar pro user que deu ruim
                localStorage.setItem('Login', JSON.stringify(data))
                return logged(data)
            })
            .catch(console.log)
}

async function login() {
    const user = document.getElementById("user").value
    const password = document.getElementById("password").value

    fetch("https://localizabus.discloud.app/getlogin", {
        method: "GET",
        headers: { user, password }
    })
        .then(res => res.json())
        .then(data => {
            if (data.message) return // Deu ruim de algum jeito
            localStorage.setItem("Login", JSON.stringify(data))
            return logged(data)
        })
        .catch(console.log)
}

/**
 * @param { { email: string, name: string, password: string } } data
 */
async function logged(data) {
    // Mudar o HTML com o Login
    location.href = "https://localizabus.discloud.app/"
}

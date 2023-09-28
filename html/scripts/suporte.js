if (localStorage.getItem("Login") === null) window.location.href = "https://localizabus.discloud.app/"

const chatSupport = document.querySelector('.chat-support');

function startSupport() {
    chatSupport.classList.add('active')
}
function closeSupport() {
    chatSupport.classList.remove('active')
}
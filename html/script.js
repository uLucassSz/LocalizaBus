navbar = document.getElementById("navbar");

navbar.innerHTML = `<span class="logo"><i class="bx bxs-bus"> </i>Localiza Bus</span>

<div class="btn-actions">
    <div onclick="showProfileWrapper()" class="profile">
        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="">
        <span class="name"></span>
    </div>
    <button onclick="window.location.href = 'https://localizabus.discloud.app/login'" class="btn-join" style="display: none">Entrar</button>

    <div class="sub-profile-wrapper">
        <div class="profile-wrapper">
            <div class="profile-box">
                <a href="#" class="profile-link">Configurações</a>
            </div>
            <div class="profile-box">
                <a href="#" class="profile-link">Pagamentos</a>
            </div>
            <div class="profile-box">
                <a href="#" class="profile-link">Suporte & Atendimento</a>
            </div>
            <div class="profile-box">
                <a href="#" class="profile-link">Termos de uso</a>
            </div>
            <div class="profile-box">
                <span class="profile-link" onclick='logout()'>Sair</span>
            </div>
        </div>
    </div>
</div>`

footer = document.getElementById('footer');

footer.innerHTML = `© Todos os direitos reservados, 2023 - Localiza Bus`

function showUserName() {
    const userData = JSON.parse(localStorage.getItem('Login'));

    if (userData && userData.name) {
        const profileName = document.querySelector('.profile .name');
        profileName.textContent = userData.name;
    }
}

const btnJoin = document.querySelector('.btn-join')
const profile = document.querySelector('.profile')
const profileWrapper = document.querySelector(".sub-profile-wrapper");

function showProfileWrapper(){
    profileWrapper.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function () {
    const loggedIn = localStorage.getItem('Login');

    if (loggedIn === null) {
        btnJoin.style.display = 'block';
        profile.style.display = 'none';
    } else {
        btnJoin.style.display = 'none';
        profile.style.display = 'flex';
        showUserName();
    }
});

function logout() {
    profileWrapper.classList.remove('active');

    localStorage.removeItem('Login');

    btnJoin.style.display = 'block';
    profile.style.display = 'none';
}


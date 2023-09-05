navbar = document.getElementById("navbar");

navbar.innerHTML = `
<span class="logo"><i class="bx bxs-bus"> </i>Localiza Bus</span>

<div class="btn-actions">
    <div onclick="showProfileWrapper()" class="profile">
        <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="">
        <span class="name">Lucaix</span>
    </div>
    <button class="btn-join" style="display: none">Entrar</button>

    <div class="sub-profile-wrapper">
        <div class="profile-wrapper">
            <div class="profile-box">
                <a href="#">Configurações</a>
            </div>
            <div class="profile-box">
                <a href="#">Pagamentos</a>
            </div>
            <div class="profile-box">
                <a href="#">Suporte & Atendimento</a>
            </div>
            <div class="profile-box">
                <a href="#">Termos de uso</a>
            </div>
            <div class="profile-box">
                <a href="#">Sair</a>
            </div>
        </div>
    </div>
</div>`

function showProfileWrapper(){
    profileWrapper = document.querySelector(".sub-profile-wrapper");

    profileWrapper.classList.toggle('active')
}
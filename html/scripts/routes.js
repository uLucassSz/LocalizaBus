const select = document.getElementById("select")
const params = new URLSearchParams(location.search)
const linha = linhas.find(d => d.id == params.get("linha"))

if (!linha)
    location.href = location.origin

const titleStreet = document.getElementById("titulo_rua")
titleStreet.innerText = `${linha.name} | ${linha.street}`

select.innerHTML = linha.locales.map(l => `<option value="${l.name}">${l.name}</option>`).join("")
changeRoutes(select)

function changeRoutes(doc) {
    const div = document.getElementById("linhas")
    const titleLine = document.getElementById("titulo_linha")
    titleLine.innerText = doc.value

    document.getElementById("select").innerHTML = linha.locales.map(l => `<option value="${l.name}" ${l.name == doc.value ? "selected" : ""}>${l.name}</option>`).join("")

    const local = linha.locales.find(l => l.name == doc.value)

    div.innerHTML = Object.entries(local.hours)
    .map(([day, hours]) => `<div class="date-clock"><h6>${day}</h6><div class="hours">${hours
        .map(h =>`<div class="hour">${h}</div>`).join("")}</div></div>`).join("<div class='barrier'></div>")

}
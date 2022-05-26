const botao = document.querySelector("#butao");
const Lapagada = document.querySelector("div.apagada");
const Lacesa = document.querySelector("div.acesa");
Lacesa.style.display = "none";

botao.addEventListener("click", () => {
    if (Lapagada.style.display === `none`) {
        Lapagada.style.display = "block";
        Lacesa.style.display = "none"
    }
    else {
        Lapagada.style.display = "none";
        Lacesa.style.display = "block";
    }
})
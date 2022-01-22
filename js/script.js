let cantDinero = document.querySelector("#dinero");
let moneda1 = document.querySelector("#moneda1");
let moneda2 = document.querySelector("#moneda2");
let btnConvertir = document.querySelector("#btnConvertir");
let img = document.querySelector("img");

let contenedor = document.querySelector(".contenedor__select");
let div = document.createElement("div");
let p = document.createElement("p");
let fragment = document.createDocumentFragment();

let resultado = 0;
let resultado1 = 0;
cantDinero.value = "";
const moneda = [
    "Dolar",
    "Peso Mexicano",
    "Peso Colombiano",
    "Euro",
    "Libra Esterlina",
];

div.style.backgroundColor = "rgba(255, 0, 0, 0.696)";
div.style.padding = "2rem";
div.style.borderRadius = "1rem";
div.style.marginTop = "1rem";
div.style.color = "var(--blanco)";
div.style.fontWeight = "bold";


btnConvertir.addEventListener("click", function () {    
    if (!isNaN(Number(cantDinero.value)) && (cantDinero.value !== "")) {        
        switch (moneda[moneda1.value]) {
            case "Dolar":
                resultado1 = Number(cantDinero.value) * 1;

                break;
            case "Peso Mexicano":
                resultado1 = Number(cantDinero.value) * 0.05;

                break;
            case "Peso Colombiano":
                resultado1 = Number(cantDinero.value) * 0.00026;

                break;
            case "Euro":
                resultado1 = Number(cantDinero.value) * 1.17;

                break;
            case "Libra Esterlina":
                resultado1 = Number(cantDinero.value) * 1.37;

                break;
            default:
                p.innerHTML =
                    "Error elija una moneda base";
                div.appendChild(p);
                fragment.appendChild(div);
                contenedor.appendChild(fragment);
                break;
        }
        switch (moneda[moneda2.value]) {
            case "Dolar":
                resultado = resultado1 * 1;

                break;
            case "Peso Mexicano":
                resultado = (resultado1 * 1) / 0.05;

                break;
            case "Peso Colombiano":
                resultado = (resultado1 * 1) / 0.00026;

                break;
            case "Euro":
                resultado = (resultado1 * 1) / 1.17;

                break;
            case "Libra Esterlina":
                resultado = (resultado1 * 1) / 1.37;

                break;
            default:
                p.innerHTML =
                    "Error elija una moneda a convertir";
                div.appendChild(p);
                fragment.appendChild(div);
                contenedor.appendChild(fragment);
                break;
        }
        moneda.forEach((element) => {
            if (element === moneda[moneda1.value]) {
                p.innerHTML =
                    Number(cantDinero.value) +
                    " " +
                    element +
                    " a " +
                    moneda[moneda2.value] +
                    " = " +
                    resultado;
                div.appendChild(p);
                fragment.appendChild(div);
                
                img.setAttribute("src", "./img/imgDivisa2.png");
            }
        });
        contenedor.appendChild(fragment);
    } else {
        p.innerHTML ="Por favor, rellene el campo de Cantidad dinero o digite un numero valido";
        div.appendChild(p);
        fragment.appendChild(div);
        contenedor.appendChild(fragment);
    }
});

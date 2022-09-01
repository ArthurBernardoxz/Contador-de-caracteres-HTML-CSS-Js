contador_El = document.querySelector("#contador");
caractere_El = document.querySelector("#caracteres");
espacos_El = document.querySelector("#espacos");
palavras_El = document.querySelector("#palavras");
var string;
var string2;
var count


contador_El.addEventListener("keyup", mostrar);

function mostrar(){
    string = contador_El.value;
    caractere_El.textContent = contador_El.value.length;
    count = string.match(/ /g);
    string2 = string.split(" ");
    palavras_El.textContent = string2.length;
    espacos_El.textContent = count.length;
}
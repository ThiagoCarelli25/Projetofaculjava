const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const IanoConstrução = document.querySelector(".anoConstrução");
const Icordenação = document.querySelector(".cordenação");
const Igerencia = document.querySelector(".gerencia");
const Idiretoria = document.querySelector(".diretoria");
const Ioutorga = document.querySelector(".outorga");
const Icidade = document.querySelector(".cidade");
const Iestado = document.querySelector(".estado");
const Ilatitude = document.querySelector(".latitude");
const Ilongitude = document.querySelector(".longitude");
const Itipo = document.querySelector(".tipo");
const Irisco = document.querySelector(".risco");



function cadastrar () {

        fetch("http://localhost:8080/cadastrar",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({       
                    nome: Inome.value,
                    anoConstrução: IanoConstrução.value,
                    cordenação: Icordenação.value,
                    gerencia: Igerencia.value,
                    diretoria: Idiretoria.value,
                    outorga: Ioutorga.value,
                    cidade: Icidade.value,
                    estado: Iestado.value,
                    latitude: Ilatitude.value,
                    longitude: Ilongitude.value,
                    tipo: Itipo.value,
                    risco: Irisco.value
                })
            })
            .then(function(res) { console.log(res)})
            .catch(function(res) { console.log(res)})
};

function limpar() {
    Inome.value = "";
    IanoConstrução.value = "";
    Icordenação.value = "";
    Igerencia.value = "";
    Idiretoria.value = "";
    Ioutorga.value = "";
    Icidade.value = "";
    Iestado.value = "";
    Ilatitude.value = "";
    Ilongitude.value = "";
    Itipo.value = "";
    Irisco.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 

    cadastrar();  
    limpar();
});
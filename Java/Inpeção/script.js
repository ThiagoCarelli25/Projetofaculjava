const formulario = document.querySelector("form");
const Ifrequencia = document.querySelector(".frequencia");
const Imes = document.querySelector(".mes");
const Istatus = document.querySelector(".status");
const Iprioridade = document.querySelector(".prioridade");
const Idata = document.querySelector(".data");
const Iobservações = document.querySelector(".observações");



function cadastrar () {

        fetch("http://localhost:8080/cadastrar",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({      
                    mes: Imes.value,
                    status: Istatus.value,
                    prioridade: Iprioridade.value,
                    data: Idata.value,
                    observações: Iobservações.value
                })
            })
            .then(function(res) { console.log(res)})
            .catch(function(res) { console.log(res)})
};

function limpar() {
    Ifrequencia.value = "";
    Imes.value = "";
    Istatus.value = "";
    Iprioridade.value = "";
    Idata.value = "";
    Iobservações.value = "";
   
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); 

    cadastrar();  
    limpar();
});
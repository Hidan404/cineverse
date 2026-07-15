const cepInput = document.getElementById("cep")
const ruaInput = document.getElementById("street")
const cidadeInput = document.getElementById("city")
const estadoInput = document.getElementById("state")
const msgErro = document.getElementById("msg-erro")
const form = document.querySelector("form")


async function buscarCep(cep) {

    try{
        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const dados = await resposta.json()

        if(dados.erro){
            throw new Error("Cep não encontrado")
        }

        ruaInput.value = dados.logradouro || ""
        cidadeInput.value = dados.localidade || ""
        estadoInput.value = dados.uf || ""
    }catch (Error){
        ruaInput.value = ""
        cidadeInput.value = ""
        estadoInput.value = ""

        msgErro.className = "text-red-800 text-bold"
        msgErro.innerHTML = "Cep não encontrado"
    }
    



}


function cepEvento(){
    cepInput.addEventListener("input", (event) => {

    const cep = event.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
        buscarCep(cep);
    }

    });
}



form.addEventListener("submit", (event) => {
    event.preventDefault();

});

export {cepEvento}
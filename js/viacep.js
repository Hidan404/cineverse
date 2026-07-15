const cepInput = document.getElementById("cep")
const ruaInput = document.getElementById("street")
const cidadeInput = document.getElementById("city")
const estadoInput = document.getElementById("state")
const msgErro = document.getElementById("msg-erro")
const form = document.getElementById("contact-form");


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






form.addEventListener("submit", enviarFormulario)

async function enviarFormulario(event) {

    event.preventDefault()

    const endpoint = "https://formspree.io/f/xrbzkazw"

    const dados = new FormData(form)

    try {

        const response = await fetch(endpoint, {
            method: "POST",
            body: dados,
            headers: {
                Accept: "application/json"
            }
        })

        if (response.ok) {

            alert("Mensagem enviada com sucesso!");

            form.reset()

        } else {

            alert("Erro ao enviar a mensagem.")

        }

    } catch (error) {

        alert("Erro de conexão.")

        console.error(error)

    }

}

export {cepEvento, enviarFormulario}
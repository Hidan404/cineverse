const form = document.getElementById("contact-form")

const nomeInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const cepInput = document.getElementById("cep")
const ruaInput = document.getElementById("street")
const cidadeInput = document.getElementById("city")
const estadoInput = document.getElementById("state")

const msgErro = document.getElementById("msg-erro")
const endpoint = "https://formspree.io/f/xrbzkazw"
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const camposObrigatorios = [
    nomeInput,
    emailInput,
    cepInput
];



function adicionarErro(input) {
    input.classList.remove("border-slate-600");

    input.classList.add(
        "border-red-500",
        "focus:border-red-500",
        "focus:ring-red-500/30"
    )
}

function removerErro(input) {
    input.classList.remove(
        "border-red-500",
        "focus:border-red-500",
        "focus:ring-red-500/30"
    )

    input.classList.add("border-slate-600");
}


async function buscarCep(cep) {

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        )

        const dados = await resposta.json()
        if (dados.erro) {
            throw new Error()
        }

        ruaInput.value = dados.logradouro || ""
        cidadeInput.value = dados.localidade || ""
        estadoInput.value = dados.uf || ""

        msgErro.textContent = ""
        removerErro(cepInput)

    } catch {

        ruaInput.value = ""
        cidadeInput.value = ""
        estadoInput.value = ""

        adicionarErro(cepInput)

        msgErro.className =
            "text-red-500 text-sm mt-2"
        msgErro.textContent =
            "CEP não encontrado."

    }

}



function cepEvento() {

    cepInput.addEventListener("input", (event) => {

        const cep = event.target.value.replace(/\D/g, "")

        msgErro.textContent = ""
        removerErro(cepInput);

        if (cep.length === 8) {
            buscarCep(cep)
        }

    })

}



function validarFormulario() {

    let valido = true

    msgErro.textContent = ""

    camposObrigatorios.forEach(removerErro)

    

    if (nomeInput.value.trim() === ""){
        adicionarErro(nomeInput)
        valido = false

    }

    

    if (!emailRegex.test(emailInput.value.trim())){
        adicionarErro(emailInput)
        valido = false

    }

  

    if (cepInput.value.replace(/\D/g, "").length !== 8) {

        adicionarErro(cepInput)

        msgErro.className =
            "text-red-500 text-sm mt-2"

        msgErro.textContent =
            "Informe um CEP válido."

        valido = false

    }

    return valido

}



form.addEventListener("submit", enviarFormulario)

async function enviarFormulario(event) {
    console.log("Submit executou")
    event.preventDefault()
    console.log(validarFormulario())
    if (!validarFormulario()) {
        console.log("Formulário inválido")
        return

    }

    const dados = new FormData(form);

    try {

        const response = await fetch(endpoint, {
            method: "POST",
            body: dados,
            headers: {
                Accept: "application/json"
            }
        })

        if (response.ok) {
            alert("Mensagem enviada com sucesso!")
            form.reset()
            msgErro.textContent = ""
            camposObrigatorios.forEach(removerErro)

        } else {

            msgErro.className =
                "text-red-500 text-sm mt-2"

            msgErro.textContent =
                "Erro ao enviar a mensagem."

        }

    } catch (error) {

        msgErro.className =
            "text-red-500 text-sm mt-2"

        msgErro.textContent =
            "Erro de conexão."

        console.error(error)

    }

}

export { cepEvento, enviarFormulario }
const titulosH2 = document.querySelectorAll('h2');
const classesTailwind = ['text-4xl!', 'font-bold', 'text-[#F8FAFC]'];


function padronizarH2(){
    titulosH2.forEach(h2 => {
        h2.classList.add(...classesTailwind);
    })
}

export {padronizarH2}
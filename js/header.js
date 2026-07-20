const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const menuIcone = document.querySelector("#menu-toggle svg path")
const hamburgerPath = "M4 6h16M4 12h16M4 18h16"
const closePath = "M6 18L18 6M6 6l12 12"
const header = document.getElementById("header")

menuToggle.classList.add("cursor-pointer");

function toggleMenu() {
    
    
    menuToggle.addEventListener("click", () =>{
        const eHidden = mobileMenu.classList.contains("hidden")
        if(eHidden){
            mobileMenu.classList.remove("hidden")
            mobileMenu.classList.add('flex')
            menuIcone.setAttribute('d', closePath)
        }else{
            mobileMenu.classList.remove("flex")
            mobileMenu.classList.add('hidden')
            
            menuIcone.setAttribute('d', hamburgerPath)
        }
    })

}

function eventoScroll(){
    window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("bg-[#0F172A]");
        header.classList.add("shadow-lg");
        header.classList.add("backdrop-blur-md");

    }else{

        header.classList.remove("shadow-lg");
        header.classList.remove("backdrop-blur-md");

    }
    })
}

export { toggleMenu, eventoScroll }
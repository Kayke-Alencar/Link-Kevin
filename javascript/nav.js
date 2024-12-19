
const Button = (()=>{

    const Buttons = document.querySelectorAll(".Menu");
    const btnAbir = Buttons[0];
    const btnFechar = Buttons[1];
    

    console.log(btnFechar);

    let it = "";       // intermediario que vai auxiliar na troca de variaveis
    let p1 = "flex"; //propiedade css 1
    let p2 = "none";   //propiedade css 2

    btnAbir.style.display = p1
    btnFechar.style.display = p2

    function trocarVariaveis(){
        it = p1;
        p1 = p2;
        p2 = it;
    };

    return {
        NavFechada: btnAbir,

        NavAberta: btnFechar,

        trocar(){
            trocarVariaveis();
            console.log(p1);
            btnAbir.style.display = p1
            btnFechar.style.display = p2
        }
    };
})();


const nav = (()=>{
    const nav = document.querySelector("nav");

    function abrir_e_fechar(element){
        element.addEventListener("click", ()=>{
            Button.trocar();
            nav.classList.toggle("nav-aberta");    // vai adicionar a clase se nao tiver, e se tiver vai remover
        });
    };

    abrir_e_fechar(Button.NavFechada);
    abrir_e_fechar(Button.NavAberta);

    
})();
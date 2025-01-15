const whats = document.querySelector("#Whats");
const insta =  document.querySelector("#Insta");

whats.addEventListener("click", ()=>{
    const msg = "Ola Kevin, vim  pelo link e Gostaria de saber mais informações."
    window.location.href = "https://wa.me/5519992919115?text="+msg;
});
insta.addEventListener("click", ()=>{
    window.location.href = "https://www.instagram.com/dr.kevin_cremasco/"
});
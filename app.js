let magnifier=document.querySelector(".fa-magnifying-glass");
const searchCont=document.querySelector(".search-bar");
magnifier.addEventListener("click",()=>{
    searchCont.classList.toggle("active");
})
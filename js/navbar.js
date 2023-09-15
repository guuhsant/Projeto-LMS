const btnMobile = document.getElementById("btn-mobile");
      const headerNavbar = document.querySelector(".header-navbar");

      btnMobile.addEventListener("click", ()=>{
  headerNavbar.classList.toggle("active");
 }) 

function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}
 document.querySelector('#a-atalhos').addEventListener('click', function(event){
    event.preventDefault();

    scrollTo('#atalhos')
 })
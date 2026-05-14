let container = document.querySelector("#cardsection");
let cardsection = document.querySelector(".card");

const cardWidth = cardsection.offsetWidth + 60;
let scroll = cardWidth * 4;
let btnleft = document.querySelector(".swapbtnLeft");
btnleft.addEventListener("click", function () {   
        container.scrollLeft -= scroll;
});


let btnright = document.querySelector(".swapbtnRight");
btnright.addEventListener("click", function () {
    container.scrollLeft += scroll;
    
});

window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 767;
  scroll = isMobile ? cardWidth : cardWidth * 4;
});




let faq = document.querySelectorAll(".faq");

faq.forEach(function(faq){
    faq.addEventListener("click",function(){
        
        let para = faq.nextElementSibling;
        if(para.style.display === "block"){
            para.style.display = "none";
        }else{
            para.style.display = "block";

        }
    });

});
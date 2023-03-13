let menuBox = document.getElementById("menuBox");
let menuIcon = document.getElementById("menuIcon");
menuIcon.onclick = function(){
    menuBox.classList.toggle("open-menu");
    if(menuBox.classList.contains("open-menu")){
        menuIcon.src = "images/close.png"
    }
    else{
        menuIcon.src = "images/menu.png"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elemntosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elemntosCarousel, {
        duration: 150
    });
});

let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');
navigation.onclick = function(){
  navigation.classList.add('active');
}
close.onclick = function(){
  navigation.classList.remove('active')
}
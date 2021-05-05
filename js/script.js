$(document).ready(function() {
    $(".phone-mask").inputmask({
      mask: ["(99) 9999-9999", "(99) 99999-9999", ],
      keepStatic: true
    });
  });
  
$(".btn-enviar").on("click", function() {

    var nome = $(".nome").val()
    var email = $(".email").val()
    var periodo = $(".periodo").val()
    var mensagem = $(".mensagem").val()

    var url = 'https://api.whatsapp.com/send?phone=5588981044236&text=Ol%C3%A1%2C%20estou%20interessado%20em%20adquirir%20o%20servi%C3%A7o%20de%20IPTV%20-%20*Nome%3A%20* ' + nome + '- %20*Email%3A%20*%20  ' + email + '%20-%20*Periodo%3A%20*%20  ' + periodo +'-%20*Mensagem%3A%20*%20' + mensagem + ''

    $(this).attr("href", url)

})

$(".p2").on("click", function() {
    $(this).hide()
    $(".p1").show()
})

$(".p1").on("click", function() {
    $(this).hide()
    $(".p2").show()
})

let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow_left'),
    arrowRight = document.querySelector('#arrow_right'),
    current = 0;
    // clear all imge
function reset(){
    for(let i=0; i<sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Init slider
function startSlide(){
reset();
sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

// Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener("click", function(){
    
    if(current == 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener("click",function(){
   
    if(current == sliderImages.length-1){
        current = -1;
    }
    slideRight();
});

setInterval(function() {
    if(current == 0){
        current = sliderImages.length;
    }
    slideLeft();
}, 3000)

startSlide();
// HEADER SLIDER
//GALERIA DE FOTOS
const imgs = document.getElementsByClassName("sliderImg");
var flyer0 = imgs[0].setAttribute("src", "como-faco-para-meu-pod-durar-mais.png");
var flyer1 = imgs[1].setAttribute("src", "ignite-v80-flyer.png");
var flyer2 = imgs[2].setAttribute("src", "elfbar-bc10000-flyer.png");
var flyer3 = imgs[3].setAttribute("src", "zomo-juices-sobremesas.png");
var flyer4 = imgs[4].setAttribute("src", "como-faco-para-meu-pod-durar-mais.png");
//LINKS
imgs[0].addEventListener("click", function(){
    location.href = "https://www.instagram.com/p/C9L4GX3pV-u";
});
imgs[1].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20IGNITE%20V80%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[2].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20ELFBAR%20BC10000%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[3].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20os%20JUICES%20ainda%20est%C3%A3o%20dispon%C3%ADvel?";
});
imgs[4].addEventListener("click", function(){
    location.href = "https://www.instagram.com/p/C9L4GX3pV-u";
});
function headerSlider(){
    setTimeout(function(){
        imgs[0].style.transition = ".5s ease-in-out";
        imgs[1].style.transition = ".5s ease-in-out";
        imgs[2].style.transition = ".5s ease-in-out";
        imgs[3].style.transition = ".5s ease-in-out";
        imgs[4].style.transition = ".5s ease-in-out";
        imgs[0].style.left = "-100%";
        imgs[1].style.left = "-100%";
        imgs[2].style.left = "-100%";
        imgs[3].style.left = "-100%";
        imgs[4].style.left = "-100%";
    }, 5000);
    setTimeout(function(){
        imgs[0].style.left = "-200%";
        imgs[1].style.left = "-200%";
        imgs[2].style.left = "-200%";
        imgs[3].style.left = "-200%";
        imgs[4].style.left = "-200%";
    }, 10000);
    setTimeout(function(){
        imgs[0].style.left = "-300%";
        imgs[1].style.left = "-300%";
        imgs[2].style.left = "-300%";
        imgs[3].style.left = "-300%";
        imgs[4].style.left = "-300%";
    }, 15000);
    setTimeout(function(){
        imgs[0].style.left = "-400%";
        imgs[1].style.left = "-400%";
        imgs[2].style.left = "-400%";
        imgs[3].style.left = "-400%";
        imgs[4].style.left = "-400%";
    }, 20000);
    setTimeout(function(){
        imgs[0].style.left = "-500%";
        imgs[1].style.left = "-500%";
        imgs[2].style.left = "-500%";
        imgs[3].style.left = "-500%";
        imgs[4].style.left = "-500%";
        imgs[0].style.transition = "0s";
        imgs[1].style.transition = "0s";
        imgs[2].style.transition = "0s";
        imgs[3].style.transition = "0s";
        imgs[4].style.transition = "0s";
        imgs[0].style.left = "0%";
        imgs[1].style.left = "0%";
        imgs[2].style.left = "0%";
        imgs[3].style.left = "0%";
        imgs[4].style.left = "0%";
        headerSlider();
    }, 20500);
}
//SLIDER GATILHO
headerSlider();

//TÍTULO DO SITE ANIMADO
function emojiAlternator(){
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗥𝗗𝗘𝗦𝗧𝗘 𝗣𝗢𝗗𝗭 &#127797; • Catálogo Online e Interativo";
    }, 1500);
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗥𝗗𝗘𝗦𝗧𝗘 𝗣𝗢𝗗𝗭 &#128142; • Catálogo Online e Interativo";
        emojiAlternator();
    }, 3000);
}
//GATILHO
emojiAlternator();

// WARNING POP-UP
const warning = document.getElementById("warning");
const warningContent = document.getElementById("warningContent");
const closeButtonWarning = document.getElementsByClassName("close-button")[0];
setTimeout(function(){
    warning.style.display = "block";
    setTimeout(function(){
        warning.style.opacity = "1";
        setTimeout(function(){
            warningContent.style.top = "50%";
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
        }, 400);
    }, 500);
}, 3000);
// CLOSE BUTTON WARNING
closeButtonWarning.addEventListener("click", function(){
    warningContent.style.top = "200%";
    setTimeout(function(){
        warning.style.opacity = "0";
        setTimeout(function(){
            warning.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        }, 400);
    }, 300);
});
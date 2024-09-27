// HEADER SLIDER
//GALERIA DE FOTOS
const imgs = document.getElementsByClassName("sliderImg");
var flyer0 = imgs[0].setAttribute("src", "fs18000.png");
var flyer1 = imgs[1].setAttribute("src", "v150.png");
var flyer2 = imgs[2].setAttribute("src", "mo10000.png");
var flyer3 = imgs[3].setAttribute("src", "refil-eco8000.png");
var flyer4 = imgs[4].setAttribute("src", "zomo-juices.png");
var flyer5 = imgs[5].setAttribute("src", "fs18000.png");
//LINKS
imgs[0].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20ELFBAR%20FS18000%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[1].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20%20IGNITE%20V150%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[2].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20%20LOST%20MARY%20MO10000%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[3].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20REFIL%20LIFE%20POD%20ECO%208000%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[4].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20as%20ESSÊNCIAS%20ZOMO%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
imgs[5].addEventListener("click", function(){
    location.href = "https://api.whatsapp.com/send?phone=5574981559545&text=Ol%C3%A1,%20vim%20pelo%20site!%20%F0%9F%91%80%0AGostaria%20de%20saber%20se%20o%20ELFBAR%20FS18000%20ainda%20est%C3%A1%20dispon%C3%ADvel?";
});
function headerSlider(){
    setTimeout(function(){
        imgs[0].style.transition = ".5s ease-in-out";
        imgs[1].style.transition = ".5s ease-in-out";
        imgs[2].style.transition = ".5s ease-in-out";
        imgs[3].style.transition = ".5s ease-in-out";
        imgs[4].style.transition = ".5s ease-in-out";
        imgs[5].style.transition = ".5s ease-in-out";
        imgs[0].style.left = "-100%";
        imgs[1].style.left = "-100%";
        imgs[2].style.left = "-100%";
        imgs[3].style.left = "-100%";
        imgs[4].style.left = "-100%";
        imgs[5].style.left = "-100%";
    }, 5000);
    setTimeout(function(){
        imgs[0].style.left = "-200%";
        imgs[1].style.left = "-200%";
        imgs[2].style.left = "-200%";
        imgs[3].style.left = "-200%";
        imgs[4].style.left = "-200%";
        imgs[5].style.left = "-200%";
    }, 10000);
    setTimeout(function(){
        imgs[0].style.left = "-300%";
        imgs[1].style.left = "-300%";
        imgs[2].style.left = "-300%";
        imgs[3].style.left = "-300%";
        imgs[4].style.left = "-300%";
        imgs[5].style.left = "-300%";
    }, 15000);
    setTimeout(function(){
        imgs[0].style.left = "-400%";
        imgs[1].style.left = "-400%";
        imgs[2].style.left = "-400%";
        imgs[3].style.left = "-400%";
        imgs[4].style.left = "-400%";
        imgs[5].style.left = "-400%";
    }, 20000);
    setTimeout(function(){
        imgs[0].style.left = "-500%";
        imgs[1].style.left = "-500%";
        imgs[2].style.left = "-500%";
        imgs[3].style.left = "-500%";
        imgs[4].style.left = "-500%";
        imgs[5].style.left = "-500%";
    }, 25000);
    setTimeout(function(){
        imgs[0].style.left = "-700%";
        imgs[1].style.left = "-700%";
        imgs[2].style.left = "-700%";
        imgs[3].style.left = "-700%";
        imgs[4].style.left = "-700%";
        imgs[5].style.left = "-700%";
        imgs[0].style.transition = "0s";
        imgs[1].style.transition = "0s";
        imgs[2].style.transition = "0s";
        imgs[3].style.transition = "0s";
        imgs[4].style.transition = "0s";
        imgs[5].style.transition = "0s";
        imgs[0].style.left = "0%";
        imgs[1].style.left = "0%";
        imgs[2].style.left = "0%";
        imgs[3].style.left = "0%";
        imgs[4].style.left = "0%";
        imgs[5].style.left = "0%";
        headerSlider();
    }, 30000);
}
//SLIDER GATILHO
headerSlider();

//TÍTULO DO SITE ANIMADO
function emojiAlternator(){
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗣𝗭 &#127797; • Catálogo Online e Interativo";
    }, 1500);
    setTimeout(function(){
        document.getElementsByTagName("head")[0].children[21].innerHTML = "𝗡𝗢𝗣𝗭 &#128142; • Catálogo Online e Interativo";
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
}, 0);
//VOCÊ É MAIOR DE IDADE?
const yes = document.getElementsByClassName("btnWarning")[0];
const no = document.getElementsByClassName("btnWarning")[1];
yes.addEventListener("click", function(){
    warningContent.style.top = "-100%";
    setTimeout(function(){
        warning.style.opacity = "0";
        setTimeout(function(){
            warning.style.display = "none";
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        }, 400);
    }, 300);
});
no.addEventListener("click", function(){
    document.getElementById("warningContent").children[2].textContent = "ACESSO BLOQUEADO!";
    document.getElementById("warningContent").children[3].style.display = "none";
    document.getElementById("warningContent").children[3].style.display = "none";
    yes.style.display = "none";
    no.style.display = "none";
    setTimeout(function(){
        document.getElementById("warning").style.backdropFilter = "blur(3px)";
    }, 0);
});
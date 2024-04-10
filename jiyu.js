const toto = document.querySelectorAll(".honey");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector('#lightbox-image');


function showLightbox() {
    let Location = this.getAttribute("data-src");
    lightboxImage.setAttribute("src", Location);
    lightbox.style.display = "block"
}

lightbox.onclick = function(){
    lightbox.style.display = "none";
}

const $modalBg = document.getElementsByClassName("modal-background");
const $btnOpen = document.getElementsByClassName("btn_click");
const $btnClose = document.getElementsByClassName("btn-close");

function modal(num) {
    $btnOpen[num].addEventListener("click", () => {
        $modalBg[num].style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    $btnClose[num].addEventListener("click", () => {
        $modalBg[num].style.display = "none";
        document.body.style.overflow = "unset";
    });
}

for (let i = 0; i < $btnOpen.length; i++) {
    modal(i);
}

for (i=0; i<toto.length; i++){
    toto[i].addEventListener("click", showLightbox);
}
  
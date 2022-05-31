export function setAltTextInImg() {
    let allImg = document.querySelectorAll("img");
    let messageIfImgNotLoaded = "Сдесь должно быть изображение, если его нету, то не серчайте)";

    function setText(tag) {
        tag.removeAttribute("alt");
        tag.setAttribute("alt", messageIfImgNotLoaded);
    }

    if (allImg.length > 0) {
        allImg.forEach(el => {
            setText(el);
        });
    }
}

export function isWebp() {
    function testWebp(callback) {
        let webp = new Image();
        webp.onload = webp.onerror = function () {
            callback(webp.height == 2);
        };
        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
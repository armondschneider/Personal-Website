let mouseCursor = document.querySelector(".cursor");
let designStickerImg = document.querySelectorAll(".designStickerImg")
let navLinks = document.querySelectorAll(".navLinks")

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

designStickerImg.forEach(link =>{
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
});

navLinks.forEach(link =>{
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
    });
});
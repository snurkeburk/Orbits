function showSlide(){
    let showTools = document.getElementById("slideout");
    if (showTools.style.display === "none") {
        showTools.style.display = "flex";
    } else {
        showTools.style.display = "none";
    }
}



function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const asd = document.querySelector('.lol');
const message = document.querySelector('#message');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(asd) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    message.textContent = messageText;

}, {
    passive: true
});
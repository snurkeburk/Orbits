function showSlide(){
    let showTools = document.getElementById("slideout");
    if (showTools.style.display === "none") {
        showTools.style.display = "flex";
    } else {
        showTools.style.display = "none";
    }
}
function showSlide(){
    let showTools = document.getElementById("slideout");
    if (showTools.style.display === "none") {
        showTools.style.display = "flex";
        console.log(window);
    } else {
        showTools.style.display = "none";
    }
}


// scroll animations

window.addEventListener("scroll",(event) => {
    //active screen dimensions
    let width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;

    console.log(scrollY)
    let nasaText = document.getElementById('nasaLaunch');
    let blueOriginText = document.getElementById('blueOriginLaunch');
    let spacexText = document.getElementById('spacexLaunch');


    let nasa = document.getElementById('comp-one')
    let blueOrigin = document.getElementById('comp-two')
    let spacex = document.getElementById('comp-three')
    let arrow = document.getElementById('triangle-down');
    console.log(height, width);
    if (scrollY >= height/2 && scrollY <= height*2){
        nasa.style.animation = "slideInFromLeft 2s 1";
        nasa.style.visibility="visible";
        blueOrigin.style.animation = "slideInFromLeft 2s 1";
        blueOrigin.style.visibility="visible";
        spacex.style.animation = "slideInFromLeft 2s 1";
        spacex.style.visibility="visible";

        
        console.log(height, width);
    }else if (scrollY < height/2 || scrollY > height*2){
        console.log(height, width);
        nasa.style.animation = "slideOutFromRight 1s 1";
        blueOrigin.style.animation = "slideOutFromRight 2s 1";
        spacex.style.animation = "slideOutFromRight 2s 1";


        // text dissapearing when scrolling down
        nasaText.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  nasaText.style.display = "none"; }, 1000);

        spacexText.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  spacexText.style.display = "none"; }, 1000);

        blueOriginText.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  blueOriginText.style.display = "none"; }, 1000);
    }


        
    //hide down arrow
    if (scrollY >=210){
        arrow.style.visibility="hidden";
    } else {
        arrow.style.visibility="visible";
    }
    
});



// show launches under buttons 

function displayLaunchNasa() {
    let nasa = document.getElementById('nasaLaunch');
   
    if (nasa.style.display === "none") {
        nasa.style.animation = "slideInFromTop 1s 1";
        nasa.style.display = "block";
        console.log("test");
    } else {
        nasa.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  nasa.style.display = "none"; }, 1000);
    }
   
} 
function displayLaunchBlueOrigin() {
    let blueOrigin = document.getElementById('blueOriginLaunch');
   
    if (blueOrigin.style.display === "none") {
        blueOrigin.style.animation = "slideInFromTop 1s 1";
        blueOrigin.style.display = "block";
        console.log("test");
    } else {
        blueOrigin.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  blueOrigin.style.display = "none"; }, 1000);
    }
   
} function displayLaunchSpacex() {
    let spacex = document.getElementById('spacexLaunch');
   
    if (spacex.style.display === "none") {
        spacex.style.animation = "slideInFromTop 1s 1";
        spacex.style.display = "block";
        console.log("test");
    } else {
        spacex.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  spacex.style.display = "none"; }, 1000);
        
    }
   
} 

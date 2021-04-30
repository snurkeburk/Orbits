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
    if (width < 700){
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
} else if (width > 700){
    console.log(scrollY)
    if (scrollY > 750) {
         nasa.style.animation = "slideInFromLeft 2s 1";
        nasa.style.visibility="visible";
        blueOrigin.style.animation = "slideInFromLeft 3s 1";
        blueOrigin.style.visibility="visible";
        spacex.style.animation = "slideInFromLeft 4s 1";
        spacex.style.visibility="visible";
        console.log("show");

    } 
    if (scrollY < 600){
        console.log("hide");
        nasa.style.animation = "slideOutFromRight 1s 1";
        blueOrigin.style.animation = "slideOutFromRight 2s 1";
        spacex.style.animation = "slideOutFromRight 2s 1";
        setTimeout(() => {  nasa.style.visibility = "hidden"; }, 1000);
        setTimeout(() => {  spacex.style.visibility = "hidden"; }, 1000);
        setTimeout(() => {  blueOrigin.style.visibility = "hidden"; }, 1000);

    }

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
        blueOrigin.style.animation = "slideInFromTop 1s 1 ";
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




function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log("700");
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




//byt ut andra animations mot detta, använd fill-mode forward!!!
document.getElementById("tunnel").animate([
  // keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  // timing options
  duration: 1000,
  iterations: Infinity
});
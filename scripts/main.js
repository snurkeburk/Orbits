window.addEventListener('resize', (reportWindowSize) => {
    console.log("resizing");
    let width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
    let show;
    if (width < 700){
        showSlide();
    } else if (width > 700){
        hideSlide();
    }
    
});

function hideSlide(){
    let showTools = document.getElementById("slideout");
    showTools.style.display = "none";
}

function showSlide(){
    let showTools = document.getElementById("slideout");
    
        
        if (showTools.style.display === "none") {
            showTools.style.animation = "slideInFromLeft 2s 1";
            showTools.style.display = "flex";
            console.log(window);
        } else
        {
            showTools.style.animation = "slideOutFromRight 2s 1";
            setTimeout(() => {  showTools.style.display = "none"; }, 1000);
        }
    } 

    

function hideOk(){
    let ok = document.getElementById("developer-notice");
    if (ok.style.display == "flex"){
        ok.style.display = "none";
    } else {
        ok.style.display = "none";
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
    let footer = document.getElementById('footer');
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


        
    if (scrollY >200){
        footer.style.visibility = "visible";
    } 
    //hide down arrow
    if (scrollY >210){
        arrow.style.visibility="hidden";
        footer.style.position =  "fixed";
        footer.style.animation = "slideInFromTop 2s 1";
    } else {
        arrow.style.visibility="visible";
        footer.style.visibility = "hidden";
    }
} else if (width > 700){
    if (scrollY > 300){
        footer.style.visibility="visible";
    }
    if (scrollY > 475){
        footer.style.position="fixed";
        footer.style.bottom="0";
    } else {
        footer.style.position="absolute";
        footer.style.bottom="-30rem";
    }
    console.log(scrollY)
    if (scrollY > 750) {
         nasa.style.animation = "slideInFromLeft 1s 1";
        nasa.style.visibility="visible";
        blueOrigin.style.animation = "slideInFromLeft 1.25s 1";
        blueOrigin.style.visibility="visible";
        spacex.style.animation = "slideInFromLeft 1.5s 1";
        spacex.style.visibility="visible";
        console.log("show");
    } 
  

}
});



// show launches under buttons 

function displayLaunchNasa() {
    let nasa = document.getElementById('nasaLaunch');
    let width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
   if (width < 700){
    if (nasa.style.display === "none") {
        nasa.style.animation = "slideInFromTop 1s 1";
        nasa.style.display = "block";
        console.log("test");
    } else {
        nasa.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  nasa.style.display = "none"; }, 1000);
    }
    } else if (width > 700){
        if (nasa.style.display === "none") {
            nasa.style.animation = "slideInFromLeft 1s 1";
            nasa.style.display = "block";

            console.log("test");
        } else {
            nasa.style.animation = "slideOutFromRight 1s 1";
            setTimeout(() => {  nasa.style.display = "none"; }, 1000);
        }
        } else if (width > 700){
    }
} 
function displayLaunchBlueOrigin() {
    let blueOrigin = document.getElementById('blueOriginLaunch');
   
    let width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
   if (width < 700){
    if (blueOrigin.style.display === "none") {
        blueOrigin.style.animation = "slideInFromTop 1s 1";
        blueOrigin.style.display = "block";
        console.log("test");
    } else {
        blueOrigin.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  blueOrigin.style.display = "none"; }, 1000);
    }
    } else if (width > 700){
        if (blueOrigin.style.display === "none") {
            blueOrigin.style.animation = "slideInFromLeft 1s 1";
            blueOrigin.style.display = "block";

            console.log("test");
        } else {
            blueOrigin.style.animation = "slideOutFromRight 1s 1";
            setTimeout(() => {  blueOrigin.style.display = "none"; }, 1000);
        }
        } else if (width > 700){
    }
} function displayLaunchSpacex() {
    let spacex = document.getElementById('spacexLaunch');
   
    let width  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    let height = window.innerHeight|| document.documentElement.clientHeight|| 
    document.body.clientHeight;
   if (width < 700){
    if (spacex.style.display === "none") {
        spacex.style.animation = "slideInFromTop 1s 1";
        spacex.style.display = "block";
        console.log("test");
    } else {
        spacex.style.animation = "slideOutFromBottom 1s 1";
        setTimeout(() => {  spacex.style.display = "none"; }, 1000);
    }
    } else if (width > 700){
        if (spacex.style.display === "none") {
            spacex.style.animation = "slideInFromLeft 1s 1";
            spacex.style.display = "block";

            console.log("test");
        } else {
            spacex.style.animation = "slideOutFromRight 1s 1";
            setTimeout(() => {  spacex.style.display = "none"; }, 1000);
        }
        } else if (width > 700){
    }
   
} 




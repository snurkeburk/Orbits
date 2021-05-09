const linkOfTheWebsiteUserCame = document.referrer;
console.log(linkOfTheWebsiteUserCame);
let upload = document.getElementById("upload");
let notification = document.getElementById("developer-notice");
upload.style.display = "none";
 /*|| linkOfTheWebsiteUserCame == "http://127.0.0.1:5500/index.html"*/ 
if (linkOfTheWebsiteUserCame == "http://127.0.0.1:5500/visitor.html"){
    console.log("logged in as visitor")
    nonauthorized = true;
    authorized = false;
    upload.style.display = "none";
    notification.style.display = "none";

} else{
    console.log("logged in as developer");
    authorized = true;
    nonauthorized = false;
    if (upload.style.display == "none" || upload.style.display == "flex");
    upload.style.display = "block";
} 





myStorage = window.localStorage;

let fruits = ['Apple', 'Banana'];
let abow = [localStorage.length];
function testValue(){

        let titleWindow = document.getElementById("title");
        let mainWindow = document.getElementById("main");
        let title = titleWindow.value;
        
        let main = mainWindow.value;
        localStorage.setItem('title', title);
        localStorage.setItem('main', main);
    
}

function applyText() {
    let postTitle = document.getElementById("post-title");
    let postMain = document.getElementById("post-main");
   
    postTitle.innerHTML = localStorage.getItem('title');
    postMain.innerHTML = localStorage.getItem('main');

}

function clear(){
    localStorage.clear();
}

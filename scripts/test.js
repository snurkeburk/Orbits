
var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); 

function setCookie(name, value)
{
  document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
function putCookie(form)
{
    setCookie("userName", form[0].usrname.value);


    return true;
  
  
}


  
  function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }



function logIn() {
  let element = document.getElementById("test");
  let a = today;
  let b = getCookie("userName")
  element.innerHTML = a;
  let t = document.createTextNode(b);
  setTimeout(() => {  h.appendChild(t); }, 200);
  setTimeout(() => {  document.body.appendChild(h); }, 200);
  
}


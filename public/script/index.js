const session = window.location.href.split("?")[1];
const userCon = document.getElementById("username");

console.log(session);
const url = `https://micro-okta.herokuapp.com/api/name?${session}`
$.ajax({
      type : 'GET',
      url : url,
      success: function (name) {
          console.log(name);
          userCon.innerHTML = `Hello ${name}`
			}
		});


var topIcon = document.querySelector('.icon');
var nav = document.querySelector('.nav-lin');
var navLi = document.querySelectorAll('.nav-lin li')

//Event Listener

topIcon.addEventListener("click", addNavBar);

//Functions

function addNavBar(){
  //Class given to topIcon
  nav.classList.toggle('icon-active');

  //links animation
  navLi.forEach((link, index) => {
    if(link.style.animation){
      link.style.animation = ""
    }else{
      link.style.animation = `navLinkFade 1s ease forwards ${index/5}s`;
    }
  });

  //icon animation
  topIcon.classList.toggle('toggle');
}

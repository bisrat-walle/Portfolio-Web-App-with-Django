const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});



function my(){
   document.getElementById("benchmark").innerHTML("move to bottom");
}

const navLinks = document.querySelectorAll('.nav__link')
const nav_links = [];
for(let i = 0; i < navLinks.length; ++i){
  nav_links[i] = navLinks[i];
}

for(let i = 0; i < nav_links.length; ++i){
  nav_links[i].addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
}



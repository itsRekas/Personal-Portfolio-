var homeon=true;
function showpage(){
    closeMenu();
    const infoSection=document.getElementById("AboutPage");
    const HomeSection=document.getElementById("HomePage");
    HomeSection.style.display="none";
    infoSection.style.display="block";
    homeon=false;
}
function hidepage(){
    closeMenu2();
    const infoSection=document.getElementById("AboutPage");
    const HomeSection=document.getElementById("HomePage");
    HomeSection.style.display="block";
    HomeSection.style.animationName = "uptodown";
    HomeSection.style.animationDuration = "1s";
    infoSection.style.display="none";
    homeon=true;
}
function typingeffect(){
    const typingInfo = document.querySelector(".you");
    const info = ["But, hey! You can just call me Rekas","Welcome to my website","You can nevermind","You can contact from any icon below",];
  
    function typeWriter(element, text,i = 0) {
      if(i===0){
        element.textContent="";
      }
      if(i===text.length)return;
      element.textContent += text[i];
      setTimeout(()=>typeWriter(element, text,++i),50);
    }
    function typeDelete(element,text,i=text.length-1){
      element.textContent = text.slice(0, i);
      if(i===0)return;
      setTimeout(()=>typeDelete(element, text,--i),50);
    }
    function startAnimationCycle() {
      for (let j = 0; j < info.length; j++) {
        setTimeout(() => typeWriter(typingInfo, info[j]), j * 6000);
        setTimeout(() => typeDelete(typingInfo, info[j]), j * 6000 + 3000);
      }
    }
  
    startAnimationCycle();
  
    setInterval(startAnimationCycle, 25000);
}
function showMenu(){
    const nav = document.querySelector(".mobilenav");
    const menubutton=document.querySelector('.Menu');
    const close = document.querySelector('.Close')
    nav.style.display = 'block';
    menubutton.style.display = 'none';
    close.style.display = "block";
}
function closeMenu(){
    const nav = document.querySelector(".mobilenav");
    const menubutton=document.querySelector('.Menu');
    const close = document.querySelector('.Close')
    nav.style.display = 'none';
    menubutton.style.display = 'block';
    close.style.display = "none";
}
function showMenu2(){
    const nav = document.querySelector(".mobilenav2");
    const menubutton=document.querySelector('.Menu2');
    const close = document.querySelector('.Close2')
    nav.style.display = 'block';
    menubutton.style.display = 'none';
    close.style.display = "block";
}
function closeMenu2(){
    const nav = document.querySelector(".mobilenav2");
    const menubutton=document.querySelector('.Menu2');
    const close = document.querySelector('.Close2')
    nav.style.display = 'none';
    menubutton.style.display = 'block';
    close.style.display = "none";
}
function checker(){
    const navbuttons = document.querySelector(".navButtons");
    const menubutton=document.querySelector('.Menu');
    const close = document.querySelector('.Close')
    if(window.innerWidth>1024){
    navbuttons.style.display = 'block';
    menubutton.style.display = 'none';
    close.style.display = "none";
    }
    else{
    navbuttons.style.display = 'none';
    menubutton.style.display = 'block';
    close.style.display = "none";
    }
}
checker();
window.addEventListener('resize', function() {
    checker();
});
setTimeout(typingeffect,3000);

const observerleft = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showleft');
        }
        else{
            entry.target.classList.remove('showleft');
        }
    });
});
const observerright = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('showright');
        }
        else{
            entry.target.classList.remove('showright');
        }
    });
});
const fillbar = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('fill');
        }
        else{
            entry.target.classList.remove('fill');
        }
    });
});

const hiddenme2 = document.querySelectorAll('.Me2');
hiddenme2.forEach((el)=>observerright.observe(el));
const hiddenme3 = document.querySelectorAll('.Me3');
hiddenme3.forEach((el)=>observerright.observe(el));
const hiddenme4 = document.querySelectorAll('.Me4');
hiddenme4.forEach((el)=>observerright.observe(el));
const hiddenme5 = document.querySelectorAll('.Me5');
hiddenme5.forEach((el)=>observerright.observe(el));
const progressfill = document.querySelectorAll('.skill-per');
progressfill.forEach((el)=>fillbar.observe(el));
function showdownload() {
    const downloadElement = document.getElementById('download'); // Assuming 'download' is the id of the element to show
    if (downloadElement) {
        downloadElement.style.display = 'block';
    }
}

function hidedownload() {
    const downloadElement = document.getElementById('download'); // Assuming 'download' is the id of the element to hide
    if (downloadElement) {
        downloadElement.style.display = 'none';
    }
}

// Create the IntersectionObserver instance
const pullam = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showdownload();
        } else {
            hidedownload();
        }
    });
});

// Assuming you have an element with an id of 'target' to observe
const targetElement = document.getElementById('timeline-container');
if (targetElement) {
    pullam.observe(targetElement);
}
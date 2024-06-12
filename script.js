var homeon=true;
function showpage(){
    const infoSection=document.getElementById("AboutPage");
    const HomeSection=document.getElementById("HomePage");
    HomeSection.style.display="none";
    infoSection.style.display="block";
    homeon=false;
}
function hidepage(){
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
    const navbuttons = document.querySelector(".navButtons");
    const menubutton=document.querySelector('.Menu');
    const close = document.querySelector('.Close')
    navbuttons.style.display = 'block';
    menubutton.style.display = 'none';
    close.style.display = "block";
}
function closeMenu(){
    const navbuttons = document.querySelector(".navButtons");
    const menubutton=document.querySelector('.Menu');
    const close = document.querySelector('.Close')
    navbuttons.style.display = 'none';
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
hiddenme2.forEach((el)=>observerleft.observe(el));
const hiddenme3 = document.querySelectorAll('.Me3');
hiddenme3.forEach((el)=>observerright.observe(el));
const hiddenme4 = document.querySelectorAll('.Me4');
hiddenme4.forEach((el)=>observerleft.observe(el));
const hiddenme5 = document.querySelectorAll('.Me5');
hiddenme5.forEach((el)=>observerright.observe(el));
const progressfill = document.querySelectorAll('.skill-per');
progressfill.forEach((el)=>fillbar.observe(el));
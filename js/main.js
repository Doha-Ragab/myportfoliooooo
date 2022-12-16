
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * burgerMenu
   */
  const burgerMenu = select('.burger')
  on('click', '.burger', function(e) {
    burgerMenu.classList.toggle('active');
  })

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('#portfolio-grid');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.item',
      });

      let portfolioFilters = select('#filters a', true);

      on('click', '#filters a', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('active');
        });
        this.classList.add('active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()
let angora =document.getElementById("angora")
let movie =document.getElementById("movie")
let Weather =document.getElementById("Weather")
let crud=document.getElementById("crud")
let dev=document.getElementById("dev")
let simone=document.getElementById("simone")
let party=document.getElementById("party")
let loop=document.getElementById("loop")
let notes=document.getElementById("notes")
let ecom=document.getElementById("ecom")
let store=document.getElementById("store")





movie.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/movies/")
})
Weather.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/weather/")
})


crud.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/crud-system/")
})
dev.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/devfolioo/")
})
simone.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/simonee/")
})


angora.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/agnora/")
})
party.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/party/")
})

loop.addEventListener("click",function(){
  window.open("https://doha-ragab.github.io/loopstudios/")
  
})

notes.addEventListener("click",function(){
  window.open("https://stickynotes21.netlify.app/#/signin")
  
})
ecom.addEventListener("click",function(){
  window.open("https://shoppingonline22.netlify.app/#/products")
  
})
store.addEventListener("click",function(){
  window.open("https://mystoreee.netlify.app/#/home")
  
})
// var  want =true;
// var g=want ? "yes" : "no"
// var x="yes" ;
// if(g!="no"){
//   x+=1+"no"
//   y=1+"no"
// }
// console.log(x,y)
// let x=true;
// z="zac"
// if(1==x){
//   z-=1

// }
// console.log(z)
// const g=async()=>{
//   var y=await"welcome";
//   console.log(y)
// }
// console.log(1);
// g();
// console.log(2)
// function make(res,rej){
//   res(1);
//   setTimeout(res,10000,2);
// }
// let p=new Promise(make);
// p.then(alert);
// function d(word){
//   document.getElementById("demo").innerHTML=word;

// }

// function w1(){d("go");}
// function w2(){d("go2");}
// w1()
// w2()

// var x=3;
// var y="";
// var z=2;
// if(x==y){
//   z++
// }
// console.log(z)

// let a=1
// for(var i=0;i<5;i++){
//   a++;

// i--;
// }

x=0
y=""
z=1
if(x==y){
  console.log("yes")
}

var I;
var y=6;
var x="oooo";
for(i=0;i<x.length;i++){
  y+=i;
};
console.log(y)

var q=1;
var s=function q(m){
  m && q(-m)

}
console.log(q)


// window.alert(1!==1)
// window.alert(1===1)


function display(){
  console.log("hhh")
}
setTimeout(display()
  ,10)


// var h= function k(){return 40;}
// // typeof k()
// console.log(typeof k())

var y=6;
var x=["b",1,2,5]
for(i=0;i<x.length;i++){
  y+=x[i]
}
console.log(y)

// window.alert(3>-10 && "James" !=="james")
a=5
b=6;
function sum(a,b){
  console.log(a+b)
}
sum()
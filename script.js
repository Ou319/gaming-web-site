
let banner = document.querySelector('.banner');
let canvas = document.getElementById('dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ['#eee','#ddd', '#596d91',"#ccc", '#bb5a68', '#696541'];
for (let index = 0; index < 100; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 2,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x:  event.pageX - banner.getBoundingClientRect().left,
        y:  event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    dots = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})



// about nav bar
// document.addEventListener('DOMContentLoaded', (event) => {
//     const currentLocation = window.location.pathname;
//     const menuItem = document.querySelectorAll('header nav ul li a');
//     const menuLength = menuItem.length;

//     for (let i = 0; i < menuLength; i++) {
//         if (menuItem[i].href.includes(currentLocation)) {
//             menuItem[i].className += " active";
//         }
//     }
// });


// abo
//ut scrrool nav Bar
let scrool1 =window.pageYOffset;
window.onscroll=function(){
    let scrool2=window.pageYOffset;
    if(scrool1 > scrool2){
        document.querySelector('header').style.top="0";
    }
    else{
        document.querySelector('header').style.top="-100px";
    }
    scrool1=scrool2;
}   




//about response nav bar
var btnsort=document.getElementById("span_mo");
var nav=document.querySelector(".header-02");
btnsort.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
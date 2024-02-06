'use strict';
document.getElementById('slider').classList.add('slideUp');

let boxs = document.querySelectorAll('#slider .box')
for(let z = 0 ; z < boxs.length ; z++){
    // boxs[z].setAttribute('style',`z-index:${boxs.length - z}`);
}
let i = 1;

let t = (i-1)%boxs.length;
let c = i%boxs.length;
let b = (i+1)%boxs.length;
boxs.forEach((e)=>{e.classList.remove('top')})
boxs[t].setAttribute('class','box top')
boxs[c].setAttribute('class','box center')
boxs[b].setAttribute('class','box bottom')

setInterval(()=>{

    let t = (i)%boxs.length;
    let c = (i+1)%boxs.length;
    let b = (i+2)%boxs.length;
    boxs.forEach((e)=>{e.classList.remove('top')})
    boxs[t].setAttribute('class','box top')
    boxs[c].setAttribute('class','box center')
    boxs[b].setAttribute('class','box bottom')

    i++
},2900)
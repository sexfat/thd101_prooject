// jquery
import $ from "jquery";
import gsap from "gsap";
import './style.css';


$('body').css("background-color" , "blue");

gsap.to('.box', {
  x: 500,
  y: 400,
  duration: 1
});


//
const x = 10;
let func = (x , y) => x * y;
console.log(func(40 , 90));
console.log('webpack watch')
// jquery
import $ from "jquery";
import gsap from "gsap";
import './style.css';

//jquery
$('body').css("background-color" , "blue");


// gsap
gsap.to('.box', {
  x: 500,
  y: 400,
  duration: 5,
  backgroundColor: "green"
});


// init
const x = 10;
let func = (x , y) => x * y;
console.log(func(40 , 90));
console.log('webpack watch')
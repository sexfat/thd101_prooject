// jquery
import $ from "jquery";
import gsap from "gsap";
// css樣式
import './style.css';
import './about.css';
//sass 樣式
import './index.scss';

//jquery
$('body').css("background-color" , "blue");


// gsap
gsap.to('.box', {
  x: 500,
  y: 400,
  duration: 5,
  backgroundColor: "green",
  rotation : 360
});


// init
const x = 10;
let func = (x , y) => x * y;
console.log(func(40 , 90));
console.log('webpack watch')
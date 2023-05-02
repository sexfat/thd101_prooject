import $ from 'jquery';
import { gsap } from "gsap";


$('body').css('background-color' , "red");


gsap.to('.box' , {
    x: 600,
    y: 600,
    duration: 2,
    repeat : -1,
     rotation : 360,
     scale : 4
})


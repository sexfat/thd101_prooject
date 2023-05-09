console.log('start');
import './style.css';
import './about.css';

$('body').css('background-color' , 'blue');


import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')


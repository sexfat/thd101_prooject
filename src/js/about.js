console.log('start');
import './style.css';
import './about.css';
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')


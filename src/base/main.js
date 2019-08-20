import './design/main.scss'
import Vue from 'vue'

import test from './components/base';

let el = document.getElementById('base')
new Vue({
    render: h => h(test),
}).$mount(el)

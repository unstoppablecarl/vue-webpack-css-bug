import './design/main.scss'

import Vue from 'vue'
import test from './components/foo';

let el = document.getElementById('foo')
new Vue({
    render: h => h(test),
}).$mount(el)

import '@/bar/design/main.scss'
import Vue from 'vue'

import test from '@/bar/components/bar';

let el = document.getElementById('bar')
new Vue({
    render: h => h(test),
}).$mount(el)


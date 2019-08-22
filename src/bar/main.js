import '@bar/design/main.scss'

import Vue from 'vue'

import test from '@bar/components/bar'
import store from '@bar/store'

let el = document.getElementById('bar')
new Vue({
    store: store(),
    render: h => h(test),
}).$mount(el)


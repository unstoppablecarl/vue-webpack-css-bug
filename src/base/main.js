
import Vue from 'vue'
import test from '@base/components/base';

let el = document.getElementById('base')
new Vue({
    render: h => h(test),
}).$mount(el)

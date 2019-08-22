
import Vue from 'vue'
import test from '@base/components/Base';

let el = document.getElementById('base')
new Vue({
    render: h => h(test),
}).$mount(el)

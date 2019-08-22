import '@foo/design/main.scss'

import Vue from 'vue'
import test from '@foo/components/Foo';
import store from '@foo/store'

let el = document.getElementById('foo')
new Vue({
    store: store(),
    render: h => h(test),
}).$mount(el)

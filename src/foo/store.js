import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        state: {
            foo_active: false,
        },
        mutations: {
            setFooActive(state, value) {
                state.foo_active = value
            },
        },
        actions: {
            toggleFooActive({ commit, state }) {
                commit('setFooActive', !state.foo_active)
            },
        },
        getters: {
            fooActive(state) {
                return state.foo_active
            },
        },
    })
}

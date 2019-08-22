import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export default () => {
    return new Vuex.Store({
        state: {
            active: false,
        },
        mutations: {
            setActive(state, value) {
                state.active = value
            },
        },
        actions: {
            toggleActive({ commit, state }) {
                commit('setActive', !state.active)
            },
        },
        getters: {
            active(state) {
                return state.active
            },
        },
    })
}

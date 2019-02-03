import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
    },

    getters: {

    },

    mutations: {
        increment: state => state.count += 1,
        emptyCart: state => state.count = 0,
    },

    actions: {

    },
});

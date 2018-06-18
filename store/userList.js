import axios from '~/plugins/axios'
import Vuex from 'vuex'
export const state = () => {
    return {
        items: [],
        pagination: null,
        allLoaded: false,
        error: null
    }
}

export const mutations = {
    FETCH_USERS_REQUEST(state) {
        state.loading = true
        console.log("FETCH_USERS_REQUEST");
    },
    FETCH_USERS_SUCCESS(state, data) {
        console.log("FETCH_USERS_SUCCESS");
        console.log(data);
        state.items = data.items
        state.loading = false
    },
    FETCH_USERS_FAILURE(state, error) {
        console.log("FETCH_USERS_FAILURE");
        console.error(error)
    },
}

export const actions = {
    async fetchUsers({ state, commit }, payload) {
        try {
            commit('FETCH_USERS_REQUEST')
            let { data } = await axios.get(`https://api.github.com/search/users?q=${payload.query}`, {
            });
            commit('FETCH_USERS_SUCCESS', data)
        } catch (error) {
            commit('FETCH_USERS_FAILURE', error)
        }

    },
}
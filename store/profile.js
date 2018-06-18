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

    FETCH_PROFILE_REQUEST(state) {
        state.loading = true
        console.log("FETCH_PROFILE_REQUEST");
    },
    FETCH_PROFILE_SUCCESS(state, data) {
        console.log("FETCH_PROFILE_SUCCESS");
        console.log(data);
        state.data = data
        state.loading = false
    },
    FETCH_PROFILE_FAILURE(state, error) {
        console.log("FETCH_PROFILE_FAILURE");
        console.error(error)
    },
}

export const actions = {
    async fetchProfile({ state, commit }, payload) {
        try {
            commit('FETCH_PROFILE_REQUEST')
            let { data } = await axios.get(`https://api.github.com/users/${payload.login}`, {
            });
            commit('FETCH_PROFILE_SUCCESS', data)
        } catch (error) {
            commit('FETCH_PROFILE_FAILURE', error)
        }
    },

}
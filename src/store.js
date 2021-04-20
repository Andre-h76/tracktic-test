import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

const apiUrl = 'https://tracktik-challenge.staffr.com';
const limit = 12;
const UNEXPECTED_ERROR_MSG = 'Unexpected error occured';

export default new Vuex.Store({
    state: {
        sites: [],
        total: 0,
        currentPage: 1,
        totalPages: 1,
        site: {
            contacts: {
                main: {
                    firstName: '',
                    lastName: '',
                    jobTitle: '',
                    address: {
                        street: '',
                        city: '',
                        state: '',
                        zipCode: ''
                    },
                }
            },
            images: ['']
        },
        sortBy: '',
        orderBy: ''
    },
    getters: {
        getSort(state) {
            return state.sortBy;
        },
        getOrder(state) {
            return state.orderBy;
        }
    },
    mutations: {
        updateSites(state, sites) {
            state.sites = sites;
        },
        updateSite(state, site) {
            state.site = site;
        },
        updateTotal(state, total) {
            state.total = total;
            let totalPages = parseInt(total / limit);
            if (total % limit) totalPages++;
            state.totalPages = totalPages;
        },
        updateCurrentPage(state, page) {
            state.currentPage = page;
        },
        setSortBy(state, value) {
            state.sortBy = value;
        },
        setOrderBy(state, value) {
            state.orderBy = value;
        }
    },
    actions: {
        async fetchSites({commit, getters}, page) {
            try {
                let parameters = '';

                if (getters.getSort) {
                    parameters += `&_sort=${getters.getSort}`;
                }
                if (getters.getOrder) {
                    parameters += `&_order=${getters.getOrder}`;
                }

                const sites = await axios.get(`${apiUrl}/sites?_page=${page}&_limit=${limit}${parameters}`);
                commit('updateSites', sites.data);
                commit('updateCurrentPage', page);
                commit('updateTotal', sites.headers['x-total-count']);
            } catch(e) {
                console.log(e);
                alert(UNEXPECTED_ERROR_MSG);
            }
        },

        async fetchSite({commit}, id) { // eslint-disable-line no-unused-vars
            try {
                const site = await axios.get(`${apiUrl}/sites/${id}`);
                commit('updateSite', site.data);
            } catch(e) {
                console.log(e);
                alert(UNEXPECTED_ERROR_MSG);
            }
        },

        setSite({commit}, site) {
            commit('updateSite', site);
        },

        sortBy({commit, dispatch}, type) {
            commit('setSortBy', type);
            dispatch('fetchSites', 1);
        },

        orderBy({commit, dispatch}, type) {
            commit('setOrderBy', type);
            dispatch('fetchSites', 1);
        }
    }

});

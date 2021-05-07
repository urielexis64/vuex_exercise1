import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		facts: [],
		randomFact: null,
		factById: {},
	},
	mutations: {
		SET_FACTS(state, facts) {
			state.facts = facts;
		},
		SET_RANDOM_FACT(state, randomFact) {
			state.randomFact = randomFact;
		},
		RESET_RANDOM_FACT(state) {
			state.randomFact = null;
		},
		SET_FACT_BY_ID(state, factById) {
			state.factById = factById;
		},
	},
	actions: {
		getFacts({commit}) {
			axios
				.get(`${process.env.VUE_APP_BASE_URL}/facts`)
				.then((response) => {
					commit("SET_FACTS", response.data);
				})
				.catch((error) => console.log(error));
		},
		getRandomFact({commit}) {
			axios
				.get(`${process.env.VUE_APP_BASE_URL}/facts/random`)
				.then((response) => {
					commit("SET_RANDOM_FACT", response.data);
				})
				.catch((error) => console.log(error));
		},
		resetRandomFact({commit}) {
			commit("RESET_RANDOM_FACT");
		},
		getFactById({commit}, factId) {
			// Establezco en null al factById debido a que cuando se accede a un id inválido,
			// este muestra el último fact válido con el que se quedó (cosa que no debería ser así).
			this.state.factById = null;

			axios
				.get(`${process.env.VUE_APP_BASE_URL}/facts/${factId}`)
				.then((response) => {
					commit("SET_FACT_BY_ID", response.data);
				})
				.catch((error) => console.log(error));
		},
	},
});

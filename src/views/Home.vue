<template>
	<div class="home">
		<h1 class="scaleUp">Facts</h1>

		<div v-if="facts.length === 0">
			<img width="10%" src="../assets/loading.svg" alt="loading" />
		</div>
		<div v-else v-for="(fact, index) in facts" :key="index">
			<Card
				:text="fact.text"
				:id="fact._id"
				textColor="#1782ff"
				backgroundColor="#fefefe"
				:hoverAnimation="true"
				:style="`--i: .${index}s;`"
				class="fadeIn-delayed"
			/>
		</div>
		<router-link v-if="facts.length !== 0" :to="'/detail/abc123'">
			<Card
				text="Ejemplo ID inválido"
				id="abc123"
				textColor="white"
				backgroundColor="#ff6060"
				:hoverAnimation="true"
				class="fadeIn"
			/>
		</router-link>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";
import Card from "../components/Card";

export default {
	name: "Home",
	components: {
		Card,
	},
	computed: {
		...mapState(["facts"]),
	},
	methods: {
		...mapActions(["getFacts"]),
	},
	created() {
		this.getFacts();
	},
};
</script>

<style>
a,
a:visited {
	text-decoration: none;
	color: #1782ff;
}

h4 {
	font-weight: 400;
}
</style>

<template>
	<div class="random">
		<h1 class="scaleUp">Mi dato random</h1>
		<button @click="getRandomFact" class="btn btn-primary fadeInDown">
			Dato random
		</button>
		<hr class="fadeIn" />
		<div v-if="randomFact">
			<transition name="fadeInUp" mode="out-in">
				<h2 :key="randomFact" class="fadeInUp">
					{{ randomFact.type }}
				</h2>
			</transition>
			<transition name="fadeInDown" mode="out-in">
				<p :key="randomFact.text" class="quote fadeInDown">{{ randomFact.text }}</p>
			</transition>
			<transition name="fadeInLeft" mode="out-in">
				<div class="fadeInLeft" :key="randomFact.status">
					<span
						class="badge"
						:class="randomFact.status.verified ? 'verified' : 'unverified'"
						>{{
							randomFact.status.verified
								? "Verificado"
								: "Sin información sobre su verificación"
						}}</span
					>
				</div>
			</transition>
		</div>
		<div class="fadeInUp" v-else>Presiona el botón para obtener un dato random. 🤓</div>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
	name: "Random",
	components: {},
	computed: {
		...mapState(["randomFact"]),
	},
	methods: {
		...mapActions(["getRandomFact", "resetRandomFact"]),
	},
	created() {
		// Resetear el valor del fact a null cada que el usuario entre a la pantalla
		this.resetRandomFact();
	},
};
</script>

<style>
p.quote {
	position: relative;
	display: inline-block;
	margin-bottom: 36px;
}

p.quote::after {
	content: "";
	width: 100%;
	height: 100%;
	background-color: rgba(156, 156, 156, 0.05);
	position: absolute;
	padding: 8px;
	top: 2%;
	left: 2%;
	z-index: -1;
}

p.quote::before {
	content: "";
	width: 100%;
	height: 100%;
	background-color: rgba(97, 97, 97, 0.05);
	position: absolute;
	padding: 8px;
	bottom: 2%;
	right: 2%;
	z-index: -1;
}

.verified {
	background-color: var(--primary-color);
}

.unverified {
	background-color: var(--red);
}

.badge {
	color: white;
	padding: 4px 16px;
	border-radius: 24px;
	font-weight: bold;
}

hr {
	margin: 36px 0;
	opacity: 50%;
}
</style>

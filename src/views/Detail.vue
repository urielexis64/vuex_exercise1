<template>
	<div class="detail">
		<h1 class="scaleUp">Fact Detail</h1>
		<router-link to="/"
			><button class="btn btn-danger fadeInLeft">&#60;- Regresar</button></router-link
		>
		<hr class="fadeIn" />
		<transition name="fadeInUp" mode="in-out">
			<div class="fadeInUp" v-if="factById">
				<h2 class="id-bg">ID: {{ factById._id }}</h2>
				<h3>Fact:</h3>
				<p class="quote">{{ factById.text }}</p>
				<h3>Fecha de creación:</h3>
				<h4>{{ factById.createdAt }}</h4>
			</div>
			<div v-else>
				<div class="fadeInLate">
					<h2>ERROR 404 NOT FOUND</h2>
					<p>El ID "{{ $route.params.id }}" no existe.</p>
					<img src="../assets/notfound.gif" alt="" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
	name: "Detail",
	components: {},
	computed: {
		...mapState(["factById"]),
	},
	methods: {
		...mapActions(["getFactById"]),
	},
	created() {
		this.getFactById(this.$route.params.id);
	},
};
</script>

<style scoped>
.id-bg {
	background-color: #ffd82b1c;
	display: inline-block;
	padding: 8px;
}

h3 {
	color: var(--primary-color);
}
</style>

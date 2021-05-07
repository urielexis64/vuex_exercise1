<template>
	<router-link :to="`/detail/${id}`">
		<div
			class="card"
			:class="{'hover-animation': hoverAnimation}"
			:style="{backgroundColor, color: textColor}"
		>
			<h3>{{ text }}</h3>
			<h4>{{ id }}</h4>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "Card",
	props: {
		text: String,
		id: String,
		backgroundColor: {type: String, default: "#fff"},
		textColor: {type: String, default: "#1782ff"},
		hoverAnimation: {type: Boolean, default: false},
	},
};
</script>

<style>
.card {
	width: 80%;
	padding: 12px 16px;
	border: 1px solid #adadad;
	border-radius: 12px;
	margin: 24px auto;
	transition: 0.3s ease;
}

.hover-animation:hover {
	transform: translateY(-5px);
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}
</style>

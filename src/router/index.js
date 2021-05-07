import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/detail/:id",
		name: "Detail",
		component: () => import("../views/Detail.vue"),
	},
	{
		path: "/random",
		name: "Random",
		component: () => import("../views/Random.vue"),
	},
	{
		path: "*",
		redirect: "/",
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;

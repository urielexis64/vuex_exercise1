<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">
				Home
				<div class="line"></div>
			</router-link>
			|
			<router-link to="/random"
				>Random
				<div class="line"></div
			></router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
:root {
	--primary-color: #42b983;
	--red: #ff5c49;
	--blue: #1782ff;
}
* {
	font-family: Poppins, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#app {
	text-align: center;
	color: #2c3e50;
	width: 80%;
	margin: 0 auto;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
	display: inline-block;
	transition: 0.3s;
}

#nav a:hover .line {
	width: 100%;
}

#nav a.router-link-exact-active,
#nav a:hover {
	color: var(--primary-color);
}
#nav a.router-link-exact-active .line {
	width: 100%;
}

button {
	outline: none;
	border: none;
}

.btn {
	padding: 0.7rem 1rem;
	font-weight: 600;
	font-size: 1rem;
	border-radius: 0.5rem;
	cursor: pointer;
	transition: 0.3s;
}

.btn-primary {
	background-color: rgb(80, 122, 255);
	color: white;
}

.btn-primary:hover {
	background-color: rgb(40, 115, 255);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.btn-danger {
	background-color: rgb(255, 80, 80);
	color: white;
}

.btn-danger:hover {
	background-color: rgb(255, 60, 60);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.line {
	background-color: #42b983;
	height: 4px;
	width: 0;
	transition: 0.3s;
}

.fadeInUp {
	opacity: 0;
	transform: translateY(10px);
	animation: fadeInUp 0.4s forwards;
}

.fadeInDown {
	opacity: 0;
	transform: translateY(-10px);
	animation: fadeInUp 0.4s forwards;
}

.fadeInLeft {
	opacity: 0;
	transform: translateX(10px);
	animation: fadeInLeft 0.4s forwards;
}

.fadeIn-delayed {
	opacity: 0;
	animation: fadeIn 0.4s calc(250ms + var(--i)) forwards;
}
.fadeIn {
	opacity: 0;
	animation: fadeIn 0.4s forwards;
}
.fadeInLate {
	opacity: 0;
	animation: fadeIn 0.4s 0.5s forwards;
}

.scaleUp {
	transform: scale(0) translateY(-5px);
	animation: scaleUp 0.4s cubic-bezier(0.6, 0.1, 0.25, 1.5) forwards;
}

@keyframes fadeIn {
	to {
		opacity: 1;
	}
}

@keyframes fadeInUp {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes fadeInDown {
	to {
		opacity: 1;
		transform: scaleX(1);
	}
}
@keyframes fadeInLeft {
	to {
		opacity: 1;
		transform: translateX(0);
	}
}
@keyframes scaleUp {
	to {
		transform: scale(1) translateY(0);
	}
}
</style>

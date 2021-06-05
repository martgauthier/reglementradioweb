<template>
	<li class="tonightThemeContainer">
		<p class="themeEmoji">🌍</p>
		<p class="tonight">Ce soir: Le Monde ou Rien</p>
		<p class="themeDesc">Partage tes meilleurs sons internationaux</p>
	</li>
</template>

<script>
export default {
	name: "TonightTheme",
};
</script>

<style>
.tonightThemeContainer {
	background: #212121;
	height: 100px;
	border-radius: 10px;
	margin: 10px auto;
}

.tonightThemeContainer > p {
	text-align: center;
}
.themeEmoji {
	font-size: 35px;
}
.tonight {
	font-size: 20px;
}
.themeDesc {
	color: #757575;
	font-size: 15px;
}

@media screen and (max-width: 767.98px) {
	.tonightThemeContainer {
		margin: 5px;
	}
}
</style>
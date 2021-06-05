<template>
	<footer class="footer">
		<img
			src="../assets/icons/add.png"
			alt="Propositions"
			class="communityProposedSongsIcon"
			@click="changeActualPage('communityProposedSongs')"
		/>
		<img
			src="../assets/icons/logo.png"
			alt="Menu"
			class="menuIcon selectedPageIcon"
			@click="changeActualPage('menu')"
		/>
		<img
			src="../assets/icons/heart.png"
			alt="Profil"
			class="profileIcon"
			@click="changeActualPage('profile')"
		/>
	</footer>
</template>

<script>
export default {
	name: "Footer",
    data() { return {
            actualIconFocused: "menu"
        }
    },
	methods: {
		changeActualPage(iconClicked) {
            if(iconClicked!=this.actualIconFocused){
            document.getElementsByClassName(`${this.actualIconFocused}Icon`)[0].classList.remove("selectedPageIcon")
			document.getElementsByClassName(`${iconClicked}Icon`)[0].classList.add("selectedPageIcon")
            this.$emit("displayed-page-changed", {
                pageToHide: this.actualIconFocused,
                pageToShow: iconClicked
            })
            this.actualIconFocused=iconClicked
            }
		},
	},
};
</script>

<style>
footer {
	/* inutile en affichage desktop */
	display: none;
}

@media screen and (max-width: 767.98px) {
	/* téléphones */
	.footer {
		background: #212121;
		display: flex;
		justify-content: space-around;
		align-items: center;
		bottom: 0;
		z-index: 4;
		height: 8%;
		width: 100%;
	}

	.footer>img {
		height: 50%;
        width: 20%;
        padding-top: 10px;
        padding-bottom: 10px;
        object-fit: scale-down;
        display: block;
		filter: brightness(100%) grayscale(100%);
		transition: filter 0.1s;
	}

	img.selectedPageIcon {
		filter: grayscale(0%);
	}

	.footer > img:active {
		filter: brightness(60%);
	}
}
</style>

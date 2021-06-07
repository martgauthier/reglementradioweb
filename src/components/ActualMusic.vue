<template>
	<div class="actualMusic">
		<img
			src="../assets/samplesong/cover.jpg"
			alt="ALBUM"
			class="actualMusicCover"
		/>
		<div class="actualMusicInfos">
			<p class="actualMusicTitle">St-Domingue</p>
			<p class="actualMusicArtist">Alpha Wann</p>
			<p class="actualMusicProposedBy">proposé par ROGNONUX +69</p>
		</div>
	</div>
</template>

<script>
export default {
    name: "ActualMusic"
}
</script>

<style>
.actualMusic {
	height: 20%;
	width: 100%;
	border-radius: 20px 20px 0 0;
	background: linear-gradient(to bottom, #d65509, #00000000);
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.actualMusicInfos {
	width: 50%;
	margin-top: 10px;
}
.actualMusicTitle {
	font-size: 22px;
	color: white;
}
.actualMusicArtist {
	font-size: 17px;
	color: white;
}
p.actualMusicProposedBy {
	color: #616161;
	font-size: 15px;
	border: 1px solid #616161;
	border-radius: 5px;
	padding: 5px;
	margin-top: 5px;
}
.actualMusicCover {
	height: 90px;
	width: auto;
	transition: filter 0.2s;
}
.actualMusicCover:hover {
	cursor: pointer;
	filter: brightness(80%);
}

@media screen and (max-width: 767.98px) {
	.actualMusic {
		border-radius: 0;
	}
}
</style>
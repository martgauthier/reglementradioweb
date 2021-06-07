<template>
	<BackCanvas />
	<div id="main">
		<div class="communityProposedSongsContainer" v-show="communityProposedSongsShowed">
			<h2>Propositions</h2>
			<ul class="communityProposedSongsList">
				<TonightTheme />
				<li v-for="item in communityPropositions" :key="item">
					<a
						href="https://youtu.be/Ta-3VizBGtQ"
						class="communityProposedSong"
						target="_blank">
						<img
							src="./assets/samplesong/cover.jpg"
							alt="Cover"
							class="communityProposedSongCover" />
						<div>
							<p class="communityProposedSongInfos">Artiste - Son</p>
							<p class="communityProposedSongAuthor">jeanjacquot666</p>
						</div>
					</a>
				</li>
			</ul>
			<button class="proposeSongButton">Proposer un son</button>
		</div>
		<div class="menuContainer" v-show="menuShowed">
            <ActualMusic />
			<div class="opinionButtonsContainer">
				<button class="bofButton">Bof</button>
				<button class="saleButton">Sale</button>
			</div>
			<div class="chat">
                <MessagesList :chatMessages="chatMessages"/>
				<form class="messageForm">
					<input
						type="text"
						placeholder="Envoie un message à la mif..."
						id="inputMessage"
						name="inputMessage" />
					<img
						class="sendMessageImg"
						src="./assets/icons/send_msg.png"
						alt="Envoyer"
						onclick="$(form).submit();" />
				</form>
			</div>
		</div>
		<div class="profileContainer" v-show="profileShowed">
			<ul class="profilePagesList">
				<li class="selectedProfilePage votesProfilePageTitle" @click="profilePageTitleClicked('votes')">Votes</li>
				<li class="proposedProfilePageTitle" @click="profilePageTitleClicked('proposed')">Proposés</li>
			</ul>
			<ul v-show="votesProfilePageShowed" class="votedSongsList">
				<li v-for="item in votedSongs" :key="item">
					<a
						href="https://youtu.be/Ta-3VizBGtQ"
						class="votedSong"
						target="_blank" >
						<img
							src="./assets/samplesong/cover.jpg"
							alt="Cover"
							class="votedSongCover" />
						<div>
							<p class="votedSongInfos">Artiste - Son</p>
							<p class="votedSongDate">06/03/21</p>
						</div>
					</a>
				</li>
			</ul>
            <ul v-show="!votesProfilePageShowed" class="votedSongsList">
				<li v-for="item in votedSongs" :key="item">
					<a
						href="https://youtu.be/Ta-3VizBGtQ"
						class="votedSong"
						target="_blank" >
						<img
							src="./assets/samplesong/cover.jpg"
							alt="Cover"
							class="votedSongCover" />
						<div>
							<p class="votedSongInfos">Artiste - Son</p>
							<p class="votedSongDate">06/03/21</p>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<Footer @displayed-page-changed="changeDisplayedPage"/>
</template>
<script>
import BackCanvas from "./components/BackCanvas.vue";
import Footer from "./components/Footer.vue";
import TonightTheme from "./components/TonightTheme.vue";
import ActualMusic from "./components/ActualMusic.vue"
import MessagesList from "./components/MessagesList.vue"

export default {
	name: "App",
	components: {
		BackCanvas,
		Footer,
		TonightTheme,
        ActualMusic,
        MessagesList
	},
	data() {
		return {
			communityPropositions: new Array(25),
			chatMessages: new Array(30),
			votedSongs: new Array(25),
            communityProposedSongsShowed: false,
            menuShowed: true,
            profileShowed: false,
            votesProfilePageShowed: true
		}
	},
    methods: {
        changeDisplayedPage(payload) {
            console.log(payload)
            this[`${payload.pageToHide}Showed`] = false
            this[`${payload.pageToShow}Showed`] = true
        },

        checkIfFooterDisplayed() {//if footer displayed, screen is mobile
            console.log("check if footer displayed")
            this.communityProposedSongsShowed = this.profileShowed = (getComputedStyle(document.getElementsByClassName("footer")[0]).display === "none") ? true : false
        },

        profilePageTitleClicked(title) {
            if(title!="votes"){
                this.votesProfilePageShowed=false
                document.getElementsByClassName("votesProfilePageTitle")[0].classList.remove("selectedProfilePage")
                document.getElementsByClassName("proposedProfilePageTitle")[0].classList.add("selectedProfilePage")
            }
            else {
                this.votesProfilePageShowed=true
                document.getElementsByClassName("proposedProfilePageTitle")[0].classList.remove("selectedProfilePage")
                document.getElementsByClassName("votesProfilePageTitle")[0].classList.add("selectedProfilePage")
            }
        }
    },
	mounted() {
        window.addEventListener("resize", this.checkIfFooterDisplayed)
        this.checkIfFooterDisplayed()

		//ascii art
		console.log("%c ____  _____ _____ _     _____ _      _____ _      _____ \n/  __\\/  __//  __// \\   /  __// \\__/|/  __// \\  /|/__ __\\\n|  \\/||  \\  | |  _| |   |  \\  | |\\/|||  \\  | |\\ ||  / \\  \n|    /|  /_ | |_//| |_/\\|  /_ | |  |||  /_ | | \\||  | |  \n\\_/\\_\\\\____\\\\____\\\\____/\\____\\\\_/  \\|\\____\\\\_/  \\|  \\_/  ", "color: orange;")
    },
    unmounted() {
        window.removeEventListener("resize", this.checkIfFooterDisplayed)
    }
};
</script>

<style>
/* fonts */
@font-face {
	font-family: "Circular Medium";
	src: url("./assets/fonts/circular-medium.ttf");
}
@font-face {
	font-family: "Circular Bold";
	src: url("./assets/fonts/circular-bold.ttf");
}
@font-face {
	font-family: "Futura Bold";
	src: url("./assets/fonts/futura-bold.ttf");
}

/* global */
* {
	margin: 0;
	padding: 0;
	font-family: "Circular Medium", sans-serif;
	color: white;
}

html,
body {
	height: 100%;
	overflow: hidden;
	width: 100%;
	background: black;
}

#app {
	width: 100%;
	height: 100%;
	animation: fadeIn 1s forwards;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

/* main */
#main {
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: 3;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
/* pages */
#main > div {
	height: 95%;
	margin: auto 10px;
	border-radius: 20px;
	/*border: 1px solid red;*/
	/*overflow: hidden;*/
	position: relative;
	flex: 1;
}
/* propositions */
.communityProposedSongsContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.communityProposedSongsContainer h2 {
	font-size: 30px;
	font-family: "Circular Bold", sans-serif;
	margin-left: 20px;
}
.proposeSongButton {
	background-color: #ab47bc;
	width: 90%;
	padding: 10px;
	display: block;
	border-radius: 15px;
	font-size: 25px;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	outline: none;
	border: none;
	transition: background-color 0.2s;
}
.proposeSongButton:hover {
	cursor: pointer;
	background-color: #4f1f57;
}
.communityProposedSongsList {
	height: 80%;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	align-items: center;
	list-style-type: none;
}
.communityProposedSongsList > li {
	width: 85%;
}
.communityProposedSongsList::-webkit-scrollbar {
	width: 0;
}
.communityProposedSong {
	background: #212121;
	height: 50px;
	display: flex;
	border-radius: 10px;
	margin: 10px auto;
}
.communityProposedSong:-webkit-any-link {
	text-decoration: none;
}
.communityProposedSong > div {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.communityProposedSongInfos {
	font-size: 18px;
}
.communityProposedSongAuthor {
	color: #757575;
	font-size: 14px;
}
.communityProposedSongCover {
	height: 70%;
	display: block;
	border-radius: 50%;
	margin: 7px 15px 7px 7px;
}

/* opinion */
.opinionButtonsContainer {
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 8%;
	margin-top: 20px;
}
.opinionButtonsContainer > button {
	width: 45%;
	padding: 10px 0;
	background-color: #212121;
	outline: none;
	border: none;
	margin-top: 10px;
	border-radius: 5px;
	font-size: 20px;
	transition: background-color 0.2s;
}
.opinionButtonsContainer > button:hover {
	cursor: pointer;
	background-color: #ab47bc;
}

/* chat */
.chat {
	height: 62%; /* without opinion: 75% */
	width: 100%;
	border-radius: 0 0 20px 20px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	transition: height 0.3s;
}
.messageForm {
	height: 12%;
	display: flex;
	background: black;
	justify-content: space-around;
	align-items: center;
}
#inputMessage {
	width: 80%;
	background: #212121 !important;
	padding: 10px;
	border-radius: 10px;
	font-size: 16px;
	outline: none;
	border: none;
}
#inputMessage:-webkit-autofill,
#inputMessage:-webkit-autofill:hover,
#inputMessage:-webkit-autofill:focus {
	-webkit-text-fill-color: white;
	-webkit-box-shadow: 0 0 0px 1000px #212121 inset;
	box-shadow: 0 0 0px 1000px #212121 inset;
}

.sendMessageImg {
	height: 35px;
	filter: grayscale(100%) contrast(200%);
	transition: filter 0.1s;
}
.sendMessageImg:hover {
	cursor: pointer;
	filter: grayscale(0%);
}

/* profile */
.profileContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

/* profile header */
.profilePagesList {
	list-style-type: none;
	margin-left: 20px;
}
.profilePagesList > li {
	display: inline-block;
	color: #757575;
	font-family: "Circular Bold", sans-serif;
	font-size: 23px;
	margin: auto 5px;
	transition: font-size 0.4s, color 0.4s;
}
.profilePagesList > li:hover {
	cursor: pointer;
}
.selectedProfilePage {
	font-size: 30px !important;
	color: white !important;
}

/* voted songs list */
.votedSongsList {
	overflow-y: scroll;
	height: 90%;
}
.votedSongsList::-webkit-scrollbar {
	width: 0;
}
.votedSong {
	height: 70px;
	width: 100%;
	display: flex;
	border-radius: 10px;
	margin: 10px 10px 10px auto;
}
.votedSong:-webkit-any-link {
	text-decoration: none;
}
.votedSong:active .votedSongInfos {
	color: #757575;
}
.votedSong:active .votedSongDate {
	color: #212121;
}
.votedSong:active .votedSongCover {
	filter: brightness(70%);
}
.votedSongCover {
	height: 80%;
	display: block;
	filter: brightness(100%);
	transition: filter 0.05s;
	margin: 7px 15px 7px 7px;
}
.votedSong > div {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
}
.votedSongInfos {
	font-size: 18px;
	transition: color 0.05s;
}
.votedSongDate {
	color: #757575;
	font-size: 14px;
	transition: color 0.05s;
}

@media screen and (max-width: 767.98px) {
	/*mobile*/
	#app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#main {
		height: 90%;
		justify-content: space-between;
		flex-direction: column;
	}
	#main > div {
		margin: 0;
		width: 100%;
	}
	.chat {
		height: 65%;
	}
	.messageForm {
		margin-bottom: 15px;
	}

	.communityProposedSong {
		margin: 5px;
	}

	h2,
	.profilePagesList {
		margin-left: 20px;
		margin-top: 20px;
	}
	.proposeSongButton {
		font-size: 18px;
	}
}
</style>

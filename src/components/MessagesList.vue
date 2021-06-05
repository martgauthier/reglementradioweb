<template>
	<ul class="messagesList">
		<li class="message" v-for="item in chatMessages" :key="item">
			<span class="messageAuthor">Auteur: </span>lorem ipszum les mecs on écrit
			nimp wersh
		</li>
		<li class="adminMessage">⚡ Un message que l'admin pourrait envoyer!</li>
	</ul>
</template>

<script>
export default {
    name: "MessagesList",
    props: {
        chatMessages: Array
    },
    mounted() {
        this.$el.scrollTop = this.$el.scrollHeight
    }
}
</script>

<style>

.messagesList {
	height: 90%;
	overflow-y: scroll;
	list-style-type: none;
}
.messagesList::-webkit-scrollbar {
	width: 5px;
	background: #4f1f57;
	border-radius: 10px;
}
.messagesList::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: #ab47bc;
}
.messageAuthor {
	color: #ab47bc;
}
.message {
	margin: 10px;
	font-size: 14px;
}
.adminMessage {
	padding: 10px;
	background: #212121;
	font-size: 15px;
	width: 90%;
	margin: 10px auto;
}

@media screen and (max-width: 767.98px) {
	.messagesList {
		height: 80%;
	}
}
</style>
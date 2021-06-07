<template>
	<canvas id="canvas" width="0" height="0"></canvas>
</template>

<script>
export default {
	name: "BackCanvas",
	mounted() {
		canvas = this.$el
		ctx = canvas.getContext("2d")
		for (let i = 0; i < 100; i++) {
			//i < nombre de points
			points[i] = new MovingPoint()
		}

		window.addEventListener("resize", this.resizeCanvas)
		this.resizeCanvas()

		setInterval(() => {
			//draw loop
			ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
			points.forEach((element, key) => {
				element.move();
				if (
					element.x < -10 ||
					element.x > canvas.offsetWidth + 10 ||
					element.y < -10 ||
					element.y > canvas.offsetHeight + 10
				) {
					points[key] = new MovingPoint();
				}
			});
		}, 1000 / 60); //60fps
	},
	unmounted() {
		window.removeEventListener("resize", this.resizeCanvas)
	},
	methods: {
		resizeCanvas() {
			canvas.setAttribute("width", window.innerWidth - 1)
			canvas.setAttribute("height", window.innerHeight - 1)
		}
	}
};

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

let canvas
let ctx
let points = []

class MovingPoint {
	constructor() {
		this.speed = getRandom(1, 4);
		switch (
			getRandomInt(0, 3) //0: start from left, 1: ... right, 2: ... top, 3: ... bottom
		) {
			case 0:
				this.x = -10;
				this.y = getRandomInt(0, canvas.offsetHeight);
				this.angle = getRandom(-Math.PI / 2, Math.PI / 2);
				break;
			case 1:
				this.x = canvas.width + 10;
				this.y = getRandomInt(0, canvas.offsetHeight);
				this.angle = getRandom(Math.PI / 2, 3 * (Math.PI / 2));
				break;
			case 2:
				this.x = getRandomInt(0, canvas.offsetWidth);
				this.y = -10;
				this.angle = getRandom(-2 * Math.PI, 0);
				break;
			case 3:
				this.x = getRandomInt(0, canvas.offsetWidth);
				this.y = canvas.offsetHeight + 10;
				this.angle = getRandom(0, 2 * Math.PI);
				break;
		}
		this.radius = getRandomInt(1, 2);
		this.xMove = Math.cos(this.angle) * this.speed;
		this.yMove = -Math.sin(this.angle) * this.speed;
	}

	move() {
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fill();
		ctx.stroke();
		this.x += this.xMove;
		this.y += this.yMove;
	}
}
</script>

<style>
#canvas {
	display: block;
	position: fixed;
	z-index: 1;
}
</style>

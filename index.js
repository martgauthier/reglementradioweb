function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

class MovingPoint {
    constructor(){
        this.speed = getRandom(2, 7)
        switch(getRandomInt(0,3)){//0: start from left, 1: ... right, 2: ... top, 3: ... bottom
            case 0:
                this.x=-10
                this.y=getRandomInt(0, jCanvas.height())
                this.angle=getRandom(-Math.PI/2, Math.PI/2)
                break
            case 1:
                this.x=jCanvas.width() + 10
                this.y=getRandomInt(0, jCanvas.height())
                this.angle=getRandom(Math.PI/2, 3*(Math.PI/2))
                break
            case 2:
                this.x=getRandomInt(0, jCanvas.width())
                this.y=-10
                this.angle=getRandom(-2*Math.PI, 0)
                break
            case 3:
                this.x=getRandomInt(0, jCanvas.width())
                this.y=jCanvas.height() + 10
                this.angle=getRandom(0, 2*Math.PI)
                break

        }
        this.radius = getRandomInt(1, 3)
        this.xMove=Math.cos(this.angle)*this.speed
        this.yMove=-Math.sin(this.angle)*this.speed
    }

    move(){
        ctx.beginPath()
        ctx.fillStyle="white"
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
        ctx.stroke()
        this.x+=this.xMove
        this.y+=this.yMove
    }
}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let jCanvas=$("#canvas")

let points = []
for(i = 0; i < 100; i++){//i < nombre de points
    points[i]=new MovingPoint()
}

let lastPage="songs"

function removeOpinion(){
    $(".opinionButtonsContainer").fadeOut(400, () => {
        setTimeout(() => { $(".chat").css("height", "75%") }, 400)
    })
}

$(() => {
    alert("INSTAGRAM: @mart.gauthier")

    $(".messagesList").scrollTop($(".messagesList")[0].scrollHeight)//pour mettre le scroll du chat en bas au début

    $(".profilePagesList>li").click((event) => {
        $(".profilePagesList>li").removeClass("selectedProfilePage")
        $(event.currentTarget).addClass("selectedProfilePage")
    })

    setInterval(() => {//draw loop
        ctx.clearRect(0, 0, jCanvas.width(), jCanvas.height())
        points.forEach((element, key) => {
            element.move()
            if(element.x < -10 || element.x > jCanvas.width() + 10 || element.y < -10 || element.y > jCanvas.height() + 10){
                points[key]=new MovingPoint()
            }
        })
    }, 1000/60)//60fps

    $("footer>img").click((event) => {
        if(!$(event.currentTarget).hasClass("selectedPageIcon")){
            let clickedPage=event.currentTarget.className.split("Icon")[0]
            $("." + lastPage + "Icon").removeClass("selectedPageIcon")
            $(event.currentTarget).addClass("selectedPageIcon")
            $("." + lastPage + "Container").fadeOut(200, () => {
                if(clickedPage!="songs")
                    $("." + clickedPage + "Container").css("display", "flex").hide().fadeIn(200)
                else
                    $("." + clickedPage + "Container").fadeIn(200)
                lastPage=clickedPage
            })
        }
    })

    setTimeout(() => removeOpinion(), 7000)

    $(window).resize(() => {
        jCanvas.attr("width", $(window).width() - 1)
        jCanvas.attr("height", $(window).height() - 1)
    }).resize()
})
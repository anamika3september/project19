var bg, bg1
var wolf, wolfimg

function preload() {
bg = loadImage("forest.png")
wolfimg = loadAnimation("wolf.gif")
}

function setup() {
    createCanvas(1200,600)
    bg1 = createSprite(0,0,1200,600)
    bg1.addImage(bg) 
    wolf = createSprite(600,300)
    wolf.addAnimation("wolfimg",wolfimg)
    wolf.scale = 0.5
}

function draw() {
    background("black") 
    drawSprites()
}


const canvas = document.getElementById("canvas") 
const ctx = canvas.getContext("2d")
const { width: canvasWidth, height: canvasHeight } = canvas 


// ctx Presets 
ctx.fillStyle = "black"
ctx.strokeStyle = "red" 


// Game 

// Entities 
var boxA = { x: 0, y: 50, speed: 80 }
var boxB = { x: 0, y: 150, speed: 80 }


// Loop 
var lastAnimationTime = 0 
var currentAnimationTime = 0 
var dt = 0 


function loppy(ms)
{
    requestAnimationFrame( loppy ) 

    currentAnimationTime = ms / 1000
    dt = currentAnimationTime - lastAnimationTime 
    lastAnimationTime = currentAnimationTime 


    // clear screen 
    fillRect(0,0, canvasWidth, canvasHeight, "black" ) 

    // Update Entities 
    updateBoxAPos( boxA, dt )
    updateBoxBPos( boxB ) 


    // Draw 
    fillRect( boxA.x, boxA.y, 50, 50,  "red")
    fillRect( boxB.x, boxB.y, 50, 50, "yellow")
}


requestAnimationFrame( loppy )



// Lib 

function fillRect( x, y, width, height, color )
{
    ctx.save()
    ctx.fillStyle = color || "white"
    ctx.fillRect(x,y,width,height) 
    ctx.restore() 
}


function updateBoxAPos( box, dt )
{
    box.x += box.speed * dt 
}

function updateBoxBPos( box )
{
    box.x += box.speed * ( 1 / 60 )
}

const container = document.getElementById("container")
const rainbowBtn = document.querySelector(".rainbowBtn")
const blackBtn = document.querySelector(".blackBtn")
const randomWarmColors = document.querySelector(".randomWarmColors")
const randomColdColors = document.querySelector(".randomColdColors")

function makeGrid(rows,cols){
    for (let i = 0; i < (rows * cols); i++) {
      let square = document.createElement("div")
      container.appendChild(square) 
      square.className = "square"
    }
}

function getRandomColor(){
  const randomHue = Math.floor(Math.random() * 360)
  const randomColor = `hsl(${randomHue},100%,50%)`
  return randomColor
}

makeGrid(16,16)

// const square = document.querySelector(".square")

// square.addEventListener("mouseover", () => setColor(square))

// function setColor(element){
//   const color = getRandomColor()
//   element.style.background = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }


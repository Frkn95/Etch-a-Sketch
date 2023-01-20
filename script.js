const container = document.getElementById("container")
const smallBtn = document.querySelector(".smallBtn");
const mediumBtn = document.querySelector(".mediumBtn")
const largeBtn = document.querySelector(".largeBtn")
const xLargeBtn = document.querySelector(".xLargeBtn")

let paintOnGrid = false
document.body.addEventListener("onmousedown",() => paintOnGrid = true)
document.body.addEventListener("onmouseup",() => paintOnGrid = false)

function makeGrid(rowsCols){
  container.style.gridTemplateColumns = `repeat(${rowsCols}, 1fr)`
  container.style.gridTemplateRows = `repeat(${rowsCols}, 1fr)`

  for (let i = 0; i < (rowsCols * rowsCols); i++) {
  let square = document.createElement("div")
  square.className = "square"
  container.appendChild(square) 
  }
}

function reloadGrid(prefVal){
  container.innerHTML =""
  makeGrid(prefVal)
}

smallBtn.addEventListener("click", (prefVal) => {
  prefVal = 8
  reloadGrid(prefVal)
})
mediumBtn.addEventListener("click", (prefVal) => {
  prefVal = 16
  reloadGrid(prefVal)
})
largeBtn.addEventListener("click", (prefVal) => {
  prefVal = 32
  reloadGrid(prefVal)
})
xLargeBtn.addEventListener("click", (prefVal) => {
  prefVal = 64
})

window.onload = () => {
  makeGrid(16)
}

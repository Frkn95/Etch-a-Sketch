const container = document.getElementById("container")


function makeGrid(rows,cols){
    for (let i = 0; i < (rows * cols); i++) {
      let square = document.createElement("div")
      container.appendChild(square) 
      square.className = "square"
    }
}



makeGrid(16,16)

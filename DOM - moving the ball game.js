// const moveRight = function (){
//     const block = document.getElementById("block")
//     let left = parseInt(block.style.left) || 0
//     left += 15
//     block.style.left = left + "px" 
// }  //הזזה ימינה 


// const header = document.createElement("h1")
// header.innerHTML = "The Best Game Ever"
// header.style.color = "#c0392b"
// header.style.fontFamily = "Helvetica"
// document.body.appendChild(header)


// const header2 = document.createElement("h2")
// header2.innerHTML = "This is the second title"
// header2.className = "header2"
// header2.style.fontFamily = "Helvetica"
// header2.style.size = "10px"
// header2.style.position = "relative"
// document.body.appendChild(header2)

//  const ball = document.getElementById("block");

// const row = document.getElementById("row")

// const addRow = function (){
//     const newItem = document.createElement("li")
//     newItem.innerHTML = "A new item!"
//     list.appendChild(newItem)    // row.innerHtml = "I'm a new row!"
// };

//moving the ball game  ///
const block = document.getElementById("block")


const moveRight = function (){
    let right = parseInt(block.style.left) || 0
    right += 15
    block.style.left = right + "px" 
}  //הזזה ימינה 

const moveDown = function (){
    let down = parseInt(block.style.top) || 0
    down += 15
    block.style.top = down + "px" 
}  //

const moveUp= function (){
    let up = parseInt(block.style.top) || 0
    up -= 15
    block.style.top = up + "px" 
}  //

const moveLeft = function (){
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px" 
}  // 


//moving the ball game  ///
const block = document.getElementById("block")

const moveRight = function () {
    let right = parseInt(block.style.left) || 0
    right += 15
    block.style.left = right + "px"
}  //הזזה ימינה 


const moveDown = function () {
    let down = parseInt(block.style.top) || 0
    down += 15
    block.style.top = down + "px"
}  //

const moveUp = function () {
    let up = parseInt(block.style.top) || 0
    up -= 15
    block.style.top = up + "px"
}  //


const moveLeft = function () {
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"
}  // 
 

//--when a keyboard key is pressed will invok the correct function-- // 
document.onkeydown = function (e) {
    switch (e.keyCode) {
        case 37:
            moveLeft();
            break;

        case 38:
            moveUp();
            break;

        case 39:
            moveRight();
            break;

        case 40:
            moveDown();
            break;

    }
};

let container = document.querySelector(".container");
let counter = 0;
const restartbtn=document.querySelector(".rs")
restartbtn.addEventListener("click",restart)
// this function will fire when we click any one of the boxes
function mark(e) {
    let clickedBox = document.getElementById(e.target.id);
// condition to check which character to be placed
    if (counter == 0) {
        clickedBox.innerText = "O";
        counter++;
    }
    else {
        clickedBox.innerText = "X";
        counter--;
    }
    // making the box disable after a click
    clickedBox.disabled=true;

    // collection all the boxes in an array 
    let arr = [];
    for (a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
            arr.push(document.getElementById(`${a}${b}`));

        }
    }
    // checking the board on each click 
    if (arr[0].innerText !== "" && arr[0].innerText === arr[1].innerText && arr[1].innerText === arr[2].innerText) {
        gameEnd();
    } else if (arr[3].innerText !== "" && arr[3].innerText === arr[4].innerText && arr[3].innerText === arr[5].innerText) {
        gameEnd();
    } else if (arr[6].innerText !== "" && arr[6].innerText === arr[7].innerText && arr[6].innerText === arr[8].innerText) {
        gameEnd();
    } else if (arr[0].innerText !== "" && arr[0].innerText === arr[3].innerText && arr[0].innerText === arr[6].innerText) {
        gameEnd();
    } else if (arr[1].innerText !== "" && arr[1].innerText === arr[4].innerText && arr[1].innerText === arr[7].innerText) {
        gameEnd();
    } else if (arr[2].innerText !== "" && arr[2].innerText === arr[5].innerText && arr[2].innerText === arr[8].innerText) {
        gameEnd();
    } else if (arr[0].innerText !== "" && arr[0].innerText === arr[4].innerText && arr[0].innerText === arr[8].innerText) {
        gameEnd();
    } else if (arr[2].innerText !== "" && arr[2].innerText === arr[4].innerText && arr[2].innerText === arr[6].innerText) {
        gameEnd();
    }

}
// block the board 
function gameEnd(){
    restartbtn.classList.add("restart");
}
// to restart the game
function restart(){
    location.reload();
}
// creating UI and addition of eventListener to each box 
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        let div = document.createElement("button");
        div.setAttribute("id", `${i}${j}`);
        div.setAttribute("class", "sq")
        container.appendChild(div)
        div.addEventListener("click", mark)
    }
}



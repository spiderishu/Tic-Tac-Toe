let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector(".New-btn");
let messcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#message")
//x and o turn
let turn0 = true;

let winpattern = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];

const resetgame = () => {
    turn0 = true;
    enableboxes();
    messcontainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            //player 0
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkwinner();

    })

})
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showwinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner} `;
    messcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
            }
        }
    }
};
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

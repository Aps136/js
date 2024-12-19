document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("#reset");
    let msgcontainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");
    let turn0 = true;
    let gameOver = false;

    const winpattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    const resetGame = () => {
        turn0 = true; // Reset to player O's turn
        gameOver = false; // Allow gameplay again
        for (let box of boxes) {
            box.innerText = ""; // Clear box content
            box.disabled = false; // Enable box for clicking
        }
        msgcontainer.classList.add("hide"); // Hide message container
        console.log("Game has been reset.");
    };

    const disableboxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const showWinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
    };

    const checkWinner = () => {
        for (let pattern of winpattern) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("Winner:", pos1val);
                    showWinner(pos1val);
                    disableboxes();
                    gameOver = true;
                    return;
                }
            }
        }
    };

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (gameOver) return;

            if (turn0) {
                box.innerText = "O";
                turn0 = false;
            } else {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    resetbtn.addEventListener("click", () => {
        console.log("Reset Game button clicked");
        resetGame();
    });
});

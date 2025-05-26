let currentSign = 'x';
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.sign-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id == 'btn-x'){
            currentSign = 'x';
        }else{
            currentSign = 'o';
        }
        resetBoard();
    });
});

function resetBoard() {
  boxes.forEach(box => box.textContent = '');
}

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.textContent === '') {
      box.textContent = currentSign === 'x' ? '⛌' : '᮰';
      currentSign = currentSign === 'x' ? 'o' : 'x';
      checkWin();
    }
  });
});


function checkWin(){
    function get(i) {
        return boxes[i].innerText.trim();
    }

    if (get(0) !== '' && get(0) === get(1) && get(1) === get(2)) {
        showWinLine("line-h1");
    } else if (get(3) !== '' && get(3) === get(4) && get(4) === get(5)) {
        showWinLine("line-h2");
    } else if (get(6) !== '' && get(6) === get(7) && get(7) === get(8)) {
        showWinLine("line-h3");
    } else if (get(0) !== '' && get(0) === get(3) && get(3) === get(6)) {
        showWinLine("line-v1");
    } else if (get(1) !== '' && get(1) === get(4) && get(4) === get(7)) {
        showWinLine("line-v2");
    } else if (get(2) !== '' && get(2) === get(5) && get(5) === get(8)) {
        showWinLine("line-v3");
    } else if (get(0) !== '' && get(0) === get(4) && get(4) === get(8)) {
        showWinLine("line-d1");
    } else if (get(2) !== '' && get(2) === get(4) && get(4) === get(6)) {
        showWinLine("line-d2");
    } else if (![...boxes].some(box => box.innerText.trim() === '')) {
        console.log("Draw");
    }
};


function showWinLine(id) {
    const line = document.getElementById(id);
    line.style.opacity = "1";
    if (id.startsWith("line-d")) {
        line.style.width = "141.42%"; // For diagonals too
    } else if(id.startsWith("line-v")){
        line.style.height = "100%";
    } else {
        line.style.width = "100%";
    }
}


function isEmpty() {
    return [...boxes].some(box => box.textContent.trim() === '');
}
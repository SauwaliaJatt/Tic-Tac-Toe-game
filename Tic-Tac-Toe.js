let currentSign = 'x';
let gameOver = false;

const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('.sign-button');
const draw = document.querySelector('#draw');
const reset = document.querySelector('#reset-button');
const allButtons = document.querySelectorAll('button');


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

    gameOver = false;

    draw.style.width = "0";
    draw.style.opacity = "0";
    draw.innerText = '';

    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        line.style.opacity = "0";
        line.style.width = "0";
        line.style.height = "3px";
    });
}

boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (box.textContent === '' && !gameOver) {
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
        showWinLine("line-h1", get(0));
    } else if (get(3) !== '' && get(3) === get(4) && get(4) === get(5)) {
        showWinLine("line-h2", get(3));
    } else if (get(6) !== '' && get(6) === get(7) && get(7) === get(8)) {
        showWinLine("line-h3", get(6));
    } else if (get(0) !== '' && get(0) === get(3) && get(3) === get(6)) {
        showWinLine("line-v1", get(0));
    } else if (get(1) !== '' && get(1) === get(4) && get(4) === get(7)) {
        showWinLine("line-v2", get(1));
    } else if (get(2) !== '' && get(2) === get(5) && get(5) === get(8)) {
        showWinLine("line-v3", get(2));
    } else if (get(0) !== '' && get(0) === get(4) && get(4) === get(8)) {
        showWinLine("line-d1", get(0));
    } else if (get(2) !== '' && get(2) === get(4) && get(4) === get(6)) {
        showWinLine("line-d2", get(2));
    } else if (![...boxes].some(box => box.innerText.trim() === '')) {
        draw.style.width = "400px";
        draw.style.opacity = "1";
        draw.innerText = "Match DRAW";
    }
};


allButtons.forEach(button => {
    button.addEventListener('mousedown', () => {
      button.style.backgroundColor = 'lightgray';
    });
  
    button.addEventListener('mouseup', () => {
      button.style.backgroundColor = 'gray';
    });
  
    // if mouse leaves while held 
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = 'gray';
    });
  });  


function showWinLine(id, elementText) {
    const line = document.getElementById(id);
    line.style.opacity = "1";
    if (id.startsWith("line-d")) {
        line.style.width = "141.42%";
    } else if(id.startsWith("line-v")){
        line.style.height = "100%";
    } else {
        line.style.width = "100%";
    }

    gameOver = true;

    reset.innerText = 'REPLAY';

    setTimeout(() => {   
        draw.style.width = "400px";
        draw.style.opacity = "1";
        draw.innerText = `${elementText} WINS`; 
    }, 1000);
}


function isEmpty() {
    return [...boxes].some(box => box.textContent.trim() === '');
}

reset.addEventListener('click', () => {
    reset.innerText = 'RESET';
    resetBoard();
});
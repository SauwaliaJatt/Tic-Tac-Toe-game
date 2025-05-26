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
        console.log(get(0) + " wins");
    } else if (get(3) !== '' && get(3) === get(4) && get(4) === get(5)) {
        console.log(get(3) + " wins");
    } else if (get(6) !== '' && get(6) === get(7) && get(7) === get(8)) {
        console.log(get(6) + " wins");
    } else if (get(0) !== '' && get(0) === get(3) && get(3) === get(6)) {
        console.log(get(0) + " wins");
    } else if (get(1) !== '' && get(1) === get(4) && get(4) === get(7)) {
        console.log(get(1) + " wins");
    } else if (get(2) !== '' && get(2) === get(5) && get(5) === get(8)) {
        console.log(get(2) + " wins");
    } else if (get(0) !== '' && get(0) === get(4) && get(4) === get(8)) {
        console.log(get(0) + " wins");
    } else if (get(2) !== '' && get(2) === get(4) && get(4) === get(6)) {
        console.log(get(2) + " wins");
    } else if (![...boxes].some(box => box.innerText.trim() === '')) {
        console.log("Draw");
    }
};


function isEmpty(){
    boxes.forEach((box) => {
        if (box.textContent.trim() === '') {
            return true;
        }
    });
};
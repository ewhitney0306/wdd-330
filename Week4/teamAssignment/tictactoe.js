let turnNumber = 1;
var table = document.getElementById("table1");
const playerX = new Array();
const playerO = new Array ();
const winnerCombos = [
    ['cell1', 'cell2', 'cell3'],
    ['cell4', 'cell5', 'cell6'],
    ['cell7', 'cell8', 'cell9'],
    ['cell1', 'cell5', 'cell9'],
    ['cell3', 'cell5', 'cell7'],
    ['cell1', 'cell3', 'cell7'],
    ['cell2', 'cell5', 'cell8'],
    ['cell3', 'cell6', 'cell9']
];

for(let i = 0, row; row = table.rows[i]; i++){
    for(let j = 0, col; col = row.cells[j]; j++){
        col.addEventListener("click", onClick);
    }
}

function onClick(e){
    let target = e.target;
    if(turnNumber % 2 == 1){
        target.innerHTML = 'X';
        e.target.removeEventListener(e.type, onClick, false);
        let id = target.id;
        playerX.push(id);
        turnNumber ++;
    } else {
        target.innerHTML = 'O';
        target.removeEventListener(e.type, onClick);
        let id = target.id;
        playerO.push(id);
        turnNumber ++;
    }
};

function resetGame(){
    turnNumber = 1;

    var table = document.getElementById("table1");

    for(let i = 0, row; row = table.rows[i]; i++){
        for(let j = 0, col; col = row.cells[j]; j++){
            col.innerHTML = "";
            col.addEventListener("click", onClick);
        }
    }
}

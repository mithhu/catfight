/***********Handling everyting related to movement of the players**************/
const daenerysMovement = (i, j) => {
    daenerys.active = false;
    cersei.active = true;
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
    daenerysAttackingPoint = daenerys.damagePoint;
    daenerysAttackingPointSpan.innerText = daenerysAttackingPoint;
    document.getElementById(`${p1Index1}${p1Index2}`).innerHTML = null;
    document.getElementById(`${i}${j}`).innerHTML = daenerysAvatar;
    store[i][j] = daenerys;
    store[p1Index1][p1Index2] = "";
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store.length; j++) {
            document.getElementById(`${i}${j}`).className = "grey";
            path[i][j] = false;
        }
    }
}

const cerseiMovement = (i, j) => {
    cersei.active = false;
    daenerys.active = true;
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";;
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
    cerseiAttackingPoint = cersei.damagePoint;
    cerseiAttackingPointSpan.innerText = cerseiAttackingPoint;
    document.getElementById(`${p2Index1}${p2Index2}`).innerHTML = null;
    document.getElementById(`${i}${j}`).innerHTML = cerseiAvatar;
    store[i][j] = cersei;
    store[p2Index1][p2Index2] = "";
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store.length; j++) {
            document.getElementById(`${i}${j}`).className = "grey";
            path[i][j] = false;
        }
    }
}

//Handling all the clicks on the board
const movement = (store, id) => {
    let [i, j] = id.split("");
    i = parseInt(i);
    j = parseInt(j);
    // Daenerys 1st click
    if (store[i][j].name === "daenerys" && daenerys.active === true) {
        p1Index1 = i;
        p1Index2 = j;
        route(i, j, store);
    }
    // Daenerys 2nd click
    if (
        daenerys.active === true &&
        document.getElementById(`${i}${j}`).className === "yellow"
    ) {
        if (store[i][j].type === "player") {
            $("#fightStartNow").modal();
        } else if (store[i][j].type === "weapon") {
            daenerys.damagePoint = daenerys.damagePoint + store[i][j].point;
            daenreysDamagePointSpan.innerText = daenerys.damagePoint;
            weaponRemaining--;
            daenerysMovement(i, j);
            if (weaponRemaining === 0) {
                $("#fightStart").modal();
            }
        } else {
            daenerysMovement(i, j)
        }
    }
    //Cersei 1st click
    if (store[i][j].name === "cersei" && cersei.active === true) {
        p2Index1 = i;
        p2Index2 = j;
        route(i, j, store);
    }
    //Cersei 2nd click
    if (
        cersei.active === true &&
        document.getElementById(`${i}${j}`).className === "yellow"
    ) {
        if (store[i][j].type === "player") {
            $("#fightStartNow").modal();
        }
        else if (store[i][j].type === "weapon") {
            cersei.damagePoint = cersei.damagePoint + store[i][j].point;
            cerseiDamagePointSpan.innerText = cersei.damagePoint;
            weaponRemaining--;
            cerseiMovement(i, j);
            if (weaponRemaining === 0) {
                $("#fightStart").modal();
            }
        } else {
            cerseiMovement(i, j)
        }
    }
}
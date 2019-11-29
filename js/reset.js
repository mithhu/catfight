//point reset to initial point
const pointReset = () => {
    weaponRemaining = 4;
    daenerys.damagePoint = 10;
    cersei.damagePoint = 10;
    cerseiAttackingPoint = cersei.damagePoint;
    daenerysAttackingPoint = daenerys.damagePoint;
    cersei.active = false;
    daenerys.active = true;
    cersei.point = 100;
    cerseiPointSpan.innerText = cersei.point;
    daenerys.point = 100;
    daenreysPointSpan.innerText = daenerys.point;
    document.getElementById("daenerysAttack").disabled = true;
    document.getElementById("daenerysDefend").disabled = true;
    document.getElementById("cerseiAttack").disabled = true;
    document.getElementById("cerseiDefend").disabled = true;
}

//Game reset
const reset = () => {
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store.length; j++) {
            document.getElementById(`${i}${j}`).innerHTML = null;
            document.getElementById(`${i}${j}`).className = "grey";
            store[i][j] = "";
            path[i][j] = false;
        }
    }
    pointReset();
    initialization();
};
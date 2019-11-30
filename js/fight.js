/*****Handling everything related to fight******/

//Setting up everything for fight
const fightStart = () => {
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store.length; j++) {
            document.getElementById(`${i}${j}`).innerHTML = null;
            document.getElementById(`${i}${j}`).className = "grey";
        }
    }
    document.getElementById("daenerysAttack").disabled = false;
    document.getElementById("daenerysDefend").disabled = false;
    daenerys.active = true;
    cersei.active = false;
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
}

const daenerysFightToggle = () => {
    document.getElementById("daenerysAttack").disabled = true;
    document.getElementById("daenerysDefend").disabled = true;
    document.getElementById("cerseiAttack").disabled = false;
    document.getElementById("cerseiDefend").disabled = false;
    daenerys.active = false;
    cersei.active = true;
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
}

const cerseiFightToggle = () => {
    document.getElementById("daenerysAttack").disabled = false;
    document.getElementById("daenerysDefend").disabled = false;
    document.getElementById("cerseiAttack").disabled = true;
    document.getElementById("cerseiDefend").disabled = true;
    daenerys.active = true;
    cersei.active = false;
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
}

const daenerysAttack = () => {
    cersei.point = cersei.point - daenerysAttackingPoint;
    if (cersei.point <= 0) {
        $("#daenerysWon").modal();
    } else {
        cerseiPointSpan.innerText = cersei.point;
        daenerysAttackingPoint = daenerys.damagePoint;
        daenerysAttackingPointSpan.innerText = daenerysAttackingPoint;
        cerseiAttackingPoint = cersei.damagePoint;
        cerseiAttackingPointSpan.innerText = cerseiAttackingPoint;
        daenerysFightToggle();
    }
};

const daenerysDefend = () => {
    cerseiAttackingPoint = cersei.damagePoint / 2;
    cerseiAttackingPointSpan.innerText = cerseiAttackingPoint;
    daenerysAttackingPoint = daenerys.damagePoint;
    daenerysAttackingPointSpan.innerText = daenerysAttackingPoint;
    daenerysFightToggle();
};

const cerseiAttack = () => {
    daenerys.point = daenerys.point - cerseiAttackingPoint;
    if (daenerys.point <= 0) {
        $("#cerseiWon").modal();
    } else {
        daenreysPointSpan.innerText = daenerys.point;
        cerseiAttackingPoint = cersei.damagePoint;
        cerseiAttackingPointSpan.innerText = cerseiAttackingPoint;
        daenerysAttackingPoint = daenerys.damagePoint;
        daenerysAttackingPointSpan.innerText = daenerysAttackingPoint;
        cerseiFightToggle();
    }
};

const cerseiDefend = () => {
    daenerysAttackingPoint = daenerys.damagePoint / 2;
    daenerysAttackingPointSpan.innerText = daenerysAttackingPoint;
    cerseiAttackingPoint = cersei.damagePoint;
    cerseiAttackingPointSpan.innerText = cerseiAttackingPoint;
    cerseiFightToggle()
};
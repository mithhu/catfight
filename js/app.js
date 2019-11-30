//Common Player Object
class Player {
    constructor(name, point, avatar, damagePoint, attack, defend, type, active) {
        (this.name = name),
            (this.point = point),
            (this.avatar = avatar),
            (this.damagePoint = damagePoint),
            (this.attack = attack),
            (this.defend = defend),
            (this.type = type),
            (this.active = active);
    }
}

//Common Weapon Object
class Weapon {
    constructor(name, point, avatar, type) {
        this.name = name;
        (this.point = point), (this.avatar = avatar), (this.type = type);
    }
}

//inserting values on the new instance of object
const daenerysAvatar =
    "<img src='./css/daenerys.png' width='16' height='16'>";
const daenerys = new Player(
    "daenerys",
    100,
    daenerysAvatar,
    10,
    false,
    false,
    "player",
    true
);
const cerseiAvatar =
    "<img src='./css/cersei.png' width='16' height='16'>";
const cersei = new Player(
    "cersei",
    100,
    cerseiAvatar,
    10,
    false,
    false,
    "player",
    false
);
const fireAvatar =
    "<img src='./css/fire.png' width='16' height='16'>";
const fire = new Weapon("fire", 30, fireAvatar, "weapon");
const lightBringerAvatar =
    "<img src='./css/lightbringer.png' width='16' height='16'>";
const lightbringer = new Weapon("fire", 20, lightBringerAvatar, "weapon");
const dragonGlassAvatar =
    "<img src='./css/dragon_glass.png' width='16' height='16'>";
const dragonGlass = new Weapon("fire", 40, dragonGlassAvatar, "weapon");
const dragonAvatar =
    "<img src='./css/dragon.png' width='16' height='16'>";
const dragon = new Weapon("fire", 50, dragonAvatar, "weapon");


//Variable for changing player and its avatar
let p1Index1 = 0;
let p1Index2 = 0;
let p2Index1 = 0;
let p2Index2 = 0;

//Global varaible for Point
let daenerysAttackingPoint = 0;
let cerseiAttackingPoint = 0;
let weaponRemaining = 4;

/*******Global varaible for Daenerys's Point******/
let displayDaenerysPoint = document.getElementById("pointDaenerys");
let daenreysPointSpan = document.createElement("span");
displayDaenerysPoint.appendChild(daenreysPointSpan);
daenreysPointSpan.innerText = daenerys.point;

let displayDaenerysDamagePoint = document.getElementById("pointDamageDaenerys");
let daenreysDamagePointSpan = document.createElement("span");
displayDaenerysDamagePoint.appendChild(daenreysDamagePointSpan);
daenreysDamagePointSpan.innerText = daenerys.damagePoint;

let displayDaenerysAttackingPoint = document.getElementById(
    "pointAttackingDaenerys"
);
let daenerysAttackingPointSpan = document.createElement("span");
displayDaenerysAttackingPoint.appendChild(daenerysAttackingPointSpan);
daenerysAttackingPointSpan.innerText = daenerys.damagePoint;

/******Global varaible for Cersei's Point**********/
let displayCerseiPoint = document.getElementById("pointCersei");
let cerseiPointSpan = document.createElement("span");
displayCerseiPoint.appendChild(cerseiPointSpan);
cerseiPointSpan.innerText = cersei.point;

let displayCerseiDamagePoint = document.getElementById("pointDamageCersei");
let cerseiDamagePointSpan = document.createElement("span");
displayCerseiDamagePoint.appendChild(cerseiDamagePointSpan);
cerseiDamagePointSpan.innerText = cersei.damagePoint;

let displayCerseiAttackingPoint = document.getElementById(
    "pointAttackingCersei"
);
let cerseiAttackingPointSpan = document.createElement("span");
displayCerseiAttackingPoint.appendChild(cerseiAttackingPointSpan);
cerseiAttackingPointSpan.innerText = cersei.damagePoint;



//Global array for mainintaing className which changes the color of the route or board
let path = [];
for (let i = 0; i < 10; i++) {
    path[i] = [];
    for (let j = 0; j < 10; j++) {
        path[i][j] = false;
    }
}

/*****Store for all the elements in the board*********/
var store = [];
let tr = "";
let table = document.createElement("table");
for (let i = 0; i < 10; i++) {
    store[i] = {};
    tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        store[i][j] = "";
        let td = document.createElement("td");
        td.setAttribute("id", `${i}${j}`);
        td.addEventListener("click", () => movement(store, td.getAttribute("id")));
        td.className = "grey";
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.getElementById("tableContainer").appendChild(table);

/************Setting the game*************/
let displayDaenerysActive = document.getElementById("daenerysActive");
let daenreysActiveSpan = document.createElement("span");
displayDaenerysActive.appendChild(daenreysActiveSpan);
let displayCerseiActive = document.getElementById("cerseiActive");
let cerseiActiveSpan = document.createElement("span");
displayCerseiActive.appendChild(cerseiActiveSpan);
document.getElementById("reset").disabled = true;
document.getElementById("cerseiAttack").disabled = true;
document.getElementById("cerseiDefend").disabled = true;
document.getElementById("daenerysAttack").disabled = true;
document.getElementById("daenerysDefend").disabled = true;





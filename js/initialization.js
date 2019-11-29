/****Setting up everything for starting a game****/
const initialization = () => {
    document.getElementById("start").disabled = true;
    document.getElementById("reset").disabled = false;

    //Getting Index for avatars
    let [indexDaenerys1, indexDaenerys2, indexDaenerys] = matrixIndex();
    let [indexCersei1, indexCersei2, indexCersei] = matrixIndex();
    let [indexFire1, indexFire2, indexFire] = matrixIndex();
    let [
        indexLightBringer1,
        indexLightBringer2,
        indexLightBringer
    ] = matrixIndex();
    let [indexDragonGlass1, indexDragonGlass2, indexDragonGlass] = matrixIndex();
    let [indexDragon1, indexDragon2, indexDragon] = matrixIndex();


    /***********adding avatar in the store using index*************/
    let selectedDaenerys = document.getElementById(indexDaenerys);
    if (selectedDaenerys.innerHTML) {
        [selectedDaenerys, indexDaenerys1, indexDaenerys2] = overRideHandle(
            selectedDaenerys
        );
        selectedDaenerys = newSelectedDaenerys;
    }
    selectedDaenerys.innerHTML = daenerysAvatar;
    store[indexDaenerys1][indexDaenerys2] = daenerys; //danerys

    selectedCersei = document.getElementById(indexCersei);
    if (selectedCersei.innerHTML) {
        [newSelectedCersei, indexCersei1, indexCersei2] = overRideHandle(
            selectedCersei
        );
        selectedCersei = newSelectedCersei;
    }
    selectedCersei.innerHTML = cerseiAvatar;
    store[indexCersei1][indexCersei2] = cersei; //cersei

    selectedFire = document.getElementById(indexFire);
    if (selectedFire.innerHTML) {
        [selectedFire, indexFire1, indexFire2] = overRideHandle(selectedFire);
    }
    selectedFire.innerHTML = fireAvatar;
    store[indexFire1][indexFire2] = fire;

    selectedLightBringer = document.getElementById(indexLightBringer);
    if (selectedLightBringer.innerHTML) {
        [
            selectedLightBringer,
            indexLightBringer1,
            indexLightBringer2
        ] = overRideHandle(selectedLightBringer);
    }
    selectedLightBringer.innerHTML = lightBringerAvatar;
    store[indexLightBringer1][indexLightBringer2] = lightbringer;

    selectedDragonGlass = document.getElementById(indexDragonGlass);
    if (selectedDragonGlass.innerHTML) {
        [
            selectedDragonGlass,
            indexDragonGlass1,
            indexDragonGlass2
        ] = overRideHandle(selectedDragonGlass);
    }
    selectedDragonGlass.innerHTML = dragonGlassAvatar;
    store[indexDragonGlass1][indexDragonGlass2] = dragonGlass;

    selectedDragon = document.getElementById(indexDragon);
    if (selectedDragon.innerHTML) {
        [selectedDragon, indexDragon1, indexDragon2] = overRideHandle(
            selectedDragon
        );
    }
    selectedDragon.innerHTML = dragonAvatar;
    store[indexDragon1][indexDragon2] = dragon;

    //showing turn and point on the view
    daenreysActiveSpan.innerText = daenerys.active ? "Your Turn" : "";
    cerseiActiveSpan.innerText = cersei.active ? "Your Turn" : "";
    daenreysDamagePointSpan.innerText = daenerys.damagePoint;
    cerseiDamagePointSpan.innerText = cersei.damagePoint;
    cerseiAttackingPointSpan.innerText = cersei.damagePoint;
    daenerysAttackingPointSpan.innerText = daenerys.damagePoint;
};
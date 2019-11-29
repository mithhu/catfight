//handling movement of the players 
const route = (i, j, store) => {
    store[i + 1] === undefined ? null : (path[i + 1][j] = true);
    if (store[i + 1] && typeof (store[i + 1][j]) !== "object") {
        store[i + 2] === undefined ? null : (path[i + 2][j] = true);
    }
    store[i - 1] === undefined ? null : (path[i - 1][j] = true);
    if (store[i - 1] && typeof (store[i - 1][j]) !== "object") {
        store[i - 2] === undefined ? null : (path[i - 2][j] = true);
    }
    store[i][j + 1] === undefined ? null : (path[i][j + 1] = true);
    if (typeof (store[i][j + 1]) !== "object") {
        store[i][j + 2] === undefined ? null : (path[i][j + 2] = true);
    }
    store[i][j - 1] === undefined ? null : (path[i][j - 1] = true);
    if (typeof (store[i][j - 1]) !== "object") {
        store[i][j - 2] === undefined ? null : (path[i][j - 2] = true);
    }
    for (let i = 0; i < store.length; i++) {
        for (let j = 0; j < store.length; j++) {
            if (path[i][j] === true) {
                document.getElementById(`${i}${j}`).className = "yellow";
            }
        }
    }
};


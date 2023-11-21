window.onload = () => {
    console.log("betöltődött")
    for (var sor = 0; sor < 10; sor++) { 
        //új div létrehozása az új sornak
        var ujDiv = document.createElement("div");
        //új div osztálylistájához add hozzá a "sor"-t
        ujDiv.classList.add('sor');
        //új div-et add hozzá a "pascal" gyermekeihez
        var pascalDiv = document.getElementById('pascal');
        pascalDiv.appendChild(ujDiv)
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            //új div létrehozása az új elemnek
            var ujElemDiv = document.createElement("div");
            //új elem div osztálylistájához add hozzá az "elem"-et
            ujElemDiv.classList.add('sor');
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            ujElemDiv.innerText = faktoriális(sor / (faktoriális(oszlop) * faktoriális(sor-oszlop)));
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
            ujDiv.appendChild(ujElemDiv); 
        }
    }
};
var faktoriális = function (n) {
    let er = 1;
    for (let i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}


window.onload = () => {
    console.log("betöltődött")
    for (var sor = 0; sor < 10; sor++) {
        var sor = document.createElement("div")
        document.getElementById("pascal").appendChild(sor);
        //új div létrehozása az új sornak
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var oszlop = document.createElement("div");
            oszlop.innerHTML = '${sor}:${oszlop}';
            sor.appendChild(oszlop);
            //új div létrehozása az új elemnek
            //új elem div osztálylistájához add hozzá az "elem"-et
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //legyen az innerHTML a megfelelő szám
            //új elem div-et vedd fel a sor elemei közé
        }
    }
}



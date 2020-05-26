var poleGry;
var kontekst;

var wysokoscOkna, szerokoscOkna;
var wielkoscPolaGry;

var animacja;

var paletki=[];
var pileczka;

var jednostka=1;

window.onload=function() {
    poleGry=document.getElementById('poleGry');
    kontekst=poleGry.getContext('2d');

    window.addEventListener('resize', zmienRozmiarOkna);

    window.addEventListener('mousemove', ruchMyszki);
    zmienRozmiarOkna();

    paletki.push(new Paletka(95, true));
    paletki.push(new Paletka(0, false));

    pileczka=new Pilka();

    animacja=setInterval(nastepnaKlatka, 1000/60);    
}

function zmienRozmiarOkna() {
    wysokoscOkna=window.innerHeight;
    szerokoscOkna=window.innerWidth;

    if (wysokoscOkna>szerokoscOkna) wielkoscPolaGry=szerokoscOkna;
    else wielkoscPolaGry=wysokoscOkna;

    poleGry.width=wielkoscPolaGry;
    poleGry.height=wielkoscPolaGry;

    jednostka=wielkoscPolaGry/100;
}

function nastepnaKlatka() {
    kontekst.fillStyle='rgb(0,0,0)';
    kontekst.fillRect(0,0, poleGry.width, poleGry.height);
    pileczka.narysuj();
    for (var i=0; i<paletki.length; i++) {
        paletki[i].narysuj();
    }

}

function ruchMyszki(wydarzenie) {
    var pozycjaMyszki=wydarzenie.clientX;

    if (pozycjaMyszki<szerokoscOkna*0.3) {
        for (var i=0; i<paletki.length; i++) {
            if (paletki[i].gracz==true) paletki[i].przyspieszenieX=-0.2;
        }
    } else if (pozycjaMyszki>szerokoscOkna-(szerokoscOkna*0.3) ) {
        for (var i=0; i<paletki.length; i++) {
            if (paletki[i].gracz==true) paletki[i].przyspieszenieX=0.2;
        }
    } else {
        for (var i=0; i<paletki.length; i++) {
            if (paletki[i].gracz==true) paletki[i].przyspieszenieX=0;
        }
    } 
}
class Paletka {
    constructor(y, gracz) {
        this.szerokosc=20;
        this.wysokosc=5;

        this.pozycjaX=50-(this.szerokosc/2);
        this.pozycjaY=y;

        this.predkoscX=0;
        this.przyspieszenieX=0;
        this.gracz=gracz;
    }

    narysuj() {
        this.policzPozycje();
        kontekst.fillStyle='rgb(150,10,10)';
        kontekst.fillRect(this.pozycjaX*jednostka, this.pozycjaY*jednostka, this.szerokosc*jednostka, this.wysokosc*jednostka);
    }

    policzPozycje() {
        this.policzPredkosc();
        this.pozycjaX+=this.predkoscX;
        if (this.pozycjaX<0) {
            this.predkoscX*=-0.5;
        }
        if (this.pozycjaX<0) this.pozycjaX=0;
        if (this.pozycjaX>100-(this.szerokosc)) {
            this.predkoscX*=-0.5;
        }
        if (this.pozycjaX>100-(this.szerokosc)) this.pozycjaX=100-(this.szerokosc);

        this.predkoscX*=0.9;
    }

    policzPredkosc() {
        if (this.gracz==true) {
            this.predkoscX+=this.przyspieszenieX;
        } else {
            if (pileczka.pozycjaX<this.pozycjaX) this.predkoscX=-0.7;
            else if (pileczka.pozycjaX>this.pozycjaX+this.szerokosc) this.predkoscX=0.7;
            else this.predkoscX=0;
        }
        
    }
}
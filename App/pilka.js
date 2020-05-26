class Pilka {
    constructor() {
        this.kat=Math.random()*2*Math.PI;
        this.predkosc=1;
        this.predkoscX=0;
        this.predkoscY=0;

        this.pozycjaX=50;
        this.pozycjaY=50;

        this.promien=2;
    }

    narysuj() {
        this.policzPozycje();
        kontekst.fillStyle='rgb(255,255,255)';
        kontekst.beginPath();
        kontekst.arc(this.pozycjaX*jednostka, this.pozycjaY*jednostka, this.promien*jednostka, 0, 2*Math.PI);
        kontekst.fill();
    }

    policzPozycje() {
        this.predkoscX=this.predkosc*Math.sin(this.kat);
        this.predkoscY=this.predkosc*Math.cos(this.kat);

        this.pozycjaX+=this.predkoscX;
        this.pozycjaY+=this.predkoscY;

        if (this.pozycjaY<5 || this.pozycjaY>95) {
            this.kat=(Math.PI)-this.kat;

            if (this.pozycjaY<5) {
                if (
                    this.pozycjaX+this.promien<paletki[1].pozycjaX
                    ||
                    this.pozycjaX-this.promien>paletki[1].pozycjaX+paletki[1].szerokosc
                    ) {
                        alert ('Game Over, wygrywa gracz.');
                        this.kat=Math.random()*2*Math.PI;
                        this.predkosc=1;
                        this.predkoscX=0;
                        this.predkoscY=0;

                        this.pozycjaX=50;
                        this.pozycjaY=50;
                    }

            }

            if (this.pozycjaY>95) {
                if (
                    this.pozycjaX+this.promien<paletki[0].pozycjaX
                    ||
                    this.pozycjaX-this.promien>paletki[0].pozycjaX+paletki[0].szerokosc
                    ) {

                    
                    alert ('Game Over, wygrywa komputer');
                    this.kat=Math.random()*2*Math.PI;
                    this.predkosc=1;
                    this.predkoscX=0;
                    this.predkoscY=0;
            
                    this.pozycjaX=50;
                    this.pozycjaY=50;
                }
            }

        }

        if (this.pozycjaX<0 || this.pozycjaX>100) {
            this.kat=(2*Math.PI)-this.kat;
        }
    }


}
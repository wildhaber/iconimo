import Factory from './iconimo.factory';

class Iconimo {

    constructor(config = {}) {

        this.iconimos = Array.from(document.querySelectorAll(`[class^='iconimo-']`));

        this.config = Object.assign({
            easing : 'sin.in',
            duration : 300,
            strokeRatio: 20,
            radiusRatio: 3,
            strokeLinecap: 'round',
            cssPrefix : 'iconimo-',
        }, config);

        this.activate();

    }

    activate() {
        this.drawIcons();
    }

    drawIcons() {
        this.iconimos.forEach((i) => {
            new Factory(i, this.config);
        });
    }

    getIconimos() {
        return this.iconimos;
    }


}

export default Iconimo;
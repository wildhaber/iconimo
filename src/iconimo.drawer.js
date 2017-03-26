import mojs from 'mo-js';
import Icons from './iconimo.iconset';

class IconimoDrawer {

    constructor(type, element, config) {

        this.element = element;

        this._icons = new Icons();
        this._icon = null;

        this.dimensions = {
            w: element.offsetWidth,
            h: element.offsetHeight,
            strokeWidth: (element.offsetHeight / config.strokeRatio),
            baseRadius: (element.offsetWidth / config.radiusRatio),
            baseWidth: (element.offsetWidth / (config.radiusRatio / 2)),
        };

        this.config = config;

        this.type = type.toLowerCase();
        this.shapes = Array.from(new Array(5)).map(
            () => {
                return new mojs.Shape({
                    origin: '50% 50%',
                    parent: this.element,
                    shape: 'line',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeLinecap: this.config.strokeLinecap,
                    isShowStart: false,
                    strokeWidth: this.dimensions.strokeWidth,
                    angle: 0,
                    scale: 1,
                    x: 0,
                    radiusX: this.dimensions.baseRadius,
                    duration: 1,
                    delay: 0,
                    easing: this.config.easing,
                    strokeDashoffset: 0,
                    strokeDasharray: this.dimensions.baseWidth,
                });
            }
        );

        this.draw();
    }

    draw() {

        let icon = this._icons.get(this.type);

        if (icon) {
            this._icon = new icon(this.dimensions, this.shapes, this.config);
            this._icon.show();
        } else {
            let msg = 'Type: ' + this.type + ' does not exist in iconimo drawer library.';
            throw new Error(msg);
        }

    }

    update(to) {

        if(this._icon && this.type !== to) {

            this._icon
                .out()
                .then(() => {
                    let icon = this._icons.get(to);
                    if(icon) {
                        this.type = to;
                        this._icon = new icon(this.dimensions, this.shapes, this.config);
                        return this._icon.show();
                    }
                });
        }

    }


}

export default IconimoDrawer;
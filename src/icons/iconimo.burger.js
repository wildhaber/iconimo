import Icon from './iconimo.icon';

class Burger extends Icon {

    constructor(dimensions, shapes, config) {
        super(dimensions, shapes, config);
    }

    show() {

        return new Promise(
            (resolve, reject) => {

                let counter = 3;

                for (let i = 0, l = counter; i < l; i++) {
                    let _offset = (i - 1) * 0.2;
                    let _shape = this._shapes[i];
                    _shape
                        .then(
                            {
                                angle: 0,
                                duration: this._config.duration,
                                scale: 1,
                                x: 0,
                                y: this._dimensions.h * _offset,
                                strokeDashoffset: 0,
                            }
                        )
                        .then(
                            {
                                onComplete : () => {
                                    counter--;
                                    if (!counter) {
                                        resolve();
                                    }
                                }
                            }
                        )
                        .play();
                }

            }
        )
            ;

    }

    out() {
        return new Promise(
            (resolve, reject) => {

                let counter = 3;

                for (let i = 0, l = counter; i < l; i++) {
                    let _shape = this._shapes[i];

                    _shape
                        .then(
                            {
                                angle: 0,
                                duration: this._config.duration / 1.5,
                                scale: 1,
                                x: 0,
                                y: 0,
                            }
                        )
                        .then(
                            {
                                scale: 1,
                                duration: 1,
                            }
                        )
                        .then(
                            {
                                onComplete: () => {
                                    counter--;
                                    if (!counter) {
                                        resolve();
                                    }
                                }
                            }
                        )
                        .play();
                }
            }
        );

    }

}

export default Burger;
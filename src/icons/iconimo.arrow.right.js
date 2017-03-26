import Icon from './iconimo.icon';

class ArrowRight extends Icon {

    constructor(dimensions, shapes, config) {
        super(dimensions, shapes, config);
    }

    show() {

        return new Promise(
            (resolve, reject) => {

                let counter = 3;

                    let resetOptions = {
                        origin: '100% 50%',
                        y:  0,
                        x: 0,
                        angle: 0,
                        duration: this._config.duration,
                        strokeDasharray: this._dimensions.baseWidth,
                        strokeDashoffset: 0,
                    };

                    this._shapes[0]
                        .then(resetOptions)
                        .then({
                            y: (this._dimensions.strokeWidth) / 3,
                            strokeDasharray: this._dimensions.baseWidth,
                            strokeDashoffset: (this._dimensions.w / -3),
                            angle: 45,
                        })
                        .then({
                            onComplete : () => {
                                counter--;
                                if(!counter) {
                                    resolve();
                                }
                            }
                        }).play();

                    this._shapes[1]
                        .then({
                            y : 0,
                            x : (this._dimensions.strokeWidth) / -3,
                            angle: 0,
                            delay: this._config.duration,
                            duration: this._config.duration,
                            strokeDasharray: this._dimensions.baseWidth,
                            strokeDashoffset: (this._dimensions.w / -6) + ((this._dimensions.strokeWidth) / 3),
                            opacity: 1,
                        })
                        .then({
                            onComplete : () => {
                                counter--;
                                if(!counter) {
                                    resolve();
                                }
                            }
                        })
                        .play();

                    this._shapes[2]
                        .then(resetOptions)
                        .then({
                            y: (this._dimensions.strokeWidth) / -3,
                            strokeDasharray: this._dimensions.baseWidth,
                            strokeDashoffset: (this._dimensions.w / -3),
                            angle: -45,
                        })
                        .then({
                            onComplete : () => {
                                counter--;
                                if(!counter) {
                                    resolve();
                                }
                            }
                        }).play();

            }
        );

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

export default ArrowRight;
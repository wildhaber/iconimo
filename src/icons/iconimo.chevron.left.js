import Icon from './iconimo.icon';

class ChevronLeft extends Icon {

    constructor(dimensions, shapes, config) {
        super(dimensions, shapes, config);
    }

    show() {

        return new Promise(
            (resolve, reject) => {

                let counter = 3;

                let resetOptions = {
                    origin: '0% 50%',
                    y:  0,
                    x: 0,
                    angle: 0,
                    duration: this._config.duration,
                    strokeDashoffset: 0,
                };

                this._shapes[0]
                    .then(resetOptions)
                    .then({
                        x: (this._dimensions.baseWidth / 3),
                        y: (this._dimensions.strokeWidth) / 3,
                        strokeDasharray: this._dimensions.baseWidth,
                        strokeDashoffset: (this._dimensions.baseRadius),
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

                this._shapes[1]
                    .then(
                        {
                            delay: this._config.duration,
                            origin: '50% 50%',
                            y: 0,
                            x: 0,
                            angle: 0,
                            scale: 0,
                            strokeDashoffset: 0,
                            duration: 1,
                        }
                    )
                    .then({
                        onComplete : () => {
                            counter--;
                            if(!counter) {
                                resolve();
                            }
                        }
                    }).play();

                this._shapes[2]
                    .then(resetOptions)
                    .then({
                        x: (this._dimensions.baseWidth / 3),
                        y: (this._dimensions.strokeWidth) / -3,
                        strokeDasharray: this._dimensions.baseWidth,
                        strokeDashoffset: (this._dimensions.baseRadius),
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
                                opacity: 1,
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

export default ChevronLeft;
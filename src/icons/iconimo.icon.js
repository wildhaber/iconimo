class IconimoIcon {

    constructor(dimensions, shapes, config) {
        this._dimensions = dimensions;
        this._shapes = shapes;
        this._config = config;
    }

    in() {
        throw Error('An Icon needs to have an in method.');
    }

    out() {
        throw Error('An Icon needs to have an out method.');
    }

}

export default IconimoIcon;
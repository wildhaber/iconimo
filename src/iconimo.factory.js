import Drawer from './iconimo.drawer';

class IconimoFactory {

    constructor(element, config) {
        this.element = element;
        this.config = config;

        this.ICONIMO_PREFIX = config.cssPrefix;

        this.icon = null;

        this.observer = new MutationObserver((mutations) => {
            mutations.forEach(() => {
                let currentIcon = this.extractIcon();
                if(this.icon !== currentIcon) {
                    this.paint.update(currentIcon);
                    this.icon = currentIcon;
                }
            });
        });

        this.observeConfig = {
            attributes: true,
            attributeOldValue : false,
            attributeFilter: [`class`],
        };

        this.observe();
        this.render();

    }

    observe() {
        this.observer.observe(this.element, this.observeConfig);
    }

    render() {
        this.icon = this.extractIcon();
        this.paint = this.draw();
    }

    extractIcon() {

        let classes = this.element
            .classList
            .value
            .split(' ')
            .filter(
                (className) => {
                    return (
                        className.startsWith(this.ICONIMO_PREFIX) &&
                        className !== this.ICONIMO_PREFIX
                    );
                }
            );

        if(classes.length > 0) {
            return classes[0].substring(this.ICONIMO_PREFIX.length).toLowerCase().replace(/-/g,'_');
        } else {
            return null;
        }

    }

    draw() {

        if(!this.icon) {
            return;
        }

        return new Drawer(this.icon, this.element, this.config);

    }

    update() {
        this.render();
    }

}

export default IconimoFactory;
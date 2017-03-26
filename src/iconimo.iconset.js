import Burger from './icons/iconimo.burger';
import Close from './icons/iconimo.close';
import ArrowLeft from './icons/iconimo.arrow.left';
import ArrowRight from './icons/iconimo.arrow.right';
import Plus from './icons/iconimo.plus';
import Minus from './icons/iconimo.minus';
import ChevronRight from './icons/iconimo.chevron.right';
import ChevronLeft from './icons/iconimo.chevron.left';

class IconimoIconset {

    constructor() {
        this.icons = {
            burger : Burger,
            close : Close,
            plus : Plus,
            minus : Minus,
            arrow_left : ArrowLeft,
            arrow_right : ArrowRight,
            chevron_right : ChevronRight,
            chevron_left : ChevronLeft,
        }
    }

    get(icon) {
        if(typeof this.icons[icon] === 'function') {
            return this.icons[icon];
        } else {
            throw new Error('Icon \''+icon+'\' not found in the list.');
        }
    }

}

export default IconimoIconset;
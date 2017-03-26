# iconimo

[![iconimo poster](https://github.com/wildhaber/iconimo/raw/master/demo/iconimo.gif "iconimo")](https://iconimo.scripter.click)

### Demo: [iconimo.scripter.click](https://iconimo.scripter.click)

## Icons

 - iconimo-burger
 - iconimo-close
 - iconimo-plus
 - iconimo-minus
 - iconimo-arrow-left
 - iconimo-arrow-right
 - iconimo-chevron-left
 - iconimo-chevron-right

## Getting Started</h2>

### Install

```
npm install iconimo --save
```

### Run

```javascript
import Iconimo from 'iconimo';

// Default Option
const iconimo = new Iconimo();

// With Options
const iconimo = new Iconimo({
    easing : 'sin.in',
    duration : 300, // animation duration
    strokeRatio : 20, // element height / strokeRatio = strokeWidth
    radiusRatio : 3, // element with / radiusRatio = 50% of line width
    strokeLinecap : 'round', // 'round', 'edge', 'butt'
    cssPrefix : 'iconimo-', // prefix for iconimo-classes
});
```

---

## Styling

Iconimo-Icons are positioned absolute within a certain element. Make sure, you use position relative for your container.

To colorize an Icon you can simply use the 'color'-Property of the current element.

### Example

```css
[class^='iconimo-'] {
    display: inline-block;
    width: 48px;
    height: 48px;
    position: relative;
    color: #ff0000;
}
```

---

## Contribution

Any contribution is warmly welcome.

## License

MIT License

Copyright (c) 2017 Raphael Wildhaber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

// Root element -> Box (inherits) -> creating instances 

class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = '20px';
    }

    hide() {
        this.$el.style.display = 'none';
    }

    appendToWrapper() {
        document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)
        return this;
    }
}


class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName) // call parent constructor
        this.color = color
        this.size = size 
    }

    create() {
        // console.log(this.$el);
        this.$el.style.backgroundColor = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`

        this.appendToWrapper();
    }
}

class Circle extends RootElement {
    constructor(color, radius=100, tagName) {
        super(tagName)
        this.color = color
        this.radius = radius 
    }

    create() {
        this.$el.style.backgroundColor = this.color
        this.$el.style.width = this.$el.style.height = `${this.radius}px`
        this.$el.style.borderRadius = '50%' 

        /* https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
        'beforebegin': Before the targetElement itself.
        'afterbegin': Just inside the targetElement, before its first child.
        'beforeend': Just inside the targetElement, after its last child.
        'afterend': After the targetElement itself. */
        this.appendToWrapper();
    }
}

const redBox = new Box('red', 100, 'div').create();
const blueBox = new Box('blue').create();
const purpleCircle = new Circle('purple').create();

const wrapperDiv = document.querySelector('.wrapper')
wrapperDiv.insertAdjacentElement('beforebegin', document. createElement("p"))
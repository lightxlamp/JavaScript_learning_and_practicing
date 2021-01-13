import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        console.log(this.$el);
        const startBtn = this.$el.querySelector('.js-header-start');
        startBtn.addEventListener('click', startButtonHandler.bind(this));
    }
}

function startButtonHandler() {
    console.log('this', this.$el);
    // this.$el.classList.add('hide')
    this.hide();
}
import Component from '../core/component.js';

export default class Tab extends Component {
    constructor(id) {
        super(id)
    }
    
    init() {
        // this.$el.addEventListener('click', tabClickHandler.bind(this))
        this.$el.addEventListener('click', alert('Init called'))
    }
}
import Component from '../core/component.js';

export default class Favorites extends Component {
    constructor(id) {
        super(id)
    }
    
    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(e) {
    alert(e.target)
}
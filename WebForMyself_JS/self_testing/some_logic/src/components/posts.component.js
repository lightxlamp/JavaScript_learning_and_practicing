import Component from '../core/component.js';

export default class Posts extends Component {
    constructor(id, loader) {
        super(id)
        this.loader = loader
        console.log('loader', loader);
    }
    
    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(e) {
    alert(e.target)
}
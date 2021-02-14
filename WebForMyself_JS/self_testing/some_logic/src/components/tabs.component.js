import Component from '../core/component.js';

export default class Tab extends Component {
    constructor(id) {
        super(id)
    }
    
    init() {
        this.$el.addEventListener('click', tabClickHandler)
        // this.$el.addEventListener('click', tabClickHandler.bind(this))
        // this.$el.addEventListener('click', alert('Init called'))
    }
}

function tabClickHandler(e) { 
    // console.log(e.target);
    // console.log('this', this.querySelectorAll('.tabs'));
    this.querySelectorAll('.tabs .tab').forEach(tab => {
        console.log('tab', tab);
        tab.classList.remove('active')
    });
    e.target.classList.add('active')
}
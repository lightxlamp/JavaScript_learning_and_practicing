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
    if(e.target.classList.contains('tab')) { // we need this 'if'. Without it user can click outside of tabs and remove active tab completely 
        this.querySelectorAll('.tabs .tab').forEach(tab => {
            tab.classList.remove('active')
        });
        e.target.classList.add('active')
    }
}
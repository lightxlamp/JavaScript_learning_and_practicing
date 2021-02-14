import Component from '../core/component.js';

export default class Tab extends Component {
    constructor(id, activeTabNo) {
        super(id)
        this.tabs = [];
        this.activeTabNo = activeTabNo;
    }
    
    init() {
        //this.$el.addEventListener('click', tabClickHandler)
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs) {
        this.tabs = tabs;
        this.hideAllTabsContentExceptOne();
    }

    hideAllTabsContentExceptOne() {
        document.querySelectorAll('.tabs .tab').forEach(tab => {
            tab.classList.remove('active')
        });
        document.querySelectorAll('.tabs .tab')[this.activeTabNo].classList.add('active')

        let activeTab = document.querySelectorAll('.tabs .tab')[this.activeTabNo];
        this.tabs.forEach(t => t.component.hide())
        const activeTabContent = this.tabs.find(t => t.component.$el.id === activeTab.dataset.name)
        activeTabContent.component.show();
    }
}

function tabClickHandler(e) { 
    console.log('this', this);
    console.log('console.log', e.target);
    console.log('e.target.dataset', e.target.dataset);
    console.log('e.target.dataset.name', e.target.dataset.name);

    if(e.target.classList.contains('tab')) { // we need this 'if'. Without it user can click outside of tabs and remove active tab completely 
        document.querySelectorAll('.tabs .tab').forEach(tab => {
            tab.classList.remove('active')
        });
        e.target.classList.add('active')

        this.tabs.forEach(t => t.component.hide())
        const activeTab = this.tabs.find(t => t.component.$el.id === e.target.dataset.name)
        activeTab.component.show();
    }
}
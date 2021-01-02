class Dropdown {
    constructor(selector, options) {
        this.$dropdown = document.querySelector(selector)
        this.items = options.items;     
        this.$dropdown.querySelector('.dropdown__label').textContent = this.items[0].label;

        this.$dropdown.addEventListener('click', event => {
            if(event.target.classList.contains('dropdown__label')) {
                this.$dropdown.classList.contains('opened') ? this.close() : this.open();
            }
            else if(event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        })

        const itemsHTML = this.items.map(item => {
            return `<li data-id="${item.id}">${item.label}</li>`
        }).join(' ') // Remove ',' from output by converting array to string
        // + https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/ - How You Can Use HTML5 Custom Data Attributes and Why

        this.$dropdown.querySelector('ul').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    open() {
        this.$dropdown.classList.add('opened');
    }

    close() {
        this.$dropdown.classList.remove('opened');
    }
    
    select(id) {
        const item = this.items.find(item => item.id === id)
        console.log(item);
        this.$dropdown.querySelector('.dropdown__label').textContent = item.label;
        this.close();
    }
}

const dropdown = new Dropdown('.dropdown', {
    items: [
        {label: 'Dragon Age Origins', id: 'dragonAgeOrigins'},
        {label: 'Fall Guys', id: 'fallGuys'},
        {label: 'Grand Theft Auto V', id: 'gta5'},
        {label: 'Halo Infinite', id: 'haloInfinite'},
        {label: 'Horizon Zero Dawn', id: 'horizonZeroDawn'},
        {label: 'Remnant From The Ashes', id: 'remnantFromTheAshes'},
    ]
  })


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
                console.log(event.target);
            }
        })

        const itemsHTML = this.items.map(item => {
            return `<li>${item.label}</li>`
        }).join(' ') // Remove ',' from output by converting array to string

        this.$dropdown.querySelector('ul').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    open() {
        this.$dropdown.classList.add('opened');
    }

    close() {
        this.$dropdown.classList.remove('opened');
    }
}


const dropdown = new Dropdown('.dropdown', {
    items: [
      {label: 'Grand Theft Auto V', id: 'gta5'},
      {label: 'Dragon Age Origins', id: 'dragonAgeOrigins'},
      {label: 'Halo', id: 'halo'},
      {label: 'Fall Guys', id: 'fallGuys'}
    ]
  })


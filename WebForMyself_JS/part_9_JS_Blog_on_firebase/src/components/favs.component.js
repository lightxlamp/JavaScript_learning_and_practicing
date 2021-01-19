import { Component } from "../core/component"
import { apiService } from "../services/api.service"
import { renderPost } from "../templates/post.template" 

export class FavsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this))
    }

    onShow() {
        const favs = JSON.parse(localStorage.getItem('favs'))
        const html = renderFavs(favs);
        this.$el.insertAdjacentHTML('afterbegin', html)
        console.log(html);
    }

    onHide() {
        this.$el.innerHTML = ''
    }
}

async function linkClickHandler(e) {
    e.preventDefault()

    if(e.target.classList.contains('fav-link')) {
        const postId = e.target.textContent
        this.$el.innerHTML = ''
        this.loader.show()
        const post = await apiService.getPostById(postId);
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, false))
    }
} 

function renderFavs(favs = []) {
    if(favs && favs.length) {
        return `
            <ul>
                ${favs.map(item => `<li><a href="" class="fav-link">${item}</a></li>`).join(' ')}
            </ul>
        `
    }
    else 
        return '<p style="text-align:center">No favorites to display</p>'
}
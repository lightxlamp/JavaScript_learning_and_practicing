import { Component } from "../core/component"
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'
import { renderPost } from '../templates/post.template'

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }

    async onShow() {
        this.loader.show()
        const fireBasePosts = await apiService.getPosts()
        console.log('fireBasePosts', fireBasePosts);
        const arrayOfPosts = TransformService.fireBaseObjectToArray(fireBasePosts)
        console.log('arrayOfPosts', arrayOfPosts);

        console.log('this', this);

        // my code without watching lesson
        // arrayOfPosts.forEach(post => {
        //     this.$el.insertAdjacentHTML('afterbegin', renderPost(post, true));
        // })

        // lesson code a little bit more clear 
        const renderedPosts = arrayOfPosts.map(post => renderPost(post, true))
        console.log('renderedPosts', renderedPosts);
        const html = renderedPosts.join(' ') // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        console.log('html', html);
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html);
        console.log('onShowCompleted');
    }

    onHide() {
        this.$el.innerHTML = '' // so bad.. May be this will be rewritten. Optimized. We could use loaded data
    }
}

function buttonHandler(e) {
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    const button = e.target;
    const id = button.dataset.id;
    const title = button.dataset.title;
    // id helps us to determine that button was clicked, not a post (may be it is not a good approach)
    if(id) {
        let favs = JSON.parse(localStorage.getItem('favs')) || []
        let candidate = favs.find(favPost => favPost.id === id )

        if(candidate) {
            // remove fav
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            favs = favs.filter(favPost => favPost.id !== id)
            button.textContent = 'Add to favorites'
            button.classList.add('button-primary')
            button.classList.remove('button-danger')
        }
        else {
            // add fav
            favs.push({id, title})
            button.textContent = 'Remove from favorites'
            button.classList.remove('button-primary')
            button.classList.add('button-danger')
        }

        localStorage.setItem('favs', JSON.stringify(favs))
    }

    // Notes: Seems like user favs list should be stored (or be duplicated) in FireBase as well
}
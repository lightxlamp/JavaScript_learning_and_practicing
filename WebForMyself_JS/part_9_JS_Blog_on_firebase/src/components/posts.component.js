import { Component } from "../core/component"
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    async onShow() {
        this.loader.show()
        const fireBasePosts = await apiService.getPosts()
        console.log(fireBasePosts);
        const arrayOfPosts = TransformService.fireBaseObjectToArray(fireBasePosts)
        console.log(arrayOfPosts);

        console.log('this', this);

        // my code without watching lesson
        // arrayOfPosts.forEach(post => {
        //     this.$el.insertAdjacentHTML('afterbegin', renderPost(post));
        // })

        // lesson code a little bit clearer 
        const html = arrayOfPosts.map(post => renderPost(post))
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html.join(' '));
    }

    onHide() {
        this.$el.innerHTML = '' // so bad.. May be this will be rewritten. Optimized. We could use loaded data
    }
}

function renderPost(post) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">News</li>'
        : '<li class="tag tag-rounded">Note</li>'

    const button = '<button class="button-primary button-small button-round">Save</button>'; // https://kylelogue.github.io/mustard-ui/index.html
        
    return `    
    <div class="panel">
        <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
                ${tag}
             </ul>
        </div>
        <div class="panel-body">
            <p class="multi-line">${post.fullText}</p>
        </div>
        <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${button}
        </div>
  </div>`
}

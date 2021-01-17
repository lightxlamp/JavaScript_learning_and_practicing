import { Component } from "../core/component"
import { apiService } from '../services/api.service'
import { TransformService } from '../services/transform.service'

export class PostsComponent extends Component {
    constructor(id) {
        super(id)
    }

    async onShow() {
        const fireBasePosts = await apiService.getPosts()
        console.log(fireBasePosts);
        const arrayOfPosts = TransformService.fireBaseObjectToArray(fireBasePosts)
        console.log(arrayOfPosts);
    }
}


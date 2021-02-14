import Tabs from './src/components/tabs.component.js'
import CreateComponent from './src/components/create.component.js'
import PostsComponent from './src/components/posts.component.js'
import FavoritesComponent from './src/components/favorites.component.js'

const createTab = new CreateComponent('create')
const postsTab = new PostsComponent('posts')
const favoritesTab = new FavoritesComponent('favorites')

const tabs = new Tabs('tabs', 0)
tabs.registerTabs([
    {name: 'create', component: createTab},
    {name: 'posts', component: postsTab},
    {name: 'favorites', component: favoritesTab}
]);



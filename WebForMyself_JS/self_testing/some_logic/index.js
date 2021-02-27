import Tabs from './src/components/tabs.component.js'
import CreateComponent from './src/components/create.component.js'
import PostsComponent from './src/components/posts.component.js'
import FavoritesComponent from './src/components/favorites.component.js'
import Loader from './src/components/loader.component.js'

const loader = new Loader('loader')
const createTab = new CreateComponent('create')
const postsTab = new PostsComponent('posts', loader)
const favoritesTab = new FavoritesComponent('favorites')


const tabs = new Tabs('tabs', 0)
tabs.registerTabs([
    {name: 'create', component: createTab},
    {name: 'posts', component: postsTab},
    {name: 'favorites', component: favoritesTab}
]);



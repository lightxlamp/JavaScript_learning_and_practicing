import Tabs from './src/components/tabs.component.js'
import CreateComponent from './src/components/create.component.js'
import PostsComponent from './src/components/posts.component.js'
import FavoritesComponent from './src/components/favorites.component.js'

const createTab = new CreateComponent('create')

const tabs = new Tabs('tabs')
tabs.registerTabs([
    {name: 'create', component: createTab},
    {name: 'posts', component: posts},
    {name: 'favorites', component: favorites}
]);

console.log(Tabs);
console.log(tabs);



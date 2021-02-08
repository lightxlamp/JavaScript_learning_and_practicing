import {HeaderComponent} from './components/header.component' 
import {NavigationComponent} from './components/navigation.component' 
import {CreateComponent} from './components/create.component' 
import {FavsComponent} from './components/favs.component' 
import {PostsComponent} from './components/posts.component' 
import {Loader} from './components/loader.component'

new HeaderComponent('header')

const loader = new Loader('loader');
const navigation = new NavigationComponent('navigation')
console.log('navigation', navigation);
const posts = new PostsComponent('posts', {loader})
const create = new CreateComponent('create')
const favs = new FavsComponent('favorite', {loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favs}
]);
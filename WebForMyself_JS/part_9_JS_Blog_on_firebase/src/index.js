import {HeaderComponent} from './components/header.component' 
import {NavigationComponent} from './components/navigation.component' 
import {CreateComponent} from './components/create.component' 
import {FavsComponent} from './components/favs.component' 
import {PostsComponent} from './components/posts.component' 

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const posts = new PostsComponent('posts')
const create = new CreateComponent('create')
const favs = new FavsComponent('favorite')

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favs', component: favs}
]);
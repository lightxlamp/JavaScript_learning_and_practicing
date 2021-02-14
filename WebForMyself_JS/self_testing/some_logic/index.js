import Tabs from './src/components/tabs.component.js'

const tabs = new Tabs('tabs')
tabs.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorites}
]);

console.log(Tabs);
console.log(tabs);



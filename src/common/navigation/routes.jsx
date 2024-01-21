import View from '../../pages/View/View.jsx';
import Action from '../../pages/Action/Action.jsx';

const routes = [
    {
        name: 'View',
        key: 'view',
        path: '/view',
        component: <View/>
    },
    {
        name: 'Action',
        key: 'action',
        path: '/action',
        component: <Action/>
    }
];

export default routes;

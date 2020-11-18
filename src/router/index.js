import Vue from 'vue'
import Router from 'vue-router'
import indexOne from '@/components/indexOne'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'indexOne',
            component: indexOne
        },
    ]
})
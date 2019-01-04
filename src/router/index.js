import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Questionnaire from './../components/questionnaire/questionnaire.vue'
import Record from './../components/record/record.vue'
import Article from './../components/article/article.vue'

const router = new VueRouter({
    routes : [{ 
        path:'/questionnaire',
        name:'questionnaire',
        component:Questionnaire
    },{ 
        path:'/record',
        name:'record',
        component:Record
    },{
        path:'/article',
        name:'article',
        component:Article
    }]
})

export default router;
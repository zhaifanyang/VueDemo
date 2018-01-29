import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AAuthor from '@/components/Author'
import article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
	  path: '/user/:name',
      name: 'Author',
      component: AAuthor
    },{
	  path: '/topic/:id',
      name: 'article',
      component: article
    }
  ]
})

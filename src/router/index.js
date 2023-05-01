import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddMovie from "@/components/AddMovie.vue";
import UpdateMovie from "@/components/UpdateMovie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-movie',
      name: 'add-movie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AddMovie
    },
    { path: "/films/:id/edit", component: UpdateMovie, props: true },
  ]
})

export default router
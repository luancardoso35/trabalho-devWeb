import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SubjectsView from '../views/SubjectsView.vue'
import QuestionsView from '../views/QuestionsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: SubjectsView
  },
  {
    path: '/questions',
    name: 'question',
    component: QuestionsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

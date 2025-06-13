import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import EditStudent from '../components/EditStudent.vue'
import AddStudent from '../components/AddStudent.vue'

const routes = [
  { path: '/', component: StudentList },
   { path: '/add', component: AddStudent },
  { path: '/edit/:id', component: EditStudent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

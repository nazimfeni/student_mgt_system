Backend: Laravel 12

## Frontend: Vue3

✅ 1. Create Vue Project

```
npm create vite@latest vue-student-app -- --template vue
cd vue-student-app
npm install
npm install axios
```

✅ 2. Setup Axios
Create a file: src/axios.js

```
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api',
});
```

✅ 3. Install Tailwindcss

✅ 4. Install vue-router@4

```
npm install vue-router@4
```

Your main.js includes router setup, e.g.:

```
import { createApp } from 'vue' //import createApp() function
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```
Your router file (src/router/index.js) looks like this:
```
import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import EditStudent from '../components/EditStudent.vue'

const routes = [
  { path: '/', component: StudentList },
  { path: '/edit/:id', component: EditStudent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

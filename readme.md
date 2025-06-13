## Backend: Laravel12
🧩 Part 1: Laravel Backend (API)
✅ 1. Create Laravel Project
```
laravel new school-api
cd school-api
```
✅ 2. Create Student Model, Migration, Controller
```
php artisan make:model Student -mcr
```
✅ 3. Migration File (database/migrations/xxxx_create_students_table.php)
```
Schema::create('students', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('class');
    $table->timestamps();
});
```
Run migration:
```
php artisan migrate
```
✅ 4. API Routes (routes/api.php)

Create an API routes file
```
php artisan install:api

```
Then paste the below code in routes/api.php file
```
use App\Http\Controllers\StudentController;

Route::apiResource('students', StudentController::class);
```
✅ 5. Controller (StudentController.php)
```
public function index() {
    return Student::all();
}

public function store(Request $request) {
    $validated = $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:students',
        'class' => 'required',
    ]);
    return Student::create($validated);
}

public function show(Student $student) {
    return $student;
}

public function update(Request $request, Student $student) {
    $student->update($request->only(['name', 'email', 'class']));
    return $student;
}

public function destroy(Student $student) {
    $student->delete();
    return response()->json(['message' => 'Deleted']);
}
```
✅ Add fillable in Student.php:
```
protected $fillable = ['name', 'email', 'class'];

```
✅ 6. Setup CORS
```
LARAVEL_CORS_PATHS=api/*
# LARAVEL_CORS_ALLOWED_ORIGINS=http://localhost:5173
LARAVEL_CORS_ALLOWED_ORIGINS=*
```


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

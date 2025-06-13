<template>
  <div>
    <h2>Student List</h2>
    <form @submit.prevent="createStudent">
      <input v-model="form.name" placeholder="Name" />
      <input v-model="form.email" placeholder="Email" />
      <input v-model="form.class" placeholder="Class" />
      <button>Add</button>
    </form>

    <ul>
      <li v-for="student in students" :key="student.id">
        {{ student.name }} — {{ student.email }}
        <button @click="editStudent(student)">Edit</button>
        <button @click="deleteStudent(student.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '../axios';

const students = ref([]);
const form = ref({ name: '', email: '', class: '' });

const getStudents = async () => {
  const res = await api.get('/students');
  students.value = res.data;
};

const createStudent = async () => {
  await api.post('/students', form.value);
  form.value = { name: '', email: '', class: '' };
  getStudents();
};

const editStudent = (student) => {
  form.value = { ...student };
};

const deleteStudent = async (id) => {
  await api.delete(`/students/${id}`);
  getStudents();
};

onMounted(getStudents);
</script>

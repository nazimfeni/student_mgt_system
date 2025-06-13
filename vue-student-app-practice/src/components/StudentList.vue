<template>
  <div class="max-w-3xl mx-auto mt-10 p-4">
    <h2 class="text-2xl font-bold mb-4 text-center">All Students</h2>

    <table class="min-w-full border text-sm text-left">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-4 py-2 border">#</th>
          <th class="px-4 py-2 border">Name</th>
          <th class="px-4 py-2 border">Email</th>
          <th class="px-4 py-2 border">Class</th>
          <th class="px-4 py-2 border">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(student, index) in students"
          :key="student.id"
          class="hover:bg-gray-50"
        >
          <td class="px-4 py-2 border">{{ index + 1 }}</td>
          <td class="px-4 py-2 border">{{ student.name }}</td>
          <td class="px-4 py-2 border">{{ student.email }}</td>
          <td class="px-4 py-2 border">{{ student.class }}</td>
          <td class="px-4 py-2 border text-center">
  <router-link :to="`/edit/${student.id}`" class="text-blue-500 hover:underline mr-2">
    Edit
  </router-link>
  <button
    @click="deleteStudent(student.id)"
    class="text-red-600 hover:underline"
  >
    Delete
  </button>
</td>
        </tr>
      </tbody>
    </table>

    <p v-if="students.length === 0" class="text-center text-gray-500 mt-4">
      No student data found.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import api from "../axios";

const students = ref([]);

const fetchStudents = async () => {
  try {
     const response = await api.get("/students"); 
    students.value = response.data;
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};

const deleteStudent = async (id) => {
  if (!confirm('Are you sure you want to delete this student?')) return

  try {
    await api.delete(`/students/${id}`)
    students.value = students.value.filter(student => student.id !== id)
  } catch (err) {
    console.error('Delete failed:', err)
  }
}

onMounted(fetchStudents);
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow bg-white">
    <h2 class="text-xl font-bold mb-4 text-center">Edit Student</h2>

    <form @submit.prevent="updateStudent" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Name</label>
        <input
          v-model="student.name"
          type="text"
          class="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="student.email"
          type="email"
          class="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label class="block text-sm font-medium">Class</label>
        <input
          v-model="student.class"
          type="text"
          class="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>

    <p v-if="message" class="mt-4 text-green-600 text-center">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import api from "../axios";

const route = useRoute();
const studentId = route.params.id;

const student = ref({ name: "", email: "", class: "" });
const message = ref("");

const fetchStudent = async () => {
  try {
    const response = await api.get(`/students/${studentId}`);
    student.value = response.data;
  } catch (error) {
    console.error("Error fetching student:", error);
  }
};

const updateStudent = async () => {
  try {
    await api.put(
      `/students/${studentId}`,
      student.value
    );
    message.value = "Student updated successfully!";
  } catch (error) {
    console.error("Update failed:", error);
    message.value = "Failed to update student.";
  }
};

onMounted(fetchStudent);
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
    <h2 class="text-2xl font-bold mb-4 text-center">Add New Student</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Name</label>
        <input
          type="text"
          v-model="student.name"
          class="w-full p-2 border rounded"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label class="block text-sm font-medium">Email</label>
        <input
          type="email"
          v-model="student.email"
          class="w-full p-2 border rounded"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label class="block text-sm font-medium">Class</label>
        <input
          type="text"
          v-model="student.class"
          class="w-full p-2 border rounded"
          placeholder="Enter class (e.g. 10)"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>

    <p v-if="message" class="mt-4 text-green-600 text-center">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import api from "../axios";

const student = ref({
  name: "",
  email: "",
  class: "",
});

const message = ref("");

const submitForm = async () => {
  try {
    await api.post("/students", student.value);
    message.value = "Student added successfully!";
    student.value = { name: "", email: "", class: "" };
  } catch (error) {
    console.error(error);
    message.value = "Error adding student. Please check inputs.";
  }
};
</script>

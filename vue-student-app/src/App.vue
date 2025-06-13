<script setup>
</script>

<template>
  <div class="container mx-auto p-4">
    <nav class="mb-4 flex gap-4">
      <router-link to="/" class="text-blue-600">Student List</router-link>
      <router-link to="/add" class="text-green-600">Add Student</router-link>
    </nav>

    <router-view />
  </div>
</template>

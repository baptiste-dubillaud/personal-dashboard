<script setup lang="ts">
import AppHeader from '@/components/app/header/AppHeader.vue';
</script>

<template>
  <div class="app-container">
    <!-- Header of the application -->
    <AppHeader />

    <!-- Main content of the application -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer of the application -->
    <footer class="app-footer">
      <p>&copy; 2025 PersonalHub. Built with Vue.js</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--vt-bg-primary);
  color: var(--vt-text-primary);
  font-family: var(--vt-font-family);
}

.main-content {
  flex: 1;
  width: 100%;
  padding-top: 1rem;
}

.app-footer {
  background-color: var(--vt-bg-secondary);
  border-top: 1px solid var(--vt-border-primary);
  padding: 1rem 2rem;
  text-align: center;
  
  p {
    margin: 0;
    color: var(--vt-text-secondary);
    font-size: 0.9rem;
  }
}
</style>

<script setup lang="ts">
import AppHeader from '@/components/app/header/AppHeader.vue';
import Footer from '@/components/app/footer/Footer.vue';
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
        <Footer />
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
</style>

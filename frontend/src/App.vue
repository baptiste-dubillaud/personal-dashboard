<script setup lang="ts">
import AppHeader from '@/components/app/header/AppHeader.vue';
</script>

<template>
    
    <!-- Header of the application -->
    <AppHeader/>

    <!-- Main content of the application -->
    <body>
        
    </body>

    <!-- Footer of the application -->
</template>

<style scoped lang="scss">
    .wrapper {
        font-size: 2rem;
        font-weight: bold;
    }

    body, header, footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--vt-bg-primary);
        color: var(--vt-text-primary);
        border-color: var(--vt-border-primary);
    }
</style>

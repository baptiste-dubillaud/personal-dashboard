<script setup lang="ts">
import PersonalHubLogo from '@/assets/icons/PersonalHub.vue';
import LightDarkThemeButton from '@/components/app/ligghtdarktheme/LightDarkThemeButton.vue';
</script>

<template>
    <header class="app-header">
        <div class="content-container">
            <div class="logo-container">
                <PersonalHubLogo size="75" :showName="false" />
            </div>
            <div>Welcome Baptiste!</div>
        </div>
        <div class="content-container">
            <span>User</span>
            <LightDarkThemeButton />
        </div>
    </header>
</template>

<style scoped lang="scss">

.app-header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}

.content-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.logo-container {
    display: inline-block;
}

</style>
<template>
    <div class="theme-switcher">
        <!-- Theme Toggle Button -->
        <button @click="toggleTheme" class="theme-toggle-button">
            <font-awesome-icon :icon="isDark ? 'fas fa-sun' : 'fas fa-moon'"></font-awesome-icon>
            zedzef
        </button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'ThemeSwitcher',
    setup() {
        const isDark = ref(false)

        const applyTheme = () => {
            if (isDark.value) {
                document.documentElement.classList.add('dark-theme')
            } else {
                document.documentElement.classList.remove('dark-theme')
            }
        }

        const toggleTheme = () => {
            isDark.value = !isDark.value
            applyTheme()
            localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
        }

        onMounted(() => {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                isDark.value = savedTheme === 'dark'
            } else {
                isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
            }
            applyTheme()
        })

        return {
            isDark,
            toggleTheme
        }
    }
}
</script>

<style lang="scss" scoped>
@use '@/assets/base.scss';

.theme-toggle-button {
    background-color: var(--vt-bg-secondary);
    border: 1px solid var(--vt-border-primary);
    cursor: pointer;
    font-size: 1.5rem;
    color: var(--vt-text-primary);
    padding: 0px 10px;
}

</style>
<script setup lang="ts">
import PersonalHubLogo from '@/assets/icons/PersonalHub.vue';
import LightDarkThemeButton from '@/components/app/ligghtdarktheme/LightDarkThemeButton.vue';
import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const navRef = ref<HTMLElement>();
const sliderRef = ref<HTMLElement>();

const updateSlider = () => {
    nextTick(() => {
        setTimeout(() => {
            if (!navRef.value || !sliderRef.value) return;
            
            const activeLink = navRef.value.querySelector('.router-link-active') as HTMLElement;
            
            if (activeLink) {
                const { offsetLeft, offsetWidth } = activeLink;
                sliderRef.value.style.transform = `translateX(${offsetLeft}px)`;
                sliderRef.value.style.width = `${offsetWidth}px`;
            }
        }, 0);
    });
};

onMounted(() => {
    updateSlider();
});

// Watch for route changes to update slider
watch(() => route.path, () => {
    updateSlider();
});
</script>

<template>
    <header class="app-header">
        <div class="header-left">
            <div class="logo-container">
                <router-link to="/" class="logo-link">
                    <PersonalHubLogo :size="60" :showName="false" />
                </router-link>
            </div>
            <nav class="main-nav" ref="navRef">
                <div class="nav-slider" ref="sliderRef"></div>

                <router-link
                    v-for="module in [
                        { name: 'Home', icon: 'home', route: '/' },
                        { name: 'Health', icon: 'heartbeat', route: '/health' },
                        { name: 'Calendar', icon: 'calendar-alt', route: '/calendar' },
                        { name: 'Finance', icon: 'wallet', route: '/finance' }
                    ]"
                    :key="module.name"
                    :to="module.route"
                    class="nav-link"
                    active-class="router-link-active"
                    exact-active-class="router-link-active"
                >
                    <font-awesome-icon :icon="module.icon" />
                    <span>{{ module.name }}</span>
                </router-link>
            </nav>
        </div>

        <div class="header-right">
            <div class="user-info">
                <span>Welcome Baptiste!</span>
            </div>
            <LightDarkThemeButton />
        </div>
    </header>
</template>

<style scoped lang="scss">
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: var(--vt-bg-secondary);
    border-bottom: 1px solid var(--vt-border-primary);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.logo-container {
    .logo-link {
        display: block;
        text-decoration: none;

        &:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease;
        }
    }
}

.main-nav {
    display: flex;
    gap: 0.5rem;
    position: relative;

    .nav-slider {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: var(--vt-accent-primary);
        border-radius: 2px 2px 0 0;
        transition: all 0.3s ease;
        z-index: 2;
    }

    .nav-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: var(--vt-text-secondary);
        border-radius: 8px 8px 0 0;
        transition: all 0s ease;
        font-weight: 500;
        position: relative;
        z-index: 1;

        &:hover {
            color: var(--vt-text-primary);
            background-color: rgba(var(--vt-accent-primary), 0.05);
        }

        &.router-link-active {
            color: var(--vt-accent-primary);
            background-color: transparent;

            svg {
                color: var(--vt-accent-primary);
            }
        }

        svg {
            width: 16px;
            height: 16px;
            transition: color 0s ease;
        }

        span {
            font-size: 0.9rem;
        }
    }
}

.user-info {
    span {
        color: var(--vt-text-primary);
        font-weight: 500;
    }
}
</style>

<template>
    <div class="dashboard-container">
        <div class="hero-section">
            <h1 class="page-title">Welcome to PersonalHub</h1>
            <p class="page-subtitle">Your comprehensive life dashboard</p>
        </div>

        <div class="dashboard-grid">
            <!-- Health Module -->
            <router-link v-for="module in [
                { name: 'health', title: 'Health Tracker', description: 'Monitor your wellness over time, manage and follow your fitness goals, planify your training.', icon: 'heartbeat', route: '/health', class: 'health' },
                { name: 'calendar', title: 'Calendar', description: 'Manage your .schedule and events, show birthdays and sync it with your preferred apps', icon: 'calendar-alt', route: '/calendar', class: 'calendar' },
                { name: 'finance', title: 'Finance Tracker', description: 'Track your favorite stocks, create alerts and read synthesis of news.', icon: 'wallet', route: '/finance', class: 'finance' },
            ]" :key="module.name" :to="module.route" :class="`dashboard-card ${module.class}`">
                <div class="title-container">
                    <div class="card-icon">
                        <font-awesome-icon :icon="module.icon" />
                    </div>
                    <h3>{{ module.title }}</h3>
                </div>
                <p>{{ module.description }}</p>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'Dashboard - PersonalHub'
})
</script>

<style lang="scss" scoped>
@use "@/assets/base.scss";

.dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.hero-section {
    text-align: center;
    margin-bottom: 3rem;

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--vt-text-primary);
        margin-bottom: 0.5rem;
    }

    .page-subtitle {
        font-size: 1.2rem;
        color: var(--vt-text-secondary);
        margin: 0;
    }
}

.dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.dashboard-card {
    background: var(--vt-bg-secondary);
    border: 1px solid var(--vt-border-primary);
    border-radius: 12px;
    padding: 2rem;
    text-decoration: none;
    color: var(--vt-text-primary);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        border-color: var(--vt-border-secondary);
    }

    .title-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid;
        
        .card-icon {
            font-size: 2.5rem;
        }
        
        h3 {
            font-size: 1.5rem;
            font-weight: 600;
        }
        
    }
    
    &.health {
        .card-icon, h3, .title-container {
            color: var(--vt-accent-health);
            border-color: var(--vt-accent-health);
        }
    }

    &.calendar  {
        .card-icon, h3, .title-container {
            color: var(--vt-accent-calendar);
            border-color: var(--vt-accent-calendar);
        }
    }

    &.finance {
        .card-icon, h3 .title-container {
            color: var(--vt-accent-finance);
            border-color: var(--vt-accent-finance);
        }
    }
    
    p {
        text-align: center;
        margin: 0;
        line-height: 1.5;
        color: var(--vt-text-secondary);
    }
}

</style>

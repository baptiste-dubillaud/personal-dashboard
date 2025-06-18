<template>
  <div class="calendar-container">
    <div class="page-header">
      <h1 class="page-title">
        <font-awesome-icon icon="calendar-alt" class="page-icon" />
        Calendar
      </h1>
      <p class="page-description">Manage your schedule and events</p>
    </div>

    <div class="calendar-content">
      <div class="coming-soon">
        <h2>Coming Soon</h2>
        <p>Calendar features will be available soon!</p>
        <div class="feature-list">
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Event Management</span>
          </div>
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Schedule Planning</span>
          </div>
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Reminders & Notifications</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Calendar - PersonalHub'
})
</script>

<style lang="scss" scoped>
.calendar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  .page-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--vt-text-primary);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .page-icon {
      color: #FE6D73;
    }
  }

  .page-description {
    font-size: 1.2rem;
    color: var(--vt-text-secondary);
    margin: 0;
  }
}

.calendar-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;

  .coming-soon {
    text-align: center;
    background: var(--vt-bg-secondary);
    border: 1px solid var(--vt-border-primary);
    border-radius: 12px;
    padding: 3rem;
    max-width: 500px;

    h2 {
      color: var(--vt-text-primary);
      margin-bottom: 1rem;
    }

    p {
      color: var(--vt-text-secondary);
      margin-bottom: 2rem;
    }

    .feature-list {
      .feature-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        color: var(--vt-text-primary);

        svg {
          color: #FE6D73;
        }
      }
    }
  }
}
</style>

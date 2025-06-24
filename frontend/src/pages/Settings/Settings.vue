<template>
  <div class="settings-container">
    <div class="page-header">
      <h1 class="page-title">
        <font-awesome-icon icon="cog" class="page-icon" />
        Settings
      </h1>
      <p class="page-description">Customize your PersonalHub experience</p>
    </div>

    <div class="settings-content">
      <div class="coming-soon">
        <h2>Coming Soon</h2>
        <p>Settings and customization options will be available soon!</p>
        <div class="feature-list">
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Theme Customization</span>
          </div>
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Notification Preferences</span>
          </div>
          <div class="feature-item">
            <font-awesome-icon icon="check-circle" />
            <span>Data Export/Import</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Settings - PersonalHub'
})
</script>

<style lang="scss" scoped>
.settings-container {
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
      color: var(--vt-text-secondary);
    }
  }

  .page-description {
    font-size: 1.2rem;
    color: var(--vt-text-secondary);
    margin: 0;
  }
}

.settings-content {
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
          color: var(--vt-text-secondary);
        }
      }
    }
  }
}
</style>

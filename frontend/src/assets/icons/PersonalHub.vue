<template>
  <div class="logo-container">
    <svg 
      :width="size" 
      :height="size" 
      viewBox="0 0 240 240" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      class="personal-hub-logo"
    >
      <rect width="240" height="240" rx="24" :fill="'var(--vt-bg-secondary)'" class="background-rect" style="transition: fill 0.3s ease;"/>
      <g transform="translate(30, 30)">
        <!-- Core circle (self/center of life) -->
        <circle cx="90" cy="85" r="40" fill="#4dabf7"/>
        
        <!-- Orbiting modules -->
        <circle cx="20" cy="20" r="20" fill="#17C3B2" /> <!-- Health -->
        <circle cx="160" cy="20" r="20" fill="#FE6D73"/> <!-- Calendar -->
        <circle cx="20" cy="150" r="20" fill="#227C9D"/> <!-- Finance -->
        <circle cx="160" cy="150" r="20" fill="#F4B400"/> <!-- Habits -->s
      </g>

      <text v-if="showName" x="50%" y="225" text-anchor="middle" :fill="'var(--vt-text-primary)'" font-size="20" font-family="Segoe UI, sans-serif" font-weight="600" class="logo-text" style="transition: fill 0.3s ease;">
        PersonalHub
      </text>
      
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PersonalHubLogo',
  props: {
    size: {
      type: [String, Number],
      default: 240
    },
    showName: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/base.scss';

.logo-container {
  display: inline-block;
  transition: all var(--transition-duration, 0.4s) var(--transition-timing, ease);
  
  .personal-hub-logo {
    cursor: pointer;
    transition: all var(--transition-duration, 0.4s) var(--transition-timing, ease);
    
    &:hover {
      transform: scale(1.01);
      filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
    }
  }
  
  &.dark-theme .personal-hub-logo:hover {
    filter: drop-shadow(0 4px 10px rgba(255, 255, 255, 0.1));
  }
}
</style>
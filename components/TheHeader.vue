<template>
  <div class="header">
    <div class="flex space-x-8">
      <div>
        <NuxtLink to="/">Nuxt 3</NuxtLink>
      </div>
      <div class="flex">
        <NuxtLink to="/articles">articles</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply px-8 py-4
}
</style>
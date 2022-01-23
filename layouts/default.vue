<template>
  <section>
    <div><TheHeader /></div>
    <div class="main">
      <slot />
    </div>
    <div><TheFooter /></div>
  </section>
</template>

<style scoped>
.main {
  @apply px-8 py-4
}
</style>
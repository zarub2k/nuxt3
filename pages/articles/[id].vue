<template>
  <div>
    Page for - {{$route.params.id}}
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRoute()
    console.log('Here: ' + route.params.id)
  },
}
</script>
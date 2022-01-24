<template>
  <div>Articles view</div>
  {{ data }}
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const config = useRuntimeConfig()
    const { data } = useFetch(config.DEVTO_HOST, {
      headers: {
        'api-key': config.DEVTO_APIKEY
      }
    })

    console.log('Data: ' + data.value)

    return {
      data
    }
  },
}
</script>
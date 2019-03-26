<template>
  <div id="app">
    <Toolbar v-if="!hide" />
    <v-content>
      <nuxt />
    </v-content>
  </div>
</template>

<script>
import Toolbar from '~/components/Toolbar'

export default {
  components: {
    Toolbar
  },
  computed: {
    hide() {
      return this.$route.path === '/login' || this.$route.path === '/register'
    }
  }
}
</script>

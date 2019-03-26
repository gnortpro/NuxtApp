<template>
  <v-app id="app">
    <Toolbar v-if="!hide" />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
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

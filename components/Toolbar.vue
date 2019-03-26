<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      floating
      app
    >
      <v-list>
        <v-list-tile :to="{ path: '/' }" replace>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 18px;">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile :to="{ path: '/lesson/1' }" replace>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title style="font-size: 18px;"
              >Lesson</v-list-tile-title
            >
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title style="font-size: 18px;"
                  >Native 1 to 1</v-list-tile-title
                >
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile :to="{ path: '/room' }" replace>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Native Schedules</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">X3English 2.0</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>

      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon large class="purple" color="primary" dark v-on="on">
            <v-avatar size="32px" tile>
              <img
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                alt="Vuetify"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-list v-if="isAuthenticated">
          <v-list-tile>
            <nuxt-link class="navbar-item" to="/profile"
              ><v-list-tile-title>My Profile </v-list-tile-title></nuxt-link
            >
          </v-list-tile>

          <v-list-tile>
            <a class="navbar-item" @click="logout">Logout </a>
          </v-list-tile>
        </v-list>
        <v-list v-else>
          <v-list-tile>
            <nuxt-link class="navbar-item" to="/register"
              ><v-list-tile-title>Register </v-list-tile-title></nuxt-link
            >
          </v-list-tile>
          <v-list-tile>
            <nuxt-link class="navbar-item" to="/login"
              ><v-list-tile-title>Log In </v-list-tile-title></nuxt-link
            >
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      drawer: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style></style>

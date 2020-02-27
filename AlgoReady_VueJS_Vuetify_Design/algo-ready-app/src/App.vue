<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-row justify="space-around">
      <v-col cols="8">
          <v-img src="./assets/logo.png"></v-img>
      </v-col>
    </v-row>

      <div class="my-2">
        <v-btn text color="primary">Primary</v-btn>
      </div>
      <div class="my-2">
        <v-btn text color="secondary">Secondary</v-btn>
      </div>

      <v-list dense>
        <v-list-item link class="left-menu">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Portfolio Analysis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Stocks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Investors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>        
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Market</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
    >
        <v-toolbar>

        <v-spacer></v-spacer>

 <v-list >
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Portfolio Analysis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 </v-list>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      // this.$vuetify.theme.dark = true
      // this.$vuetify.theme.themes.dark.base = '#4caf50'
      // this.$vuetify.theme.themes.dark.lighten5 = '#4caf50'
      // this.$vuetify.theme.themes.dark.lighten4 = '#4caf50'
      // this.$vuetify.theme.themes.dark.lighten3 = '#4caf50'
      // this.$vuetify.theme.themes.dark.lighten2 = '#4caf50'
      // this.$vuetify.theme.themes.dark.lighten1 = '#4caf50'
      // this.$vuetify.theme.themes.dark.darken4 = '#4caf50'
      // this.$vuetify.theme.themes.dark.darken3 = '#4caf50'
      // this.$vuetify.theme.themes.dark.darken2 = '#4caf50'
      // this.$vuetify.theme.themes.dark.darken1 = '#4caf50'
      // this.$vuetify.theme.themes.dark.tertiary = '#4caf50'
      // this.$vuetify.theme.themes.dark.secondary = '#4caf50'
      // this.$vuetify.theme.themes.dark.primary = '#4caf50'
    },
  }
</script>

<style scoped>
.left-menu {
    border: 2px solid white;
    color: #00bfc5 !important
  }
</style>
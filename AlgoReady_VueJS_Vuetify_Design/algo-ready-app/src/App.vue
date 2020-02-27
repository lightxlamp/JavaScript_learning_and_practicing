<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-row justify="space-around" id="logoRow">
        <v-col cols="8">
          <v-img src="./assets/logo.png"></v-img>
        </v-col>
      </v-row>

      <v-list dense>
        <v-list-group prepend-icon="mdi-view-dashboard" value="true">
          <template v-slot:activator>
            <v-list-item-title>Portfolio Analysis</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Portfolio List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Stocks -->

        <v-list-group prepend-icon="mdi-chart-bar" value="true">
          <template v-slot:activator>
            <v-list-item-title>Stocks</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Stocks List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Idea Generation</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Investors -->

        <v-list-group prepend-icon="mdi-account" value="true">
          <template v-slot:activator>
            <v-list-item-title>Investors</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Investors List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Market -->

        <v-list-group prepend-icon="mdi-chart-pie" value="true">
          <template v-slot:activator>
            <v-list-item-title>Market</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Flows Overview</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Market Tracker</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right>
      <v-toolbar>
        <v-text-field
          label="Search"
          prepend-icon="mdi-magnify"
          dense
          flat
          
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn text>
          <v-icon left>mdi-plus-thick</v-icon>
          Add
        </v-btn>

        <v-btn text>
          <v-icon left>mdi-settings</v-icon>
          New Set
        </v-btn>

        <v-btn text>
          <v-icon left>mdi-settings-transfer-outline</v-icon>
          Settings
        </v-btn>

        <v-btn text>
          <v-icon left>mdi-account</v-icon>
          Log out
        </v-btn>

        <v-btn icon>
          <v-icon left>mdi-bell</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid> </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created() {}
};
</script>

<style scoped>
#logoRow {
  border-bottom: 1px solid #313c4e;
}
</style>

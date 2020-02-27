<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-row justify="space-around" id="logoRow">
        <v-col cols="8">
          <v-img src="./assets/logo.png"></v-img>
        </v-col>
      </v-row>

      <v-list >
        <v-list-group prepend-icon="mdi-view-dashboard" value="true" color="#00BFC5" no-action>
          <template v-slot:activator>
            <v-list-item-title>Portfolio Analysis</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title color="#00BFC5">Portfolio List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Update / Add</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Stocks -->

        <v-list-group prepend-icon="mdi-chart-bar" value="true" color="#00BFC5" no-action>
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

        <v-list-group prepend-icon="mdi-account" value="true" color="#00BFC5" no-action>
          <template v-slot:activator>
            <v-list-item-title>Investors</v-list-item-title>
          </template>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>Investors List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
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

        <v-list-group prepend-icon="mdi-chart-pie" value="true" color="#00BFC5" no-action>
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

    <v-app-bar app clipped-right flat>
      <v-toolbar flat>
        <v-text-field
          label="Search"
          prepend-icon="mdi-magnify"
          dense
          flat
          id="searchField"
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
      <v-container>
        <h2>Algoready european Small caps</h2>
        <p>Last Updated: 20/08/2019</p>
        <div class="my-2">
          <v-btn small color="#00BFC5">Edit Portfolio</v-btn>
        </div>  

      <div id="four-div-wrapper">
        <div>
          <p class="blackText">Total Market Value</p>
          <p>$ 2589647,531</p>
        </div>
        <div>
          <p class="blackText">Total Potential Pressure</p>
          <p>$1 Billion</p>
        </div> 
        <div>
          <p class="blackText">Days to Trade</p>
          <p>20</p>
        </div> 
        <div>
          <p class="blackText">Potential Market Impact</p>
          <p>78%</p>
        </div>
      </div>

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
  padding-bottom: 10px;
  padding-top: 10px;
}

#four-div-wrapper{
  display: flex;
  justify-content: space-around;
}

#four-div-wrapper div{
  width: 180px;
  height: 80px;
  min-width: 180px;
  background: linear-gradient(180deg, #3B98EE 0%, #2CA9CD 100%);
}

#four-div-wrapper > div > p {
  text-align: center;
  padding: 0 !important;
}

.blackText{
  color: black;
}

/* #searchField{
  padding-top: 10px !important;
} */

</style>

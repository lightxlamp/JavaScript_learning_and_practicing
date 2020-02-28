<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-row justify="space-around" id="logoRow">
        <v-col cols="8">
          <v-img src="./assets/logo.png"></v-img>
        </v-col>
      </v-row>

      <v-list>
        <v-list-group
          prepend-icon="mdi-view-dashboard"
          value="true"
          color="#00BFC5"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-title>Portfolio</v-list-item-title>
          </template>
          
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item" 
                >Portfolio List</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Update / Add</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Stocks -->

        <v-list-group prepend-icon="mdi-chart-bar" color="#00BFC5" no-action>
          <template v-slot:activator>
            <v-list-item-title>Stocks</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Stocks List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Idea Generation</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Investors -->

        <v-list-group prepend-icon="mdi-account" color="#00BFC5" no-action>
          <template v-slot:activator>
            <v-list-item-title>Investors</v-list-item-title>
          </template>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Investors List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Analyze</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Positioning</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Market -->

        <v-list-group prepend-icon="mdi-chart-pie" color="#00BFC5" no-action>
          <template v-slot:activator>
            <v-list-item-title>Market</v-list-item-title>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Flows Overview</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="grey-list-item">Market Tracker</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right flat>
      <v-btn small elevation="0" @click.stop="drawer = !drawer">
        <v-icon left>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar flat>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-text-field
            label="Search"
            prepend-icon="mdi-magnify"
            dense
            
    
            flat
          ></v-text-field>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text small>
            <v-icon left>mdi-plus-thick</v-icon>
            Add
          </v-btn>

          <v-btn text small>
            <v-icon left>mdi-settings</v-icon>
            New Set
          </v-btn>

          <v-btn text small>
            <v-icon left>mdi-settings-transfer-outline</v-icon>
            Settings
          </v-btn>

          <v-btn text small>
            <v-icon left>mdi-account</v-icon>
            Log out
          </v-btn>

          <v-btn icon>
            <v-icon left>mdi-bell</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <h2>Algoready european Small caps</h2>
        <p>Last Updated: 20/08/2019</p>
        <!-- <div class="my-2">
          <v-btn small color="#00BFC5">Edit Portfolio</v-btn>
        </div>

        <div id="four-div-wrapper">
          <div>
            <p class="blackText">Total Market Value</p>
            <p class="whiteText">$ 2589647,531</p>
          </div>
          <div>
            <p class="blackText">Total Potential Pressure</p>
            <p class="whiteText">$1 Billion</p>
          </div>
          <div>
            <p class="blackText">Days to Trade</p>
            <p class="whiteText">20</p>
          </div>
          <div>
            <p class="blackText">Potential Market Impact</p>
            <p class="whiteText">78%</p>
          </div>
        </div> -->

        <v-row dense>
          <v-col>
            <v-card class="gradient-box" max-width="180px">
              <v-card-title>Total Market Value</v-card-title>
              <v-card-subtitle>$ 2589647,531</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="gradient-box" color="#2CA9CD" max-width="180px">
              <v-card-title>Total Potential Pressure</v-card-title>
              <v-card-subtitle>$1 Billion</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="gradient-box" color="#2CA9CD" max-width="180px">
              <v-card-title>Days to Trade</v-card-title>
              <v-card-subtitle>20</v-card-subtitle>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="gradient-box" color="#2CA9CD" max-width="180px">
              <v-card-title>Potential Market Impact</v-card-title>
              <v-card-subtitle>78%</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
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
@import url("https://fonts.googleapis.com/css?family=Montserrat");

body {
  font-family: Montserrat;
}

#logoRow {
  border-bottom: 1px solid #313c4e;
  padding-bottom: 10px;
  padding-top: 10px;
}

#four-div-wrapper {
  display: flex;
  justify-content: flex-start;
}

#four-div-wrapper div {
  width: 180px;
  height: 80px;
  min-width: 180px;
  margin-right: 1%;
  background: linear-gradient(180deg, #3b98ee 0%, #2ca9cd 100%);
}

#four-div-wrapper > div > p {
  text-align: center;
}

.blackText {
  padding-top: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #13305c;
}

.whiteText {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
}

.gradient-box{
  /* background: linear-gradient(180deg, #3b98ee 0%, #2ca9cd 100%); */
  background: linear-gradient(180deg, #3b98ee 0%, #2ca9cd 100%);
  text-align: center;
}

.gradient-box > p {
  color: black;
}

.v-card-subtitle {

}

.v-btn {
  text-transform: none !important;
}

.grey-list-item {
  color: #56657F;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

</style>

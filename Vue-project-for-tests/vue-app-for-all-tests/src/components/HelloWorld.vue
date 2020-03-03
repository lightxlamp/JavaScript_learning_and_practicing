<template>
  <div class="hello">
    <div class="inline-flex w-full max-w-3xl mx-auto">
      <div class="ml-auto rounded-full px-5 py-1 bg-coral-100 border border-coral-300">
        <span class="text-sm mr-3 font-medium">Word allowance:</span>
        <span class="text-sm font-medium">{{enteredWords}} / {{wordAllowance}}</span>
      </div>
    </div>
    <div>{{content}}</div>
    <textarea name id cols="30" rows="10" v-model="content" @keydown="wordsLimitHandler" @paste="wordsLimitHandler"></textarea> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      wordCount: 0,
      wordAllowance: 999,
      limitReached: false,
      membershipCharacterLimit: "",
      form: {
        description: ""
      }
    };
  },
  // watch: {
  //   form: {
  //     handler: function() {
  //       const str = this.form.description;
  //       const count = str.split(" ").length;

  //       const allowance = this.wordAllowance;

  //       // this needs to count the number of words

  //       // if the number of words is above allowance then trim from end.

  //       // if copy and paste content add, trim from end.
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  mounted() {
    this.fetch();
  },
  computed: {
    enteredWords: function() {
      if(this.content.split(" ").length === 1)
        return "0"
      else return this.content.split(" ").length
    }
  },
  methods: {
    wordsLimitHandler(){
      if(this.content.split(' ').length > 5)
      {
        alert("5 words limit exceeded")
        console.log(this.content.split(' '));
        let onlyLimitedNumberOfWords = this.content.split(' ').slice(0, 5); 
        this.content = onlyLimitedNumberOfWords.join(' ') + " ";
      }    
    },
    async fetch() {
      /*  axios.get(this.user.uuid + '/vendor/description').then((res) => {
                    this.checkResponse(res.status)
                    this.form.description = res.data.data.description
                })*/
    },
    save() {
      /* this.updating = true
                axios.patch(this.user.uuid + '/vendor/description', this.form).then((res) => {
                    if (res.status === 200) {

                        this.fetch()
                        this.update_successful = true

                        var self = this

                        setTimeout(function () {
                            self.update_successful = false;
                        }, 2000);
                        this.updating = false
                    }

                })*/
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

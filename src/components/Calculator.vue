<template>
  <div class="hello">

    <p>Calculator</p>

        <form name="form" @submit.prevent="calculateExpression">

          <table>
            <thead>

            <tr>
              <input 
                type="text" 
                placeholder="Calculate an expression" 
                value="calculation" 
                v-model="calculation" 
                v-on:input="myChangeFunc" 
                disabled
                />
            </tr>

            </thead>

            <tbody>

              <tr>

                <td><input class="button" type="button" value="1" v-on:click="addNumber" /></td>
                <td><input class="button" type="button" value="2" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="3" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="+" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input class="button" type="button" value="4" v-on:click="addNumber" /></td>
                <td><input class="button" type="button" value="5" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="6" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="-" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input class="button" type="button" value="7" v-on:click="addNumber" /></td>
                <td><input class="button" type="button" value="8" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="9" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="*" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input class="button" type="button" value="C" v-on:click="clear" /></td>
                <td><input class="button" type="button" value="0" v-on:click="addNumber"/></td>
                <td><input class="button" type="button" value="=" v-on:click="calculateExpression"/></td>
                <td><input class="button" type="button" value="/" v-on:click="addNumber"/></td>

              </tr>

            </tbody>

          </table>
        
        </form>

          <img :src="this.gif1" />

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Calculator',

  data() {
    return {
      calculation: '',
      gifs: [],
      gif1: ''
    }
  },
  methods: {
    clear() {
      this.calculation = ''
    },

    calculateExpression() {
      console.log("expression calculated: ")
      this.calculation = eval(this.calculation)

      axios
        .get("http://api.giphy.com/v1/gifs/search?q=cats&api_key=Yn6qSAkr1cTkmEeJSO8rVhmWmZkpPLvP&limit=5")
        .then(res => {
            this.gifs = res.data.data
            this.gif1 = res.data.data[0].url
            console.log(this.gif1)
        })
        .catch(err => console.log(err))
      
    },
    addNumber(e) {
      console.log(e.target.value)
      this.calculation = this.calculation.concat(e.target.value)
      console.log(this.calculation)
    },
    myChangeFunc() {
      console.log(this.calculation)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

table {
  tbody {
    display: flex;
    flex-direction: column;

    td {
      th {
        input {
          color: tan;
        }
      }
    }
  }
}

</style>



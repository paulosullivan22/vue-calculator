<template>
  <div class="hello">

    <p>Calculator</p>

        <form name="form">

          <table>
            <thead>

            <tr>
              <input 
                type="text" 
                placeholder="Calculate an expression" 
                v-model="calculation" 
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



        <div v-if="this.gif">

          <p> {{ this.message }} </p>

          <img :src="`https://media.giphy.com/media/${this.gif.id}/giphy.gif`" alt="gif" width="300px"/>

        </div>

  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Calculator',

  data() {
    return {
      calculation: '',
      gif: false,
      result: '' 
    }
  },
  methods: {
    clear() {
      this.calculation = '',
      this.gif = '',
      this.message = ''
    },

    calculateExpression() {
      // if result is zero...
      this.calculation = eval(this.calculation)
      if (!this.calculation) return;
      let result = this.calculation.toString()
      console.log(result)
      console.log(result[result.length - 1])

      axios
        .get(`https://api.giphy.com/v1/gifs/random?api_key=Yn6qSAkr1cTkmEeJSO8rVhmWmZkpPLvP&tag=cat&limit=5`)
        .then(res => {
                this.gif = res.data.data
                console.log(this.gif)
                this.message = `Well done, you did a sum. Enjoy a random cat gif as a reward.`
        })
        .catch(err => console.log(err))
    },
    addNumber(e) {

      if (!this.calculation) this.calculation = e.target.value
      else this.calculation += e.target.value
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



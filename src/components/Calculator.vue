<template>
  <div class="hello">

    <p>Calculator</p>

          <div class="calculator-container">

            <input 
                class="calculator-output"
                type="text" 
                placeholder="Calculate an expression" 
                v-model="calculation" 
                disabled
                />

                <table cellspacing="0">

                  <tbody>

                    <tr>

                      <td><input type="button" value="1" v-on:click="addNumber" /></td>
                      <td><input type="button" value="2" v-on:click="addNumber"/></td>
                      <td><input type="button" value="3" v-on:click="addNumber"/></td>
                      <td><input type="button" value="+" v-on:click="addNumber"/></td>

                    </tr>

                    <tr>

                      <td><input type="button" value="4" v-on:click="addNumber" /></td>
                      <td><input type="button" value="5" v-on:click="addNumber"/></td>
                      <td><input type="button" value="6" v-on:click="addNumber"/></td>
                      <td><input type="button" value="-" v-on:click="addNumber"/></td>

                    </tr>

                    <tr>

                      <td><input type="button" value="7" v-on:click="addNumber" /></td>
                      <td><input type="button" value="8" v-on:click="addNumber"/></td>
                      <td><input type="button" value="9" v-on:click="addNumber"/></td>
                      <td><input type="button" value="*" v-on:click="addNumber"/></td>

                    </tr>

                    <tr>

                      <td><input type="button" value="C" v-on:click="clear" /></td>
                      <td><input type="button" value="0" v-on:click="addNumber"/></td>
                      <td><input type="button" value="=" v-on:click="calculateExpression"/></td>
                      <td><input type="button" value="/" v-on:click="addNumber"/></td>

                    </tr>

                  </tbody>

                </table>

        </div>


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

<style lang="scss">

.calculator-container {
  width: 300px;

  .calculator-output {
    box-sizing: border-box;
    height: 50px;
    width: 100%;
  }

  table {
    box-sizing: border-box;
    width: 100%;
    border: 1px solid black;
    border-spacing: 0;
    border-collapse: collapse;

    tbody {
      td {
        margin: 0;
        padding: 0;
      }
    }

    input {
      width: 60px;
      border: none;
      outline: none;
      height: 60px;
      font-size: 1.2em;
    }
  }
}
</style>



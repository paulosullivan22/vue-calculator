<template>

    <div class="calculator-container">

      <h1>The Cat Calculator</h1>

      <div class="calculator-output-container">
        <input 
          class="calculator-output"
          type="text" 
          placeholder="Calculate a sum" 
          v-model="calculation" 
          disabled
          />
        </div>

          <table cellspacing="0" cellpadding="0">

            <tbody>

              <tr>

                <td><input type="button" value="1" v-on:click="addNumber" /></td>
                <td><input type="button" value="2" v-on:click="addNumber"/></td>
                <td><input type="button" value="3" v-on:click="addNumber"/></td>
                <td><input class="special-btn" type="button" value="+" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input type="button" value="4" v-on:click="addNumber" /></td>
                <td><input type="button" value="5" v-on:click="addNumber"/></td>
                <td><input type="button" value="6" v-on:click="addNumber"/></td>
                <td><input class="special-btn" type="button" value="-" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input type="button" value="7" v-on:click="addNumber" /></td>
                <td><input type="button" value="8" v-on:click="addNumber"/></td>
                <td><input type="button" value="9" v-on:click="addNumber"/></td>
                <td><input class="special-btn" type="button" value="*" v-on:click="addNumber"/></td>

              </tr>

              <tr>

                <td><input class="special-btn" type="button" value="C" v-on:click="clear" /></td>
                <td><input type="button" value="0" v-on:click="addNumber"/></td>
                <td><input class="special-btn" type="button" value="=" v-on:click="calculateExpression"/></td>
                <td><input class="special-btn" type="button" value="/" v-on:click="addNumber"/></td>

              </tr>

            </tbody>

          </table>

          <p v-if="this.message.length" class="message"> {{ this.message }} </p>

          <div v-if="this.gif">

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
      result: '',
      message: ''
    }
  },
  methods: {
    clear() {
      this.calculation = '',
      this.gif = '',
      this.message = ''
    },

    calculateExpression() {
      this.calculation = eval(this.calculation)
      if (!this.calculation) return this.message = "Uh oh, you did a sum but the answer was 0. Try again for a little reward.";

      axios
        .get(`https://api.giphy.com/v1/gifs/random?api_key=Yn6qSAkr1cTkmEeJSO8rVhmWmZkpPLvP&tag=cat&limit=5`)
        .then(res => {
                this.gif = res.data.data
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
  width: 295px;
  text-align: center;

  h1 {
    color: #d6d6d6;
  }

  .calculator-output-container {
    box-sizing: border-box;
    height: 50px;
    width: 100%;
    background-color: #243447;
    color: rgb(253, 224, 0);
    border: none;
    border-radius: 50px;
    margin: 20px 0;
    display: flex;


    .calculator-output {
      margin-left: 20px;
      background-color: rgba(0, 0, 0, 0);
      border: none;
      outline: none;
      font-size: 1em;
      color: rgb(253, 224, 0);
    }
  }

  table {
    box-sizing: border-box;
    width: 300px;
    border-spacing: 0;
    border-collapse: collapse;

    tbody {
      tr {

        td {
          margin: 0;
          padding: 10px 5px;
          width: 60px;
        }
      }
    }

    input {
      width: 100%;
      box-sizing: border-box;
      border-radius: 50px;
      outline: none;
      height: 60px;
      font-size: 1.2em;
      background-color: #243447;
      color: rgb(253, 224, 0);
      border: none;
    }

    .special-btn {
      color: #d6d6d6;
      background-color: #c51f5d;
    }
  }

  .message {
    color: #d6d6d6;
    margin: 40px 0;
  }
}
</style>



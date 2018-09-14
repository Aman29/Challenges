<template>
  <div>
    <div class="border">
      <div v-if="!gameOver">
        <div v-for="(data, index) in new_state">
          <div class="tile" v-bind:style="tileValue" v-for="(tileValue, index) in data":class="'tile'.concat(tileValue)">
            <label v-if="tileValue > 0">{{tileValue}}</label>
          </div>
        </div>
        <button class="addButton" @click="addTile()">Add Tile</button>
      </div>
      <div v-else>
        <div class="overlay"> Game Over</div>
      </div>
    </div>
  </div>
</template>

<script>
import placeNew from '../game';
let initial_state = [
  [8, 0, 0, 0],
  [4, 2, 0, 0],
  [4, 0, 4, 0],
  [2, 0, 0, 0],
];
let new_state = placeNew(initial_state);
export default {
  name: 'Challenge3',
  data () {
    return {
      new_state : new_state,
      gameOver : false,
      tileValue : ''
    }
  },
  methods: {
    addTile() {
      let current_state = placeNew(new_state);
      if (-1 == current_state) {
        this.gameOver = true;
      } else {
        let array = [];
        current_state.forEach(function(element) {
          let elementObject = Object.assign({}, element);

          let arr = Object.keys(elementObject).map(i => elementObject[i]);
          array.push(arr);
        });
        this.new_state = array;
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/game.css" scoped>

</style>

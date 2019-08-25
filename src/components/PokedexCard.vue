<template>
  <div class="pokedex-card">
    <div class="pokedex-card-header">
      <div class="poke-name">{{ pokemonName }}</div>
      <div class="poke-number">{{ pokemonNumber }}</div>
    </div>
    <div class="pokedex-card-image">
      <img :src="getImagePath()" :alt="pokemonName">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokedexCard',
  props: {
    pokemonNumber: Number,
    pokemonName: String
  },
  methods: {
    getImagePath: function () {
      return require(`./../assets/svg/${this.pokemonNumber}.svg`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$black: #000;
$white: #fff;
$lightBrillBlue: #3b43e6;

.pokedex-card {
  width: 200px;
  height: 200px;
  background-color: $white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border: 1px solid $lightBrillBlue;
  border-radius: 0 15px 15px 15px;
  margin: 5px;
}

.pokedex-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.pokedex-card-header {
  height: 35px;
  background-color: $lightBrillBlue;
  border-radius: 0 15px 0 0;
}

.poke-name {
  float: left;
  margin: 0px 0px 0 10px;
  font-size: 30px;
  color: $white;
  text-transform: uppercase;
}

.poke-number {
  float: right;
  width: 35px;
  background-color: $white;
  border-bottom: 1px solid $white;
  color: $lightBrillBlue;
  font-size: 25px;
  text-align: center;
  align-items: center;
  border-radius: 15px 15px 0px 15px;
}

.pokedex-card-image img {
  height: 150px;
  width: 150px;
  margin-left: 15px;
}
</style>

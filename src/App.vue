<template>
  <div id="app">
    <Pokedex />
  </div>
</template>

<script>
import Pokedex from './components/Pokedex.vue'
import pokemon from '@/mixins/pokemon'

export default {
  name: 'app',
  mixins: [
    pokemon
  ],
  components: {
    Pokedex
  },
  created () {
    const res = this.getAllPokemon()
  }
}
</script>

<style lang="scss">
</style>

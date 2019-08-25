<template>
  <div class="app">
    <h1>{{ name }}</h1>
    <Search />
    <Pokedex
      v-for="gen in pokedex.generations.gen"
      v-bind:key="gen.id"
      v-bind:name="gen.name"
      v-bind:genName="gen.genName"
      v-bind:pokemonList="gen.pokemonList"
    />
  </div>
</template>

<script>
import pokemonWrapper from '@/mixins/pokemonWrapper'
import PokedexGen from '@/classes/PokedexGen.js'
import Pokedex from './components/Pokedex.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  mixins: [
    pokemonWrapper
  ],
  components: {
    Pokedex,
    Search
  },
  async created () {
    // Get all generations
    try {
      const result = await this.getAllGenerations()
      // Adding to object
      result.forEach((el) => {
        let newItem, nextID, genName

        nextID = this.pokedex.generations.nextID
        genName = el.name

        // Current API does not support Alolan pokemon in National Dex
        // So, we ignore it until it is ready.

        // SVG's doesn't have Gen 6 either, so will need to find another SVG pack.
        if (genName !== 'generation-vii' && genName !== 'generation-vi') {
          newItem = new PokedexGen(nextID, genName)

          this.pokedex.generations.gen.push(newItem)

          this.pokedex.generations.nextID++
        }
      })
    } catch (error) {
      console.log(error)
    }

    // Get region based on generation
    try {
      let gens = this.pokedex.generations.gen

      for (let gen in gens) {
        let genName, regionName

        genName = gens[gen].genName
        regionName = await this.getRegionByGen(genName)

        gens[gen].name = regionName
      }
    } catch (error) {
      console.log(error)
    }

    // Get total number of pokemon per generation
    try {
      let gens = this.pokedex.generations.gen

      for (let gen in gens) {
        let genName, res

        genName = gens[gen].genName
        res = await this.getPokemonByGen(genName)

        gens[gen].totalNumOfPokemon = res.length
      }
    } catch (error) {
      console.log(error)
    }

    /*
      Get pokemon list based on region

      PokeAPI doesn't have Alolan pokemon sorted into region,
      so I will manually enter them into their respective lists
      based on the national dex
    */

    try {
      let gens = this.pokedex.generations.gen
      let allPokes = await this.getAllPokemon()

      for (var gen in gens) {
        let totalNum, pokeArr

        pokeArr = []
        totalNum = gens[gen].totalNumOfPokemon

        for (let i = 0; i < totalNum; i++) {
          pokeArr.push(allPokes[i])
        }

        allPokes.splice(0, totalNum)

        gens[gen].pokemonList = pokeArr
      }
    } catch (error) {
      console.log(error)
    }
  },
  data () {
    return {
      name: 'Pokedex',
      pokedex: {
        generations: {
          nextID: 0,
          gen: []
        }
      }
    }
  }
}
</script>

<style lang="scss">
$defaulColor: #2c32be;
$white: #fff;

html {
  box-sizing: border-box;
}

html *,
html *:before,
html *:after {
  box-sizing: inherit;
}

body {
  font-family: 'Teko', sans-serif;
  background: $defaulColor;
  background: linear-gradient(90deg, rgba(44,50,190,1) 0%, rgba(29,32,115,1) 50%, rgba(6,8,48,1) 100%);
}

.app h1 {
  text-align: center;
  color: $white;
  font-size: 5em;
  font-weight: 500;
  margin: .3em 0 0 0;
}
</style>

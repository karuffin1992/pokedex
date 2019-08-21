<template>
  <div id="app">
  </div>
</template>

<script>
import pokemonWrapper from '@/mixins/pokemonWrapper'
import PokedexGen from '@/classes/PokedexGen.js'

export default {
  name: 'app',
  mixins: [
    pokemonWrapper
  ],
  async created () {
    // Get all generations
    try {
      const result = await this.getAllGenerations()
      // Adding to object
      result.forEach((el) => {
        let newItem, nextID, genName

        nextID = this.pokedex.generations.nextID
        genName = el.name

        newItem = new PokedexGen(nextID, genName)

        this.pokedex.generations.gen.push(newItem)

        this.pokedex.generations.nextID++
      })
    } catch (error) {
      console.log(error)
    }

    // Get region based on generation
    try {
      let gens = this.pokedex.generations.gen

      for (var gen in gens) {
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

      for (var gen in gens) {
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
      console.log(allPokes)

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
</style>

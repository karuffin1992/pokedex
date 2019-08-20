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
    // Get all generations and add them to object
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

      console.log(this.pokedex)
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

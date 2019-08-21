import axios from 'axios'

export default {
  data () {
    return {
      api: 'https://pokeapi.co/api/v2'
    }
  },
  methods: {
    async getPokemonByID (id) {
      try {
        const endpoint = `/pokemon/${id}`
        const url = `${this.api}${endpoint}`
        const res = await axios(url)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async getPokemonByName (name) {
      const endpoint = `/pokemon/${name}`
      const url = `${this.api}${endpoint}`
      const res = await axios(url)
      return res
    },
    async getAllPokemon () {
      const endpoint = '/pokedex/national'
      const url = `${this.api}${endpoint}`
      const res = await axios(url)
      const pokemon = res.data.pokemon_entries
      return pokemon
    },
    async getPokemonByRegion (region) {
      const endpoint = `/pokedex/${region}`
      const url = `${this.api}${endpoint}`
      const res = await axios(url)
      const pokemon = res.data.pokemon_entries
      return pokemon
    },
    async getPokemonByGen (gen) {
      try {
        const endpoint = `/generation/${gen}`
        const url = `${this.api}${endpoint}`
        const res = await axios(url)
        return res.data.pokemon_species
      } catch (error) {
        console.log(error)
      }
    },
    async getRegionByGen (gen) {
      try {
        const endpoint = `/generation/${gen}`
        const url = `${this.api}${endpoint}`
        const res = await axios(url)
        return res.data.main_region.name
      } catch (error) {
        console.log(error)
      }
    },
    async getAllGenerations () {
      try {
        const endpoint = `/generation/`
        const url = `${this.api}${endpoint}`
        const res = await axios(url)
        return res.data.results
      } catch (error) {
        console.log(error)
      }
    }
  }
}

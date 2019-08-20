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
      const endpoint = `/generation/${gen}`
      const url = `${this.api}${endpoint}`
      const res = await axios(url)
      const pokemon = res.data.pokemon_entries
      return pokemon
    },
    async getAllGenerations () {
      try {
        const endpoint = `/generation/`
        const url = `${this.api}${endpoint}`
        const res = await axios(url)
        const gens = res.data.results
        return gens
      } catch (error) {
        console.log(error)
      }
    }
  }
}

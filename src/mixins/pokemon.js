import axios from 'axios'

export default {
  data () {
    return {
      api: 'https://pokeapi.co/api/v2'
    }
  },
  methods: {
    async getPokemonByID (id) {
      const endpoint = `/pokemon/${id}`
      const url = `${this.api}${endpoint}`
      console.log(url)
      const res = await axios(url)      
      console.log(res)
    },
    async getPokemonByName (name) {
      const endpoint = `/pokemon/${name}`
      const url = `${this.api}${endpoint}`
      console.log(url)
      const res = await axios(url)      
      console.log(res)
    },
    async getAllPokemon () {
      const endpoint = '/pokedex/national'
      const url = `${this.api}${endpoint}`
      console.log(url)
      const res = await axios(url)      
      const pokemon = res.data.pokemon_entries
      console.log(pokemon)

    }
  }
}

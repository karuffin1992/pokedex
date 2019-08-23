<template>
  <section class="pokedex">
    <div class="pokedex-header">
      <h2>{{ name }} ({{ genName }})</h2>
    </div>
    <div class="pokedex-container">
      <PokedexCard />
    </div>
  </section>
</template>

<script>
import PokedexCard from '@/components/PokedexCard.vue'

export default {
  name: 'Pokedex',
  components: {
    PokedexCard
  },
  props: {
    name: String,
    genName: String,
    pokemonList: Array
  }
}
</script>

<style scoped lang="scss">
$white: #fff;

.pokedex {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.pokedex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly
}

.pokedex-header h2 {
  color: $white;
  font-weight: 700;
  font-size: 2em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .pokedex {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .pokedex {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .pokedex {
    width: 1170px;
  }
}
</style>

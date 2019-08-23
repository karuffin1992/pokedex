<template>
    <section class="search">
      <div class="searchContainer">
        <form action="" method="get" target="_blank">
          <input type="text" name="q" placeholder="Search..." autofocus="autofocus" autocomplete="off"/>
        </form>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$black: #000;
$white: #fff;
$purple: rgba(6,8,48,1);

.searchContainer {
  margin: 0 auto;
  width: 400px;
}

form input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid $purple;
  border-radius: 25px;
  font-size: 1.25rem;
  text-align: center;
  background-color: $purple;
  color: $white;
}

form input {
  opacity: .4;
}

form input:focus{
  outline: none;
  opacity: .9;
}
</style>

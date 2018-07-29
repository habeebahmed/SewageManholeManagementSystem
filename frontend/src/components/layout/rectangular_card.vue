<template>
  <div class="card">
    <img :src="input.coverImage.large" />
    <div class="card_text_group">
      <h2>{{ input.title.romaji }}</h2>
      <h4>popularity: {{ input.popularity }}<br>
          genres: {{ [...input.genres][0] }}<br>
          Average Score: {{ input.averageScore }}<br>
      </h4>
    </div>
  </div>
</template>

<script>
export default{
  props: ['input']
}
</script>

<style scoped>
.card{
  width: 500px;
  height: 250px;
  border-radius: 20px;
  background-color: #FFF;
  box-shadow: 0px 0px 30px #4B4B4B;
  display: grid;
  grid-template-columns: 30% 30px auto;
  grid-template-rows: 0px 20px auto;
}

.card img{
  height: 250px;
  width: 180px;
  border-radius: 20px 0px 0px 20px;
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
}

.card_text_group {
  height: 250px;
  padding: 20px;
  grid-column-start: 3;
  grid-column-end: span 4;
  grid-row-start: 2;
}

.card_text_group h2{
  width: 100%;
  border-bottom: 1px solid #4B4B4B;
  font-family: ExtraBold;
}

.card_text_group h4{
  font-family: Light;
  margin-top: 20px;
  text-transform: capitalize;
}

</style>

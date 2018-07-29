<template>
  <div class="post_card">
    <h3 class="post_title">Welcome to Ackerman! A new adventure awaits...</h3>
    <div class="userInfo">
      <h4>by </h4><h6 class="post_user">UzairF</h6>
      <h5>CREATOR</h5>
      <h4>posted in </h4>
      <h6 class="post_category">GENERAL</h6>
    </div>
    <div class="post_user_info">
      <h1>#1</h1>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>

.post_card {
  width: 60vw;
  min-height: 80px;
  background-color: #FFF;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 2% 75% 21% 2%;
  grid-template-rows: 2% auto 10% 2%;
  border-left: 5px solid #1492e6;
  color: #1492e6;
}

.userInfo{
  grid-column-start: 2;
  grid-row-start: 3;
  font-family: Light;
  display: inline;
}

.post_category,.post_user {
  margin: 0px 5px;
  font-size: 1rem;
  display: inline;
  color: #1492e6;
  font-family: ExtraBold;
}

.userInfo h4{
  font-family: Light;
  display: inline;
}

.post_card h5{
  padding: 0px 20px;
  margin: 0px 5px;
  background: linear-gradient(to right, #1492e6 60%, #00FFFF);
  font-family: Light;
  color: #FFF;
  display: inline;
}

.post_title {
  grid-column-start: 2;
  grid-column-end: span 3;
  grid-row-start: 2;
  font-family: ExtraBold;
}

.post_user_info {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  font-family: Light;
  float: left;
}

.post_user_info h1{
  float: right;
  font-size: 2rem;
  font-family: ExtraBold;
  padding: 0;
  margin: 0;
}
</style>

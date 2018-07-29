<template>
  <div>
    <el-popover
      ref="popover"
      placement="top"
      width="300"
      v-model="visible2">
      <div class="signin">
        <h2 style="font-family:ExtraBold;">Welcome back, </h2>
        <h2>sign in to continue with </h2><h2 style="font-family:ExtraBold;">HMWSSB.</h2>

        <input
          placeholder="Username"
          autocomplete="off"
          spellcheck="false"
          v-model="username" class="username">

        <input
          type="password"
          placeholder="Password"
          v-model="password" class="password">

        <button class="insideButton">Login</button>

        <div id="message" v-if="message">
          <h4>Error.</h4>
          <h5>Your username or password is incorrect.</h5>
        </div>
      </div>
    </el-popover>

    <el-button v-popover:popover id="signin" v-if="!loggedIn">SIGN IN</el-button>

    <div id="LoggedIn" v-if="loggedIn">
      <img src="https://i2.wp.com/www.n2anime.com/wp-content/uploads/2018/01/Ichigo-Darling-in-the-franxx-characters-016-n2anime.png?resize=300%2C298" />
      <el-dropdown id="dropdown">
        <span class="el-dropdown-link">
          UzairF<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Profile</el-dropdown-item>
          <el-dropdown-item>Messages</el-dropdown-item>
          <el-dropdown-item>Logout</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible2: false,
      activeName: 'first',
      username: null,
      email: null,
      password: null,
      message: false,
      loggedIn: false
    }
  }
}
</script>

<style scoped>
* {
  font-family: Light;
}

h2 {
  font-size: 1.2em;
}

.signin {
  height: 400px;
  padding: 10px;
}

.insideButton {
  font-family: ExtraBold;
  font-size: 2em;
  border: none;
  background-color: #FFF;
  color: #1492e6;
  transition: 0.6s ease color;
}

.insideButton:hover {
  color: cyan;
}

input {
  border: none;
  width: 100%;
  border-bottom: 1px solid #4B4B4B;
  font-size: 18px;
  font-family: Light;
  margin-top: 20px;
  color: #1492e6;
  text-decoration: none;

}

.username {
  margin-top: 50px;
}

.password {
  margin-bottom: 50px;
}
#signin {
  font-size: 0.7rem;
  background: linear-gradient(to right, #1492e6 40%, cyan);
  color: #FFF;
  border-radius: 20px;
  padding: 10px 20px;
  transition: 0.6s ease background-color;
  transition: 0.6s ease color;
  margin-top: 0.8rem;
  border:none;
}

#signin:hover {
  background: #FFF;
  color: #4B4B4B;
  box-shadow: 0px 0px 10px #4B4B4B;
}

#message {
  margin: 20px 0px;
}

#message h4 {
  font-family: ExtraBold;
  margin: 0;
  padding: 0;
}

#LoggedIn {
  height: 80px;
  width: 300px;
  font-size: 1em;
}

#LoggedIn img {
  vertical-align: middle;
  height: 50px;
}

#dropdown {
  margin: 0px 20px;
}
</style>

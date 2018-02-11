<template>
  <div class="container">
    <form class="form-signin">
      <h2>
        {{this.$store.state.home}}
      </h2>
      <label for="inputEmail">邮件地址</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="邮件地址" required autofocus>
      <label for="inputPassword" class="sr-only">密码</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="密码" required>
      <div class="checkbox">
        <label>
          <input type="checkbox" value="remember-me">记住我
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit" v-on:click="reverseMessage">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '登录结缘'
    }
  },
  computed: {
    home() {
      return this.$store.state.home
    },
    my() {
      return this.$store.state.my
    }
  },
  methods: {
    reverseMessage() {
      console.log(this)
    }

  },
  created() {
    console.log(this.$store)
  }
}
</script>

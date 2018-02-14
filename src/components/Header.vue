<template>
  <div>
    <div>{{$store.state.time}}</div>
    <mybutton value="refresh"></mybutton>
    <div>{{$store.state.steps}}</div>
  </div>
</template>
<script>
import MyButton from './MyButton'
export default {
  methods: {
    refresh() {
      this.$store.commit('refresh')
    }
  },
  components: {
    mybutton: MyButton
  },
  destroyed() {
    this.$store.commit('clear')
  }
}
</script>


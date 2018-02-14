<template>
  <div class="row">
    <div class="col-md-2 col-xs-2"></div>
    <div class="col-md-6 col-xs-8 item_head">
      <p>
        <span>{{$store.state.time}}</span>
        <mybutton value="refresh"></mybutton>
        <span>{{$store.state.steps}}</span>
      </p>
    </div> 
    <div class="col-md-2 col-xs-2"></div>
  </div>
</template>
<script>
import MyButton from './Mybutton'
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
<style>
.item_head {
  text-align: center;
  margin: auto;
  font-size: 22px;
}
</style>



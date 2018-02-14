<template>
  <div>
    <header1></header1>
    <div>
      <template v-for="i in [0,1,2,3]">
        <div :key=i>
          <point :value=value :x=index :y=i :key=value v-for="(value,index) in $store.state.init.filter((v,k)=>{return Math.floor(k/4)==i})">
          </point>
        </div>
      </template>
      <div v-if="$store.state.sucess">
        <h3>SUCESS!!</h3>
        <mybutton value="restart"></mybutton>

      </div>
    </div>
  </div>
</template>
<script>
import Header from './Header'
import Point from './Point'
import MyButton from './Mybutton'
export default {
  components: {
    header1: Header,
    point: Point,
    mybutton: MyButton
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
    this.$store.commit('init')
  }
}
</script>
<style>
span {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>


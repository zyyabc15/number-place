<template>
  <div>
    <header1></header1>
    <div class="row">
      <div class="col-md-2 col-xs-1"></div>
      <div class="wrap col-md-6 col-xs-8">
        <template v-for="i in [0,1,2,3]">
          <div :key=i>
            <point :value=value :x=index :y=i :key=value v-for="(value,index) in $store.state.init.filter((v,k)=>{return Math.floor(k/4)==i})">
            </point>
          </div>
        </template>
      </div> 
      <div class="col-md-2 col-xs-1"></div>
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
* { padding: 0; margin: 0; }
.wrap {   
    background-color: #fff;
    margin: auto;
    border: 10px solid #3da9ef;
    border-radius: 5px;
    padding-bottom: 2px;
}
.wrap{
    padding-left: 0px;
    padding-right: 0px;
}
.wrap:after{
    content: '';
    display: block;
    margin-top: 100%;
}
@media (max-width: 1600px) {
    .wrap {   
        width: 20%;
        max-height: 555px;
        max-width: 550px;
    }
}
@media (max-width: 1100px) {
    .wrap {   
        width: 65%;
        max-height: 555px;
        max-width: 555px;
    }
}
@media (max-width: 900px) {
    .wrap {   
        width: 60%;
    }
}
@media (max-width: 600px){
    .wrap {   
        width: 80%;
    }
}
@media (max-width: 400px) {
    .wrap {   
        width: 90%;
    }
}
</style>


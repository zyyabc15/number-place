<template>
    <div class="grid" @click='click({x:x,y:y})'>
      <div class="title" v-if='value !== 16'>
        {{value}}
      </div>
    </div>
</template>
<script>
export default {
  props: {
    value: Number,
    x: Number,
    y: Number
  },
  methods: {
    click(p) {
      this.$store.commit('clickPoint', p)
    }
  }
}
</script>
<style>
@import '../assets/css/font.css';
@media (max-width: 1600px) {
    .wrap .grid {
        width: 24%;
        height: 24%;
        max-height: 126px;
        max-width: 126px;
        margin-left: 4px;
        margin-top: 3px;
        margin-bottom: 4px;
        margin-right: 2px;
    }
}
@media (max-width: 1100px) {
    .wrap .grid {
        width: 23%;
        height: 23%;
        max-height: 126px;
        max-width: 126px;
        margin-left: 5px;
        margin-top: 3px;
        margin-bottom: 4px;
        margin-right: 3px;
    }
}
@media (max-width: 900px) {
    .wrap .grid {
        width: 23%;
        height: 23%;
        margin-left: 5px;
        margin-top: 3px;
        margin-bottom: 3px;
        margin-right: 2px;
    }
}
@media (max-width: 600px){
    .wrap .grid {
        width: 23%;
        height: 23%;
        margin-left: 4px;
        margin-top: 3px;
        margin-bottom: 3px;
        margin-right: 2px;
    }
}
@media (max-width: 400px) {
    .wrap .grid {
        width: 23%;
        height: 23%;
        max-height: 87px;
    }
}
.wrap .grid {
    background-color: #99CCFF;
    border-radius: 8px;
    float: left;
    /* padding: 2px; */
    position: relative;
    box-shadow: inset 0px 0px 0px #fff, 
                2px 2px 0px 0px #63b8f5, 
                5px 5px 2px #f0f0f0;
}
.wrap .grid .title {
  font-family: 'Kavivanar', cursive;
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
</style>

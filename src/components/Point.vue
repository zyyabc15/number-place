<template>
    <span @click='click({x:x,y:y})'>{{value}}</span>
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

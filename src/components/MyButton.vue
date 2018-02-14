<template>
    <button @click='refresh'>{{value}}</button>
</template>
<script>
export default {
  props: {
    value: String
  },
  methods: {
    refresh() {
      this.$store.commit('refresh')
    }
  }
}
</script>

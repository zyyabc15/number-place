<template>
    <button @click='refresh' class="btn btn-outline btn-primary">
      {{value}}
    </button>
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
<style>
.btn {
  font-size: 16px;
  font-weight: 600;
}
</style>

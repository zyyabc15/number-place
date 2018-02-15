<template>
<div class="modal show back">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p>SUCCESS</p>
      </div>
      <div class="modal-footer">
        <mybutton value="Restart"></mybutton>
      </div>
    </div>
  </div>
</div>

</template>
<script>
import MyButton from './Mybutton'
export default {
  components: {
    mybutton: MyButton,
  }
}
</script>
<style>
.back {
  background: rgba(7,17,27,0.5)
}
.modal-content {
  margin-top: 30%;
}
p {
  font-size: 18px;
}
</style>


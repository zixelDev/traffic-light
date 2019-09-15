<template>
  <div class="timer-numbers" id="timer">
    <span class="minutes">00</span>
    <span>:</span>
    <span  class="seconds">{{ seconds }}</span>
  </div>
</template>


<script>


export default {
  template: "#timer",
  props: ["seconds"],
  updated:function() {
    this.seconds = String(this.seconds).length == 1 ? '0'+this.seconds : this.seconds;
  }
};
</script>


<style scoped>
.timer-numbers {
  font-size: 90px;
  text-align: center;
  
}
</style>
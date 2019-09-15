<template>
  <div class="screen2">
    <timer :seconds='seconds' ref="sec" />
    <div class="round top"></div>
    <div class="round mid" v-bind:style="{opacity: opacity}"></div>
    <div class="round bot"></div>
    <img src="../assets/traffic-light.svg" alt="traffic_light" />
  </div>
</template>

<script>
import timer from "./Timer.vue";
export default {
  props: ["prev","seconds"],
  data: function() {
    return {
      name: "screen2",
      opacity: "1"
    };
  },
  methods: {
    sendData() {
      this.$emit("transmit", {
        prev: this.name,
        next: this.prev == "screen1" ? "screen3" : "screen1",
        id: 1,
        timeout: 3
      });
    },
    blink() {
     let count = 0, 
         timerId = setInterval(() => {
          count++
          this.opacity = (this.opacity == "1") ? "0.3" : "1";
          if (count == 2) {
            clearInterval(timerId);
          }
        }, 500);
    }
  },
  created: function() {
    this.sendData();
  },
  watch: {
    '$route':'sendData'
  },
  components: { timer }
};
</script>


<style scoped>
img {
  display: block;
  margin: 0 auto;
}
.round {
  margin: 0 auto;
  width: 106px;
  height: 106px;
  border-radius: 100%;
  position: absolute;
  left: 46.50%;
}
.top {
  background-color: red;
  top: 159px;
  opacity: 0.3;
}
.mid {
  background-color: yellow;
  top: 288px;
}
.bot {
   top: 414px;
  background-color: green;
  opacity: 0.3;
}
</style>
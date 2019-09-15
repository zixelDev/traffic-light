<template>
  <div class="screen3">
    <timer :seconds="seconds" ref="sec" />
    <div class="round top"></div>
    <div class="round mid"></div>
    <div class="round bot" v-bind:style="{opacity: opacity}"></div>
    <img src="../assets/traffic-light.svg" alt="traffic_light" />
  </div>
</template>

<script>
import timer from "./Timer.vue";

export default {
  props: ["prev", "seconds"],
  data: function() {
    return {
      name: "screen3",
      opacity: "1"
    };
  },
  methods: {
    sendData() {
      this.$emit("transmit", {
        prev: this.name,
        next: "screen2",
        id: 2,
        timeout: 15
      });
    },
    blink() {
      let count = 0,
        timerId = setInterval(() => {
          count++;
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
  opacity: 0.3;
}
.bot {
  top: 414px;
  background-color: green;
}
</style>
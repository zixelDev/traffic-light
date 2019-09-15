<template>
  <div class="screen1" >
    <timer :seconds='seconds' ref="sec" />
    <div class="round top" v-bind:style="{opacity}"></div>
    <div class="round mid"></div>
    <div class="round bot"></div>
    <img src="../assets/traffic-light.svg" alt="traffic_light" />
    
  </div>
</template>

<script>
// location.reload();
import timer from "./Timer.vue";


export default {
  props: ["prev","seconds"],
  data: function() {
    return {
      name: "screen1",
      opacity: '1'
    };
  },
  methods: {
    sendData() {
      
      this.$emit("transmit", {
        prev: this.name,
        next: "screen2",
        id: 0,
        timeout:10
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
  watch: {
    '$route':'sendData'
  },
  created: function() {
    this.sendData();
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
   /* background:
    repeating-linear-gradient(
        transparent,rgb(87, 6, 6) 15px, black 22px
        ),
    repeating-linear-gradient(
        90deg,
        transparent,rgb(87, 6, 6) 15px, black  22px
        ); */
}
.mid {
  background-color: yellow;
  top: 288px;
  opacity: 0.3;
}
.bot {
  top: 414px;
  background-color: green;
  opacity: 0.3;
}
</style>
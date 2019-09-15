<template>
  <div id="app">
    <router-view @transmit="goOn" :prev="prev" :seconds='seconds' :key="$route.fullPath"/>
  </div>
</template>

<script>
import screen1 from "./components/Screen1.vue";
import screen2 from "./components/Screen2.vue";
import screen3 from "./components/Screen3.vue";

import { setInterval } from "timers";

export default {
  name: "app",
  
    data() {
      return {
        prev: "",
        seconds: "",
        next: ""
      };
    },
  
  components: {
    screen1,
    screen2,
    screen3
  },
  methods: {
    goOn(data) {
      // this.$router.go();
      this.prev = data.prev;
      this.opacity = data.opacity;
      this.seconds = data.timeout;
      this.next = data.next;
      this.countdown();
    },
    countdown(){
       setTimeout(() => {
        this.seconds--;
        if (this.seconds <= 3) {
          this.$children[0].blink();
        }
        if (this.seconds > 0) {
          this.countdown();
        }else {
          this.$router.push({ name: this.next });
        }
      }, 1000);
    }
  }
};


</script>

<style>
</style>

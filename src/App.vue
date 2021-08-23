<template>
  <Dummy></Dummy>
</template>

<script>
import Dummy from "@/components/Dummy.vue";

export default {
  name: "App",
  components: { Dummy },
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
</style>

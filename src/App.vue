<template>
  <router-view />
  <Toast />
</template>

<script setup>
import Toast from "primevue/toast";
</script>

<style>
#app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

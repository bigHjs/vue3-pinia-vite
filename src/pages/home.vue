<script setup>
import { ref } from 'vue'
import useGlobal from '@/store/global.js'
const globalStore = useGlobal()

 defineProps({
  msg: String,
})

const count = ref(0)
console.log('global', globalStore)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div>platform: {{ globalStore.platform }} </div>
  <div>yousay: {{  globalStore.yousay }}</div>
  <button type="button" @click="globalStore.setPlatform">设置</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

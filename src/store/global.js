import { defineStore } from 'pinia'
import { ref } from 'vue' 
export default defineStore('global', ()=> {
  const platform = ref('')
  const setPlatform = () => {
    platform.value = 'current platform: vue3'
  } 
  return { platform, setPlatform }
})
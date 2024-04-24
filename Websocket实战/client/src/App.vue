<script setup lang="ts">
import { io } from "socket.io-client";
import {onUnmounted,ref} from 'vue'
const socket = io("ws://localhost:3100",{
  reconnectionDelayMax:1000,
})
const message = ref('')

onUnmounted(()=>{
  socket.disconnect()
})
const sumbit = ()=>{
    if(message.value){
      socket.emit('chat message',message.value)
      message.value = ''
    }
}
socket.on('chat message',(msg)=>{
  console.log(msg)
})

</script>

<template>
  <div>

    <input type="text" v-model="message">
    <button @click="sumbit">Send</button>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { io } from "socket.io-client";
import { onUnmounted, ref } from "vue";
const socket = io("ws://localhost:3100", {
  reconnectionDelayMax: 1000,
});
const CHUNK_SIZE = 1024 * 1024;
const message = ref("");
const fileName = ref<string>("");
const fileSize = ref<number>(0);
onUnmounted(() => {
  socket.disconnect();
});
const sumbit = () => {
  if (message.value) {
    socket.emit("chat message", message.value);
    message.value = "";
  }
};
socket.on("chat message", (msg) => {
  console.log(msg);
});
function createFileChunk(file: File) {
  const chunks = [];
  let cur = 0;
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + CHUNK_SIZE));
    cur += CHUNK_SIZE;
  }
  return chunks;
  //
}
const handleUpload = async (e: Event) => {
  console.log(e);
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;
  fileName.value = files[0].name;
  fileSize.value = files[0].size;

  // 文件分片
  const chunks = createFileChunk(files[0]);
  console.log(chunks);
  const hash = await calcuteHash(chunks);
};
</script>

<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="sumbit">Send</button>
  </div>
  <div>
    <div>大文件上传</div>
    <input type="file" @change="handleUpload" />
    {{ fileName }} {{ fileSize }}
  </div>
</template>

<style scoped></style>

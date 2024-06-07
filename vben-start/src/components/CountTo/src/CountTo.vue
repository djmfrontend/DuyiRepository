<template>
  <span> Count to </span>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

defineOptions({
  name: "CountTo",
});

const props = defineProps({
  startValue: {
    type: Number,
    default: 0,
  },
  endValue: {
    type: Number,
    default: 2024,
  },
});

const source = ref(props.startValue);
onMounted(() => {
  console.log(props.startValue);
});
</script>

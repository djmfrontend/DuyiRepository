<template>
  <div>
    {{ $slots }}
    <Table> </Table>
  </div>
</template>
<script lang="ts" setup>
import { Table } from "ant-design-vue";
const emits = defineEmits(["register"]);
import { TableActionType } from "./types/table";

const tableAction: TableActionType = {
  reload: async () => {
    return await new Promise((resolve, reject) => {
      resolve(undefined);
    });
  },
  setProps: () => {
    console.log(111);
  },
};

emits("register", tableAction);
</script>

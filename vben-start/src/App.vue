<template>
  <div>
    <BasicTable>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'"> 3332 </template>
      </template>
    </BasicTable>
  </div>
</template>
<script setup lang="ts">
import { Button } from "ant-design-vue";
import { BasicTable } from "@/components/Table";
import { useTable } from "@/components/Table/src/hooks/useTable";
const [registerTable] = useTable({
  columns: [],
});
console.log(registerTable);
</script>
<style scoped></style>

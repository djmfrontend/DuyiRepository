<template>
  <div>
    <BasicTable @register="registerTable">
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
import { getUser } from "./api";
const [registerTable] = useTable({
  columns: [{ title: "姓名", key: "name", dataIndex: "name" }],
  api: getUser,
  loading: true,
});
console.log(registerTable);
const handleReigister = (aaa: any) => {
  console.log(aaa, "=======");
};
</script>
<style scoped></style>

<template>
  <div>
    <Table v-bind="getBindValues"> </Table>
  </div>
</template>
<script lang="ts" setup>
import { ref, unref, computed } from "vue";
import { Table } from "ant-design-vue";
import { useLoading } from "./hooks/useLoading";
import { useDataSource } from "./hooks/useDataSource";
const tableData = ref([]);
const emits = defineEmits(["register"]);

const innerPropsRef = ref<Partial<BasicTableProps>>();
import { TableActionType, BasicTableProps } from "./types/table";
function setProps(props: Partial<BasicTableProps>) {
  innerPropsRef.value = { ...unref(innerPropsRef), ...props };
}
const getProps = computed(() => {
  return { ...unref(innerPropsRef) } as BasicTableProps;
});
const getBindValues = computed(() => {
  let propsData: any = {
    ...unref(getProps),
    loading: unref(getLoading),
  };
  return propsData;
});
const { setLoading, getLoading } = useLoading(getProps);
const { fetch } = useDataSource(getProps, {
  setLoading,
});
const tableAction: TableActionType = {
  reload: async () => {
    return await new Promise((resolve, reject) => {
      resolve(undefined);
    });
  },
  setProps: setProps,
};

emits("register", tableAction);
</script>

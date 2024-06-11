import { BasicTableProps, TableActionType } from "../types/table";
import { DynamicProps } from "types/utils";
import { onUnmounted, ref, unref, watch } from "vue";
import type { WatchStopHandle } from "vue";
import { getDynamicProps } from "@/utils/index";
type Props = Partial<DynamicProps<BasicTableProps>>;

export function useTable(
  tableProps: Props
): [(instance: TableActionType) => void, TableActionType] {
  const loadedRef = ref<Nullable<boolean>>(false);
  const tableRef = ref<Nullable<TableActionType>>(null);
  let stopWatch: WatchStopHandle;
  function register(instance: TableActionType) {
    onUnmounted(() => {
      loadedRef.value = null;
      tableRef.value = null;
    });
    if (unref(loadedRef) && instance === unref(tableRef)) return;
    tableRef.value = instance;
    tableProps && instance.setProps(getDynamicProps(tableProps));
    loadedRef.value = true;
    stopWatch?.();

    stopWatch = watch(
      () => tableProps,
      () => {
        tableProps && instance.setProps(getDynamicProps(tableProps));
      },
      {
        immediate: true,
        deep: true,
      }
    );
  }

  function getTableInstance(): TableActionType {
    const table = unref(tableRef);
    if (!table) {
      throw new Error("table instance is undefined!");
    }
    return table as TableActionType;
  }
  const methods: TableActionType = {
    reload: async () => {
      return new Promise((resolve) => {
        resolve(undefined);
      });
    },
    setProps: () => {
      console.log(getTableInstance());
    },
  };
  return [register, methods];
}

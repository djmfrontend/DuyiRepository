import type { ComputedRef, Ref } from "vue";
import { ref } from "vue";
import { BasicTableProps } from "../types/table";
import { unref, onUnmounted, onMounted } from "vue";
import { useTimeoutFn } from "@vueuse/core";
import { PaginationProps } from "../types/pagination";

interface ActionType {
  setLoading: (loading: boolean) => void;
  getPaginationInfo: ComputedRef<boolean | PaginationProps>;
  setPagination: (info: Partial<PaginationProps>) => void;

  getFieldsValue: () => Recordable;
  clearSelectedRowKeys: () => void;
  tableData: Ref<Recordable[]>;
}

export function useDataSource(
  props: ComputedRef<BasicTableProps>,
  { setLoading }: ActionType
) {
  const dataSourceRef = ref<Recordable[]>([]);
  async function fetch(opt?: any) {
    console.log("fetch");
    const { api } = unref(props);
    if (!api) return;
    let pageParams: Recordable = {
      page: 1,
    };
    try {
      setLoading(true);
      const res = await api(pageParams);
      console.log(res);
    } catch (error) {
      //
    } finally {
      setLoading(false);
    }
  }
  onMounted(() => {
    useTimeoutFn(() => {
      fetch();
    }, 16);
  });
  //
  return {
    fetch,
  };
}

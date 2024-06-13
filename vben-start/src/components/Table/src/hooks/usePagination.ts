import { BasicTableProps } from "../types/table";
import { PaginationProps } from "../types/pagination";
import type { ComputedRef } from "vue";
import { computed, ref, unref, watch } from "vue";
import { isBoolean } from "@/utils/is";
const PAGE_SIZE = 10;

export function usePagination(refProps: ComputedRef<BasicTableProps>) {
  const configRef = ref<PaginationProps>({});
  const show = ref(true);
  watch(
    () => unref(refProps).pagination,
    (pagination) => {
      if (!isBoolean(pagination) && pagination) {
        configRef.value = {
          ...unref(configRef),
          ...(pagination ?? {}),
        };
      }
    }
  );

  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination } = unref(refProps);
    if (!unref(show) || (isBoolean(pagination) && !pagination)) {
      //
      return false;
    }
    return {
      current: 1,
      size: "small",
      defaultPageSize: PAGE_SIZE,
      ...unref(configRef),
    };
  });
}

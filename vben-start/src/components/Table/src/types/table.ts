import type { ColumnType } from "ant-design-vue/lib/table";
import { DynamicProps } from "types/utils";
import { PaginationProps } from "../types/pagination";
export interface BasicColumn extends ColumnType<Recordable> {
  edit?: boolean;
}
export interface BasicTableProps<T = any> {
  // 列配置
  columns: BasicColumn[];
  // 接口请求对象
  api?: (...arg: any) => Promise<any>;
  // loading加载
  loading?: boolean;
  // 分页配置
  pagination?: PaginationProps | boolean;
}
type Props = Partial<DynamicProps<BasicTableProps>>;

export interface TableActionType {
  reload: () => Promise<Recordable<any>[] | undefined>;
  setProps: (props: Partial<BasicTableProps>) => void;
}

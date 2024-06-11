import type { ColumnType } from "ant-design-vue/lib/table";
import { DynamicProps } from "types/utils";
export interface BasicColumn extends ColumnType<Recordable> {
  edit?: boolean;
}
export interface BasicTableProps<T = any> {
  // 列配置
  columns: BasicColumn[];
  a: any;
}
type Props = Partial<DynamicProps<BasicTableProps>>;

export interface TableActionType {
  reload: () => Promise<Recordable<any>[] | undefined>;
  setProps: (props: Partial<BasicTableProps>) => void;
}

import { unref } from "vue";
export function getDynamicProps<T extends Record<string, unknown>, U>(
  props: T
): Partial<U> {
  const ret: Recordable = {};

  Object.keys(props).forEach((key) => {
    ret[key] = unref((props as Recordable)[key]);
  });

  return ret as Partial<U>;
}

// type User = Record<string, unknown>;
// interface Stu {
//   class: string;
//   age: string;
// }

// const user: Record<string, unknown> = {
//   name: "1",
//   age: "2",
// };
// const stu = getDynamicProps<User, Stu>(user);

// const Stu =

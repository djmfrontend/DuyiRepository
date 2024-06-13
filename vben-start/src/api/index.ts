function delay(time: number = 1000): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
interface User {
  name: string;
}
const getUser = async (): Promise<User[]> => {
  await delay(1000);
  return [{ name: "张三" }];
};

export { getUser };

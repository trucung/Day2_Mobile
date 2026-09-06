// B15: gọi nhiều hàm async tuần tự bằng await (chạy lần lượt, cộng dồn thời gian)
import { triple } from "./B14_triple";

async function runSequential(): Promise<void> {
  const a = await triple(1);
  const b = await triple(2);
  const c = await triple(3);
  console.log(a, b, c); // tổng thời gian ~3 giây
}

runSequential();
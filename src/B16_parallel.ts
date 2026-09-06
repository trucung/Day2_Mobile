// B16: gọi nhiều hàm async song song bằng Promise.all()
import { triple } from "./B14_triple";

async function runParallel(): Promise<void> {
  const [a, b, c] = await Promise.all([triple(1), triple(2), triple(3)]);
  console.log(a, b, c); // chạy song song, tổng thời gian chỉ ~1 giây
}

runParallel();
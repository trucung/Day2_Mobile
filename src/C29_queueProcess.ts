// C29: xử lý task tuần tự theo hàng đợi (queue), task sau chờ task trước xong
import { simulateTask } from "./A05_simulateTask";

async function queueProcess(): Promise<void> {
  const times = [300, 300, 300];
  const results: string[] = [];
  for (const t of times) {
    const res = await simulateTask(t); // chờ xong từng cái mới sang cái tiếp theo
    results.push(res);
  }
  console.log("Kết quả queue:", results);
}

queueProcess();
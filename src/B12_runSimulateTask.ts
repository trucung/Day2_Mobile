// B12: hàm async gọi simulateTask(2000) rồi log kết quả
import { simulateTask } from "./A05_simulateTask";

async function runTask(): Promise<void> {
  const result = await simulateTask(2000);
  console.log(result);
}

runTask();
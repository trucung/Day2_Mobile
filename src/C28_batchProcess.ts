// C28: xử lý 5 task async cùng lúc bằng Promise.all
import { simulateTask } from "./A05_simulateTask";

async function batchProcess(): Promise<void> {
  const times = [200, 400, 600, 800, 1000];
  const results = await Promise.all(times.map((t) => simulateTask(t)));
  console.log("Kết quả batch:", results);
}

batchProcess();
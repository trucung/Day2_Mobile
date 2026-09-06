// B17: dùng for await...of để duyệt mảng các Promise
import { simulateTask } from "./A05_simulateTask";

async function runForAwait(): Promise<void> {
  const tasks = [simulateTask(300), simulateTask(600), simulateTask(900)];
  for await (const result of tasks) {
    console.log(result); // in ra khi từng Promise resolve, theo đúng thứ tự mảng
  }
}

runForAwait();
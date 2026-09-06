// A7: Promise.race() - lấy kết quả của Promise nào xong trước
import { simulateTask } from "./A05_simulateTask";

function fastTask(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Fast xong"), 300));
}

Promise.race([simulateTask(2000), fastTask()]).then((result) =>
  console.log("Kết quả nhanh nhất:", result)
);
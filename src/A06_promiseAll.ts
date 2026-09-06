// A6: Promise.all() chạy song song 3 task, in kết quả khi cả 3 xong
import { simulateTask } from "./A05_simulateTask";

Promise.all([simulateTask(500), simulateTask(1000), simulateTask(1500)]).then(
  (results) => console.log("Tất cả đã xong:", results)
);
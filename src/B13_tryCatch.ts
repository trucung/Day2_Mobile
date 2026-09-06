// B13: xử lý lỗi bằng try/catch với async/await
import { failTask } from "./A03_failTask";

async function runFail(): Promise<void> {
  try {
    await failTask();
  } catch (err) {
    console.log("Bắt lỗi:", (err as Error).message);
  }
}

runFail();
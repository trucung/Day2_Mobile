// C26: dùng async/await kết hợp setTimeout giả lập chờ 5 giây
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runWait(): Promise<void> {
  console.log("Bắt đầu chờ 5 giây...");
  await wait(5000);
  console.log("Đã chờ xong");
}
runWait();

export {};
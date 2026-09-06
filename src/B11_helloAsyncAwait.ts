// B11: Bài A1 viết lại bằng async/await
function wait(ms: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Hello Async"), ms));
}

async function run(): Promise<void> {
  const msg = await wait(2000); // dừng lại chờ Promise xong rồi mới chạy tiếp
  console.log(msg);
}
run();

export {};
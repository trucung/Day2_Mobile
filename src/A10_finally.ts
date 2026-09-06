// A10: .finally() luôn chạy dù thành công hay thất bại
function randomTask(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve("Thành công");
      else reject(new Error("Thất bại"));
    }, 500);
  });
}

randomTask()
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("Done"));
// B20: nếu gọi API quá 2 giây thì ném lỗi timeout
function fetchUserSlow(id: number): Promise<{ id: number }> {
  return new Promise((resolve) => setTimeout(() => resolve({ id }), 3000));
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<T>((_resolve, reject) => {
    setTimeout(() => reject(new Error("Hết thời gian chờ")), ms);
  });
  // Promise.race chọn cái nào xong trước: nếu timeout xong trước -> báo lỗi
  return Promise.race([promise, timeout]);
}

withTimeout(fetchUserSlow(1), 2000)
  .then((res) => console.log(res))
  .catch((err) => console.log("Lỗi:", err.message));
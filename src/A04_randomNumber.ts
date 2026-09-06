// A4: dùng .then() / .catch() với số ngẫu nhiên
function getRandom(): Promise<number> {
  return new Promise((resolve, reject) => {
    const n = Math.random();
    setTimeout(() => {
      if (n < 0.9) resolve(n);
      else reject(new Error("Số quá lớn, hãy thử lại"));
    }, 500);
  });
}

getRandom()
  .then((n) => console.log("Số ngẫu nhiên:", n))
  .catch((err) => console.log("Lỗi:", err.message));

export { getRandom };
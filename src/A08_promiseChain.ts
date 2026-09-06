// A8: chuỗi Promise - bình phương -> nhân đôi -> cộng 5
Promise.resolve(3)
  .then((n) => n * n) // 3*3 = 9
  .then((n) => n * 2) // 9*2 = 18
  .then((n) => n + 5) // 18+5 = 23
  .then((result) => console.log("Kết quả cuối:", result));

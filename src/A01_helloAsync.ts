// A1: Promise trả về chuỗi "Hello Async" sau 2 giây
const p1 = new Promise<string>((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});

p1.then((msg) => console.log(msg));

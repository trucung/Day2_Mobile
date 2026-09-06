// C30: dùng Promise.allSettled() để biết API nào thành công/thất bại
async function checkMultipleApis(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/khong-ton-tai",
  ];

  const results = await Promise.allSettled(urls.map((url) => fetch(url)));

  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      console.log(`API ${i + 1}: thành công`);
    } else {
      console.log(`API ${i + 1}: thất bại -`, r.reason);
    }
  });
}

checkMultipleApis();
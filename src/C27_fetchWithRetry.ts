// C27: gọi API, nếu lỗi thì thử lại tối đa "retries" lần
async function fetchWithRetry(url: string, retries: number): Promise<any> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
      return await res.json();
    } catch (err) {
      console.log(`Lần thử ${attempt} thất bại`);
      if (attempt === retries) throw err; // hết lượt thử thì mới ném lỗi ra ngoài
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3).then((data) =>
  console.log(data)
);

export { fetchWithRetry };
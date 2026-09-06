// C21: gọi fetch tới API công khai lấy 1 todo
async function getTodo(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}

getTodo();
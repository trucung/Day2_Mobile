// C22: gọi API nhiều lần, log từng kết quả
async function getMultipleTodos(): Promise<void> {
  for (let id = 1; id <= 3; id++) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    console.log(data);
  }
}

getMultipleTodos();
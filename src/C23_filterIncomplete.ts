// C23: lấy danh sách todo, lọc ra những cái chưa hoàn thành
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

async function getIncompleteTodos(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
  const todos: Todo[] = await res.json();
  const incomplete = todos.filter((t) => !t.completed);
  console.log(incomplete);
}

getIncompleteTodos();
// A5: simulateTask(time) - trả "Task done" sau time ms
function simulateTask(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Task done"), time);
  });
}

simulateTask(1000).then((res) => console.log(res));

export { simulateTask };
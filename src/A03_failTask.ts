// A3: Promise reject lỗi sau 1 giây
function failTask(): Promise<never> {
  return new Promise((_resolve, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 1000);
  });
}

failTask().catch((err) => console.log(err.message));

export { failTask };

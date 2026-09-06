// A2: Hàm trả về Promise resolve số 10 sau 1 giây
function getNumber(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
}

getNumber().then((n) => console.log(n));

export { getNumber };
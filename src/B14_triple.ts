// B14: hàm async nhận số, chờ 1 giây, trả về số * 3
async function triple(n: number): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return n * 3;
}

triple(7).then((res) => console.log(res));

export { triple };
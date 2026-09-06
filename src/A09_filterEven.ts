// A9: Promise đọc mảng sau 1 giây, lọc số chẵn
function getEvenNumbers(): Promise<number[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      resolve(arr.filter((n) => n % 2 === 0));
    }, 1000);
  });
}

getEvenNumbers().then((evens) => console.log(evens));

export { getEvenNumbers };
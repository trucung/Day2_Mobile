// C24: gửi POST request tới API test
async function postData(): Promise<void> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Bai tap", body: "Noi dung", userId: 1 }),
  });
  const data = await res.json();
  console.log(data);
}

postData();
// B18: hàm async giả lập gọi API lấy user theo id
interface User {
  id: number;
  name: string;
}

function fetchUser(id: number): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: `User ${id}` }), 1000);
  });
}

fetchUser(1).then((user) => console.log(user));

export { fetchUser, User };
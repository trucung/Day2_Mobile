// B19: gọi fetchUser cho nhiều id cùng lúc
import { fetchUser } from "./B18_fetchUser";

async function fetchUsers(ids: number[]) {
  const users = await Promise.all(ids.map((id) => fetchUser(id)));
  console.log(users);
  return users;
}

fetchUsers([1, 2, 3]);

export { fetchUsers };
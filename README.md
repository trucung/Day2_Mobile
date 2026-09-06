# 30 Bài Tập OOP với TypeScript

Bài tập ôn tập OOP (class, interface, kế thừa, generic, abstract, static, singleton...)
dựa trên kiến thức TypeScript đã học ở Buổi 1–4 (Lập trình di động).

## Cấu trúc

Mỗi bài nằm trong 1 file riêng ở `src/`, tên file theo dạng `baiXX_TenLop.ts`.
Mỗi file có class/interface theo đúng yêu cầu đề bài + đoạn code demo chạy thử ngay bên dưới.

| Bài | File | Nội dung |
|---|---|---|
| 1 | bai01_Person.ts | Class Person |
| 2 | bai02_Student.ts | Student kế thừa Person |
| 3 | bai03_Car.ts | Class Car |
| 4 | bai04_Rectangle.ts | Rectangle - area/perimeter |
| 5 | bai05_BankAccount.ts | BankAccount - deposit/withdraw |
| 6 | bai06_Book.ts | Class Book |
| 7 | bai07_User.ts | User - getter/setter |
| 8 | bai08_Product.ts | Product - filter mảng |
| 9 | bai09_Animal.ts | interface Animal |
| 10 | bai10_Account.ts | Account - public/private/readonly |
| 11 | bai11_DogCat.ts | Animal -> Dog, Cat |
| 12 | bai12_FlyableSwimmable.ts | interface Flyable, Swimmable |
| 13 | bai13_Shape.ts | abstract Shape -> Square, Circle |
| 14 | bai14_Employee.ts | Employee -> Manager, Developer |
| 15 | bai15_Library.ts | Library chứa Book, User |
| 16 | bai16_Box.ts | generic class Box\<T\> |
| 17 | bai17_Logger.ts | Singleton Logger |
| 18 | bai18_MathUtil.ts | static class MathUtil |
| 19 | bai19_Polymorphism.ts | Đa hình Animal/Dog/Cat |
| 20 | bai20_Vehicle.ts | interface Vehicle -> Car, Bike |
| 21 | bai21_Repository.ts | generic Repository\<T\> |
| 22 | bai22_Stack.ts | Stack - push/pop/peek |
| 23 | bai23_Payment.ts | interface Payment -> Cash/Card |
| 24 | bai24_Appliance.ts | abstract Appliance -> Fan, AC |
| 25 | bai25_ShapeStatic.ts | Shape - static describe() |
| 26 | bai26_Order.ts | Order - tính tổng tiền |
| 27 | bai27_Teacher.ts | Teacher kế thừa Person |
| 28 | bai28_ProtectedAnimal.ts | Animal protected makeSound() |
| 29 | bai29_Movable.ts | interface Movable -> Car, Robot |
| 30 | bai30_School.ts | School chứa Student, Teacher |

## Phần 2: Async/Await, Promise, Fetch (`src/async/`)

30 bài về lập trình bất đồng bộ, đặt tên file theo đúng số thứ tự đề bài:

| Nhóm | File | Nội dung |
|---|---|---|
| A1-A10 | A01...A10 | Promise cơ bản: tạo, resolve/reject, `.then/.catch/.finally`, `Promise.all`, `Promise.race`, chain |
| B11-B20 | B11...B20 | async/await, try/catch, chạy tuần tự vs song song, `for await...of`, giả lập fetchUser, timeout |
| C21-C30 | C21...C30 | Gọi API thật (`fetch`), lọc dữ liệu, POST, retry, xử lý batch/queue, `Promise.allSettled` |

**Lưu ý**: bài C21–C24, C27, C30 gọi API thật (`jsonplaceholder.typicode.com`) nên cần máy có kết nối Internet khi chạy.

## Cách chạy thử

```bash
npm install
npx ts-node src/bai01_Person.ts
# hoặc chạy file bất kỳ, ví dụ:
npx ts-node src/bai30_School.ts

# Bài async/promise (folder src/async)
npx ts-node src/async/A01_helloAsync.ts
npx ts-node src/async/C21_fetchTodo.ts   # cần Internet
```

Build toàn bộ ra JS (thư mục `dist/`):
```bash
npm run build
```

## Cách đẩy lên GitHub

```bash
git init
git add .
git commit -m "OOP TypeScript exercises - 30 bai"
git branch -M main
git remote add origin <link-repo-github-cua-ban>
git push -u origin main
```

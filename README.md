# ⏱️ Overtrack - Hệ thống quản lý đơn OT

## 📌 Mô tả

**Overtrack** là một ứng dụng web giúp quản lý đơn làm thêm giờ (OT) cho nhân viên trong công ty. Nhân viên có thể gửi yêu cầu OT, và quản lý sẽ duyệt hoặc từ chối đơn thông qua giao diện quản trị.


## 🚀 Demo

👉 [Xem bản demo tại đây](https://final-project-app-tau.vercel.app)


> 🔐 Vai trò người dùng: `Employee`, `Admin`, `Finance`, `Approver`


## 🛠️ Tính năng chính

- 👤 Nhân viên:
  - Tạo yêu cầu OT (chọn ngày, giờ, dự án tham gia)
  - Xem lịch sử đơn OT
  - Huỷ yêu cầu trước khi được duyệt

- 👨‍💼 Quản lý:
  - Duyệt / Từ chối yêu cầu OT
  - Lọc đơn theo trạng thái (đang chờ, đã duyệt, bị từ chối)
  - Xem tổng hợp đơn OT toàn công ty
  - Xuất danh sách đơn OT ra file Excel
  - Quản lý người dùng & phân quyền
  - Quản lý dự án và phòng ban liên quan đến OT

- 🔐 Xác thực & phân quyền:
  - Đăng nhập / đăng xuất
  - Phân quyền người dùng theo role (employee / approver / finance / admin)


## 🧑‍💻 Công nghệ sử dụng

- **Frontend**: ReactJS 18.0, TypeScript, TailwindCSS, Mui Material
- **Backend**: Node.js, Express.js
- **Database**: MongoDB - Cơ sở dữ liệu NoSQL
- **Authentication**: JWT - Xác thực người dùng
- **Deployment**: Vercel (frontend)
- **Others**: React Router, React Hook Form, XLXS,..


## ⚙️ Cài đặt và chạy local

### 📥 1. Clone repository
```bash
git clone https://github.com/antran7/Final_Project_App.git
cd FINAL_PROJECT_APP
```

### 🖥️ 2. Cài đặt dependencies
```bash
npm i / npm install
```

### 🌐 3. Cài đặt và chạy FrontEnd
```bash
npm run dev
```
✅ Giao diện sẽ hiển thị tại: **[http://localhost:5173](http://localhost:5173)**


## 👨‍👩‍👧‍👦 Thành viên dự án

| Họ tên           | Vai trò            | Github                        | Email                      |
|------------------|--------------------|-------------------------------|-----------------------------|
| Trần Thiên Ân     | Frontend Developer | [@tranthienan](https://github.com/nguyenvana) | tranthienan062004@gmail.com |
| Nguyễn Phúc Thiên Ân      | Frontend Developer  | [@nguyenphucthienan](https://github.com/nguyenphucthienan111)     | ...  |
| Nguyễn Thiên Duy       | Frontend Developer  | [@nguyenthienduy](https://github.com/duypro974)         | levanc@example.com       |
| Dương Công Sơn     | Frontend Developer  | [@duongcongson](https://github.com/dduongCongSon)     | ... |
| Đào Dương Hùng Anh     | Frontend Developer  | [@daoduonghunganh](https://github.com/minhlahunday)     | ...  |
| Nguyễn Thị Thùy Ngân     | Frontend Developer  | [@nguyenthithuyngan](https://github.com/nganthuy0111)     | ... |
| Nguyễn Đức Hy     | Frontend Developer  | [@nguyenduchy](https://github.com/NguyenDucHy2302)     | ... |
| Hồ Hữu Phước     | Frontend Developer  | [@hohuuphuoc](https://github.com/hohuuphuoc27)     | ...  |


---

> 🙌 Rất cảm ơn bạn đã quan tâm đến dự án! Nếu bạn thấy hữu ích, hãy ⭐ dự án và để lại góp ý để nhóm cải thiện trong tương lai!
# MinhDucoder

# 📝 Todo List App

Một ứng dụng Todo List đơn giản được xây dựng bằng **HTML, CSS và JavaScript thuần**, sử dụng kiến trúc module hiện đại (chia component, router và render) giúp dễ dàng mở rộng và tái sử dụng.

## 🚀 Tính năng

- ✅ Thêm nhiệm vụ mới
- 🗑️ Xóa nhiệm vụ
- ✔️ Đánh dấu hoàn thành
- 📂 Lọc nhiệm vụ theo trạng thái: Tất cả, Đã hoàn thành, Chưa hoàn thành
- 💾 Lưu trữ nhiệm vụ bằng `localStorage`
- 🧩 Cấu trúc module hóa, dễ bảo trì

## 📁 Cấu trúc thư mục
├── index.html
├── main.js
├── pages
│ ├── HeaderPage.js
│ └── TaskPage.js
├── utils
│ ├── index.js # Router và Render
│ └── handleTask.js # Logic xử lý các chứcnăng chính
├── styles
│ └── style.css
├── assets
│ └── (icons, fonts, ...)
└── README.md

## 🧠 Công nghệ sử dụng

- HTML5 / CSS3
- JavaScript thuần (ES6+)
- Vite (hoặc cấu trúc module thủ công)
- Font Awesome để hiển thị icon

## 🛠 Cách chạy project

```bash
# Clone project
git clone https://github.com/MinhDucoder/Todo-Web-Basic
cd todo-list

# Cài Vite nếu cần
npm install

# Chạy local
npm run dev


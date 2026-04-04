# Hướng dẫn Setup Môi trường Local — Getting Started

**Dự án:** Hệ thống Quản lý Tồn kho Nông sản
**Cập nhật lần cuối:** 2025/05/20

---

## 1. Yêu cầu tiên quyết

Cài đặt các công cụ sau trước khi bắt đầu:

| Công cụ | Phiên bản yêu cầu | Ghi chú |
| --- | --- | --- |
| Docker Desktop | 4.x trở lên | Bắt buộc |
| Node.js | 20.x (LTS) | Dùng `nvm` để quản lý version |
| Java JDK | 17 (Temurin) | Backend |
| Git | 2.x trở lên | |
| IntelliJ IDEA | 2023.x trở lên | Khuyến nghị cho BE |
| VS Code | Mới nhất | Khuyến nghị cho FE |

---

## 2. Clone repository

```bash
git clone https://github.com/agrifoods/inventory-system.git
cd inventory-system
```

Cấu trúc thư mục sau khi clone:
```
inventory-system/
├── backend/        # Spring Boot application
├── frontend/       # React application
├── docker/         # Docker configs
├── docs/           # Tài liệu
└── docker-compose.yml
```

---

## 3. Khởi động môi trường local (Docker Compose)

```bash
# Khởi động tất cả services (DB + Backend + Frontend)
docker-compose up -d

# Kiểm tra status
docker-compose ps
```

Sau khi khởi động thành công:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8080/api/v1
- **Swagger UI:** http://localhost:8080/swagger-ui.html
- **PostgreSQL:** localhost:5432 (user: `agrifoods`, pass: `password123`)

---

## 4. Nhập test data

```bash
# Chạy migration + seed data
docker-compose exec backend ./gradlew flywayMigrate
docker-compose exec backend ./gradlew loadTestData
```

Hoặc chạy SQL trực tiếp:
```bash
docker-compose exec db psql -U agrifoods -d inventory_db -f /testdata/seed_all.sql
```

**Tài khoản test:**
| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@agrifoods.jp | Test@1234 |
| Manager | manager@agrifoods.jp | Test@1234 |
| Staff | staff@agrifoods.jp | Test@1234 |

---

## 5. Phát triển backend (không dùng Docker)

```bash
cd backend

# Build project
./gradlew build

# Chạy với profile local (kết nối DB Docker)
./gradlew bootRun --args='--spring.profiles.active=local'
```

### Cấu hình VS Code / IntelliJ
- Import project từ `backend/build.gradle`
- Set JDK 17 trong Project Structure
- Run configuration: `Application` class với profile `local`

---

## 6. Phát triển frontend (không dùng Docker)

```bash
cd frontend

# Cài dependencies
npm install

# Chạy development server
npm run dev
```

Frontend sẽ proxy API calls đến `http://localhost:8080` theo cấu hình trong `vite.config.ts`.

---

## 7. Các lệnh hữu ích

```bash
# Xem logs backend
docker-compose logs -f backend

# Restart chỉ backend
docker-compose restart backend

# Xóa data & khởi động lại từ đầu
docker-compose down -v && docker-compose up -d

# Chạy unit test backend
cd backend && ./gradlew test

# Chạy unit test frontend
cd frontend && npm run test
```

---

## 8. Troubleshooting thường gặp

**Q: Port 3000 hoặc 8080 đã bị chiếm**
→ Chạy `lsof -ti tcp:3000 | xargs kill` để giải phóng port

**Q: Docker Compose báo lỗi "image not found"**
→ Chạy `docker-compose build --no-cache` trước khi `up`

**Q: Frontend không kết nối được API**
→ Kiểm tra backend đang chạy: `curl http://localhost:8080/actuator/health`

**Q: PostgreSQL connection refused**
→ Đợi vài giây sau khi `docker-compose up` để DB khởi động xong rồi thử lại

**Q: Lỗi "Invalid token" khi test API trên Swagger**
→ Đăng nhập tại `/api/v1/auth/login` → copy JWT token → paste vào ô "Authorize" trên Swagger UI

# Coding Conventions — Hệ thống Quản lý Tồn kho Nông sản

**Phiên bản:** 1.2
**Cập nhật lần cuối:** 2025/05/20

---

## 1. Quy tắc chung

### Đặt tên branch
```
feature/INV-{số ticket}_{mô tả ngắn gọn}
bugfix/BUG-{số}_{mô tả ngắn gọn}
hotfix/HOTFIX-{số}_{mô tả ngắn gọn}
```
Ví dụ: `feature/INV-180_stocktaking-list-api`

### Commit message
```
[INV-180] Add stocktaking list API endpoint
[BUG-301] Fix negative quantity validation
```
- Viết bằng tiếng Anh
- Bắt đầu bằng số ticket
- Động từ ở dạng nguyên mẫu (Add, Fix, Update, Remove)

### Pull Request
- Tiêu đề: `[INV-180] 棚卸一覧 API 実装` (tiếng Nhật được phép)
- Reviewer: Tran T.B (BE) / Le V.C (FE) — review chéo
- Merge: Squash merge
- CI phải pass toàn bộ mới được merge

---

## 2. Backend (Java / Spring Boot)

### Cấu trúc package
```
com.agrifoods.inventory
├── controller/     # REST Controller
├── service/        # Business Logic
├── repository/     # JPA Repository
├── entity/         # JPA Entity
├── dto/            # Request/Response DTO
├── mapper/         # Entity ↔ DTO mapping
├── config/         # Configuration
├── exception/      # Custom Exception
└── util/           # Utility
```

### Quy tắc đặt tên

| Loại | Quy tắc | Ví dụ |
| --- | --- | --- |
| Controller | `XXXController` | `StocktakingController` |
| Service | `XXXService` / `XXXServiceImpl` | `StocktakingService` |
| Repository | `XXXRepository` | `StocktakingRepository` |
| Entity | Tương ứng tên bảng (PascalCase) | `StocktakingRecord` |
| DTO | `XXXRequest` / `XXXResponse` | `StocktakingRegisterRequest` |

### Đặt tên API endpoint
```
GET    /api/v1/stocktaking          # Lấy danh sách
GET    /api/v1/stocktaking/{id}     # Lấy chi tiết
POST   /api/v1/stocktaking          # Tạo mới
PUT    /api/v1/stocktaking/{id}     # Cập nhật
DELETE /api/v1/stocktaking/{id}     # Xóa
```

### Xử lý lỗi
- Dùng `@RestControllerAdvice` để xử lý lỗi tập trung
- Format response lỗi:
```json
{
  "code": "E001",
  "message": "入庫数量は1以上で入力してください。",
  "details": [...]
}
```

---

## 3. Frontend (React / TypeScript)

### Cấu trúc thư mục
```
src/
├── components/     # Component dùng chung
├── features/       # Thư mục theo chức năng
│   ├── stocktaking/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── api/
├── hooks/          # Hook dùng chung
├── utils/          # Utility
└── types/          # Type definitions
```

### Quy tắc đặt tên
- Component: PascalCase (`StocktakingList.tsx`)
- Hook: camelCase + tiền tố `use` (`useStocktaking.ts`)
- Hằng số: UPPER_SNAKE_CASE
- CSS Modules: `[component].module.css`

### Quản lý state
- Server state: TanStack Query (React Query)
- Local state: useState / useReducer
- Global state: Context API (tối thiểu hóa)

---

## 4. Quy tắc test

### Backend
- Unit Test: JUnit 5 + Mockito
- Đặt tên: `should_kếtQuảMongMuốn_when_điềuKiện()`
- Mục tiêu coverage: Service layer ≥ 80%

### Frontend
- Unit Test: Jest + React Testing Library
- E2E: Playwright (ít nhất 3 luồng chính)

### QA Test
- Test case: Quản lý bằng Excel (có link Jira)
- Evidence: Screenshot + nhật ký thao tác
- Báo cáo bug: Jira BUG ticket (bắt buộc ghi bước tái hiện)

---

## 5. Quy tắc deploy

### Môi trường

| Môi trường | URL | Mục đích |
| --- | --- | --- |
| Dev | dev.agrifoods-inv.internal | Kiểm tra trong quá trình phát triển |
| Staging | stg.agrifoods-inv.internal | UAT & khách hàng xác nhận |
| Production | app.agrifoods-inv.jp | Production |

### Deploy flow
1. `feature/*` → `develop` (PR + Review)
2. `develop` → môi trường Dev (tự động deploy)
3. `develop` → `release/*` → Staging (deploy thủ công)
4. `release/*` → `main` → Production (deploy sau khi được phê duyệt)

---

## 6. FAQ cho member mới

**Q: Cách setup môi trường local?**
→ Xem `source_03_environment_setup.md` hoặc mục "Getting Started" trong README.md. Khởi động bằng Docker Compose một lệnh duy nhất.

**Q: Cách nhập test data?**
→ Chạy SQL trong thư mục `src/main/resources/db/testdata/`

**Q: Tài liệu API ở đâu?**
→ Swagger UI: `http://localhost:8080/swagger-ui.html` (sau khi khởi động local)

**Q: Chỗ nào dùng tiếng Nhật?**
→ Commit message: tiếng Anh | PR title: tiếng Nhật được phép | Comment trong code: tiếng Anh | Error message hiển thị cho user: tiếng Nhật

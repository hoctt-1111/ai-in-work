# Git Workflow & Quy trình Review — Hướng dẫn thực tế

**Dự án:** Hệ thống Quản lý Tồn kho Nông sản

---

## 1. Branching Strategy

```
main          ← Production (chỉ merge từ release/*)
  └── develop ← Integration (auto-deploy to Dev)
        ├── feature/INV-xxx_...  ← Tính năng mới
        ├── bugfix/BUG-xxx_...   ← Sửa bug thường
        └── hotfix/HOTFIX-xxx_... ← Sửa khẩn trên production
```

**Quy tắc quan trọng:**
- **Không được** push trực tiếp lên `main` hoặc `develop`
- Feature branch tạo từ `develop`, merge về `develop`
- Hotfix tạo từ `main`, merge về cả `main` và `develop`

---

## 2. Quy trình phát triển một task (step-by-step)

### Bước 1: Tạo branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/INV-180_stocktaking-list-api
```

### Bước 2: Làm task + commit thường xuyên
```bash
git add .
git commit -m "[INV-180] Add stocktaking list repository"
git commit -m "[INV-180] Add stocktaking list service"
git commit -m "[INV-180] Add stocktaking list controller + unit test"
```

### Bước 3: Cập nhật branch trước khi tạo PR
```bash
git fetch origin
git rebase origin/develop
# Xử lý conflict nếu có
```

### Bước 4: Push và tạo Pull Request
```bash
git push origin feature/INV-180_stocktaking-list-api
```
Sau đó tạo PR trên GitHub với:
- **Tiêu đề:** `[INV-180] 棚卸一覧 API 実装`
- **Description:** Ghi tóm tắt thay đổi + link Jira ticket
- **Reviewer:** Assign đúng người theo role (BE/FE)
- **Labels:** `backend` hoặc `frontend`

### Bước 5: Review & merge
- Reviewer xem xét trong 1 ngày làm việc
- Sau khi approved + CI pass → Squash merge
- Xóa feature branch sau merge

---

## 3. Quy tắc code review

### Reviewer phải check
- [ ] Logic xử lý đúng với spec (link Jira)
- [ ] Đặt tên đúng convention (class, method, biến)
- [ ] Không có hardcode value, magic number
- [ ] Có xử lý lỗi và edge case
- [ ] Unit test đầy đủ (service layer ≥ 80%)
- [ ] Không để lại code thừa / console.log / debug code
- [ ] API response format đúng chuẩn

### Cách comment PR
- Nếu **bắt buộc sửa:** `[MUST] Cần xử lý null case ở đây`
- Nếu **gợi ý cải thiện:** `[NIT] Minor: có thể dùng Optional thay vì null check`
- Nếu **câu hỏi:** `[Q] Tại sao dùng List thay vì Set ở đây?`

### Thời gian review
- Task bình thường: trả lời review trong **1 ngày làm việc**
- Task urgent (gắn label `P0`): trả lời trong **2 giờ**

---

## 4. Xử lý conflict

```bash
# Khi rebase bị conflict
git rebase origin/develop

# Xem file bị conflict
git status

# Sau khi sửa conflict thủ công
git add [file đã sửa]
git rebase --continue

# Nếu muốn hủy rebase
git rebase --abort
```

---

## 5. Release process

### Tạo release branch
```bash
git checkout develop
git checkout -b release/2025-07-sprint16
```

### Deploy lên Staging
```bash
# Chạy trên Slack: /deploy release/2025-07-sprint16 staging
# Hoặc qua GitHub Actions: chọn workflow "Deploy to Staging"
```

### Sau khi UAT pass
```bash
# Tạo PR: release/* → main
# Merge → tự động trigger deploy to Production
# Tag version
git tag v1.3.0
git push origin v1.3.0
```

---

## 6. Hotfix (xử lý bug trên production)

```bash
# Tạo hotfix từ main
git checkout main
git checkout -b hotfix/HOTFIX-42_fix-export-csv

# Sau khi fix xong
git commit -m "[HOTFIX-42] Fix CSV export encoding issue"

# Merge về main VÀ develop
# → Tạo 2 PRs: hotfix/* → main, hotfix/* → develop
```

---

## 7. Jira — Quản lý task

| Trạng thái Jira | Ý nghĩa |
| --- | --- |
| `To Do` | Chưa bắt đầu |
| `In Progress` | Đang làm (move sang khi tạo branch) |
| `In Review` | Đang review PR |
| `In Testing` | QA đang test |
| `Done` | Hoàn thành, đã merge |

**Quy tắc:**
- Move ticket về `In Progress` trước khi tạo branch
- Link PR vào Jira ticket (copy URL paste vào Description)
- Sau khi merge, notify QA để chuyển sang `In Testing`

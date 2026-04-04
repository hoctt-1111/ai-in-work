# Hệ thống Quản lý Tồn kho Nông sản — Tổng quan dự án

## 1. Thông tin cơ bản

| Hạng mục | Nội dung |
| --- | --- |
| **Tên dự án** | Phát triển Hệ thống Quản lý Tồn kho Nông sản |
| **Khách hàng** | Công ty TNHH AgriFoods (tên giả định) |
| **Hình thức hợp đồng** | Lab-type (準委任契約) |
| **Thời gian phát triển** | Tháng 3/2025 ~ Tháng 9/2025 (7 tháng) |
| **Mô hình phát triển** | Offshore development (Việt Nam) |
| **Ngôn ngữ sử dụng** | Tiếng Nhật (tài liệu spec & giao tiếp với khách hàng) |

## 2. Mục tiêu dự án

Nâng cao hiệu quả quản lý tồn kho nông sản, liên kết với kế hoạch xuất hàng để giảm thiểu hao hụt và tối ưu hóa quy trình xuất hàng.

**Hiện trạng:** Quản lý tồn kho thủ công bằng Excel + giấy tờ → Sau khi hệ thống hóa:
- Nắm bắt tồn kho theo thời gian thực
- Tự động đề xuất kế hoạch xuất hàng
- Giảm 30% hao hụt nông sản (mục tiêu)

## 3. Đội ngũ dự án

### Phía khách hàng (Nhật Bản)

| Tên | Vai trò | Phụ trách |
| --- | --- | --- |
| Tanaka (田中 部長) | Project Owner | Quyết định cuối cùng, review hàng tháng |
| Suzuki (鈴木 PM) | Project Manager | Đầu mối liên lạc hàng ngày, xác nhận spec |

### Phía phát triển (Việt Nam — Offshore)

| Tên | Vai trò | Phụ trách |
| --- | --- | --- |
| Nguyen V.A | BrSE | Giao tiếp khách hàng, quản lý team, dịch thuật |
| Tran T.B | Backend SE (Senior) | Thiết kế & implement API, code review |
| Le V.C | Frontend SE | Implement màn hình, UI/UX |
| Pham T.D | Backend SE (Junior) | Implement API, sửa bug |
| Hoang M.E | QA | Thiết kế & thực hiện test |

## 4. Tech Stack

| Layer | Công nghệ |
| --- | --- |
| Frontend | React 18 + TypeScript |
| Backend | Java 17 + Spring Boot 3 |
| Database | PostgreSQL 15 |
| Infrastructure | AWS (ECS, RDS, S3) |
| CI/CD | GitHub Actions |
| Communication | Microsoft Teams, Backlog |
| Task management | Jira |

## 5. Kế hoạch tổng thể

| Giai đoạn | Thời gian | Nội dung |
| --- | --- | --- |
| Phân tích yêu cầu | Tháng 3–4 | Tổng hợp functional requirements, thiết kế màn hình |
| Sprint 1–10 | Tháng 4–6 | Phát triển chức năng cơ bản (master data, nhập/xuất kho) |
| Sprint 11–16 | Tháng 6–7 | Phát triển chức năng nâng cao (kiểm kê, chỉ thị xuất hàng, hủy hàng) |
| UAT | Giữa tháng 7 | User Acceptance Testing |
| Release | Tuần 1 tháng 8 | Triển khai production |

## 6. Danh sách chức năng chính

1. **Quản lý Master Data** — Danh mục mặt hàng, kho, đối tác, người dùng
2. **Quản lý nhập kho** — Đăng ký nhập kho (thu hoạch/mua vào), danh sách nhập kho
3. **Quản lý xuất kho** — Chỉ thị xuất kho, đăng ký thực tế xuất kho
4. **Danh sách tồn kho** — Kiểm tra tồn kho thời gian thực, filter & sort
5. **Quản lý xuất hàng** — Kế hoạch xuất hàng, chỉ thị xuất, export CSV thực tế xuất hàng
6. **Chức năng kiểm kê (棚卸)** — Danh sách kiểm kê, đăng ký kiểm kê, xuất kết quả (PDF)
7. **Chỉ thị xuất hàng hàng loạt** — Chỉ thị đồng thời cho nhiều điểm nhận hàng
8. **Đăng ký hủy hàng (廃棄)** — Yêu cầu hủy hàng, quy trình phê duyệt 2 bước
9. **Dashboard** — Biểu đồ tồn kho, tỉ lệ hao hụt, hiệu suất xuất hàng
10. **Báo cáo** — Báo cáo tồn kho hàng tháng, báo cáo hao hụt

## 7. Quy tắc trao đổi

### Cuộc họp định kỳ
- **Weekly meeting:** Thứ Ba hàng tuần, 14:00–15:00 (Teams)
- **Daily standup:** Mỗi ngày 10:00 (nội bộ team, 15 phút)
- **Sprint Review:** Ngày cuối mỗi Sprint (2 tuần/lần)

### Format báo cáo
- **Báo cáo ngày (日報):** Slack channel `#daily-report` (viết bằng tiếng Nhật)
- **Báo cáo tuần (週報):** Gửi email (Tanaka 部長 & Suzuki PM)
- **Báo cáo bug:** Jira ticket (tiếng Nhật, đính kèm screenshot)

### Quy tắc escalation
- Câu hỏi thông thường → Suzuki PM (trả lời trong 1 ngày làm việc)
- Vấn đề khẩn cấp → Suzuki PM + Tanaka 部長 (trong ngày)
- Thay đổi spec → Qua Suzuki PM → approval flow

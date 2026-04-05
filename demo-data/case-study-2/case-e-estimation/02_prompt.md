# Prompt — Tạo estimation breakdown từ spec

## Bước 1 — Task breakdown (NotebookLM)
**Sources đã upload:** `01_stocktaking_spec.md` (棚卸機能 詳細設計書)

```
Từ spec chức năng 棚卸 trong sources, phân tách thành task list để estimate.

Context:
- Dự án: 農産物在庫管理システム
- Tech: React + Spring Boot + PostgreSQL
- Tiền đề: hệ thống đã có sẵn, đây là phát triển thêm chức năng mới
- Vai trò: bạn là senior engineer thực hiện break task và estimate
- Người thực hiện các task: middle-level engineer
- Mục tiêu: xác định effort cần thiết cho từng task (không phụ thuộc vào số lượng member)

Format bảng — mỗi task ghi effort trung bình (人日) theo từng domain:
| No. | タスク名 | 工程 | BE (人日) | FE (人日) | QA (人日) | Infra (人日) | 合計 (人日) | 依存 | 備考 |

Quy tắc:
- Task không cần domain nào → ghi 0
- Tách rõ: DB設計, API実装, 画面実装, テスト, レビュー, Migration
- 合計 = tổng effort tất cả domain của task đó
- Cột 備考: ghi điểm cần chú ý kỹ thuật hoặc điểm cần confirm với KH (prefix ⚠️). Nếu không có thì ghi —
```

## Bước 1 — Task breakdown (GitHub Copilot)
```
#file:demo-data/case-study-2/case-e-estimation/01_stocktaking_spec.md

Phân tách spec 棚卸機能 này thành task list để estimate.
Stack: React + Spring Boot + PostgreSQL.
Tiền đề: hệ thống đã có sẵn, đây là phát triển thêm chức năng mới.
Vai trò: bạn là senior engineer thực hiện break task và estimate. Người thực hiện các task: middle-level engineer.
Mục tiêu: xác định effort cần thiết cho từng task (không phụ thuộc số lượng member).

Format bảng:
| No. | タスク名 | 工程 | BE (人日) | FE (人日) | QA (人日) | Infra (人日) | 合計 (人日) | 依存 | 備考 |

Quy tắc: task không cần domain nào → ghi 0. Tách rõ DB設計, API, 画面, テスト, レビュー, Migration.
Cột 備考: điểm cần chú ý kỹ thuật hoặc cần confirm với KH (prefix ⚠️). Không có thì ghi —.
```

## Bước 2 — Summary + Buffer
```
Dựa trên task list trên:
1. Tổng hợp subtotal effort (人日) theo từng domain: BE / FE / QA / Infra
2. Subtotal tổng
3. Chọn risk level và áp dụng buffer:
   - Low risk (spec rõ, team quen công nghệ): 10–15%
   - Medium risk (1–2 điểm spec chưa rõ, tech stack quen): 20–25%
   - High risk (spec mơ hồ nhiều, công nghệ mới): 30–40%
4. Grand Total sau buffer
5. Một dòng kết luận: "→ Submit cho KH: X 人日"

Format: bảng, ghi rõ risk level được chọn và lý do ngắn.
```

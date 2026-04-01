# Prompt — Tạo estimation breakdown từ spec

## NotebookLM
**Sources đã upload:** `01_stocktaking_spec.md` (棚卸機能 詳細設計書)

```
Từ spec chức năng 棚卸 (Stocktaking) trong sources, phân tách thành danh sách task để estimate.

Context:
- Dự án: 農産物在庫管理システム
- Team: 4 developers (2 senior, 2 junior)
- Tech stack: React + Spring Boot + PostgreSQL
- Deadline khách muốn: 1 tháng

Mỗi task gồm: タスク名 / 工程(設計/実装/テスト/レビュー) / 複雑度(H/M/L) / 工数(人日 min-max) / 依存 / 備考
Format: bảng tiếng Nhật, paste được vào Excel.

Lưu ý:
- Tách rõ Frontend / Backend / DB
- Đừng quên các task: API設計, DB設計, 単体テスト, 結合テスト, コードレビュー
- Ghi chú risk nếu có
```

## GitHub Copilot
```
#file:demo-data/case-spec/case-e-estimation/01_stocktaking_spec.md

Phân tách spec 棚卸機能 này thành task list để estimate.
Team: 4 devs (2 senior, 2 junior). Stack: React + Spring Boot + PostgreSQL.
Format bảng: タスク名 / 工程 / 複雑度 / 工数(人日) / 依存 / 備考
Tách rõ Frontend / Backend / DB. Đừng quên テスト và レビュー.
```

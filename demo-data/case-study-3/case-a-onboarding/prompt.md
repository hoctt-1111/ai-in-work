# Prompt — Onboarding Kit cho member mới

## Upload vào NotebookLM
Upload các file làm sources:
- `source_01_project_overview.md` — Tổng quan dự án
- `source_02_coding_conventions.md` — Coding conventions
- Thêm spec files từ `case-spec/` folder nếu muốn demo đầy đủ

## Prompt 1 — Tạo Onboarding Document
```
Từ toàn bộ tài liệu dự án trong sources, tạo tài liệu onboarding cho developer mới join team.

Bao gồm:
1. Tổng quan dự án (mục đích, khách hàng, timeline)
2. Tech stack & kiến trúc hệ thống
3. Quy trình làm việc (git flow, review process, deployment)
4. Thuật ngữ nghiệp vụ quan trọng (glossary top 20 từ domain 農産物在庫管理)
5. Danh sách contacts & roles
6. FAQ — Các câu hỏi thường gặp khi mới join

Format: Tiếng Việt, dễ đọc, có mục lục.
```

## Prompt 2 — "Senior ảo" test (member mới tự hỏi)
```
Tôi là developer mới join dự án. Tôi được assign task "棚卸登録画面の修正".
Hãy giải thích:
1. 棚卸 là gì? Flow nghiệp vụ như thế nào?
2. Tôi cần đọc spec nào?
3. Code convention cho frontend screen là gì? Folder structure?
4. Cần ai review PR cho tôi?
```

## Prompt 3 — Glossary hỏi nhanh
```
Giải thích các thuật ngữ sau trong context dự án này:
廃棄ロス、出荷指示、棚卸差異、入庫、品目マスタ
```

## Điểm demo
- NotebookLM hiểu cross-reference giữa project overview + coding conventions
- Member mới hỏi bất cứ lúc nào → không cần chờ BrSE
- Glossary tự sinh từ toàn bộ tài liệu → chính xác hơn glossary viết tay

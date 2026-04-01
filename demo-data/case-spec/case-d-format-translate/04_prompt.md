# Prompt — Dịch & chuẩn hóa theo format mẫu

## NotebookLM
**Sources đã upload:**
- `01_spec_vn.md` (Spec tiếng Việt)
- `02_format_template.md` (Format mẫu 基本設計書)
- `03_glossary.md` (Bảng thuật ngữ)

```
Dịch spec tiếng Việt "Chức năng Quản lý Nhập kho" trong sources sang tiếng Nhật.
- Tuân theo format mẫu 基本設計書テンプレート trong sources
- Giữ nguyên heading structure
- Dùng ĐÚNG thuật ngữ trong bảng glossary sources
- Thuật ngữ không có trong glossary → dịch + đánh dấu [?]
- Thêm Acceptance Criteria (Given-When-Then) nếu spec VN chưa có
```

## GitHub Copilot
```
#file:demo-data/case-spec/case-d-format-translate/01_spec_vn.md
#file:demo-data/case-spec/case-d-format-translate/02_format_template.md
#file:demo-data/case-spec/case-d-format-translate/03_glossary.md

Dịch spec tiếng Việt (file 1) sang tiếng Nhật.
Tuân theo format mẫu (file 2). Dùng thuật ngữ từ glossary (file 3).
Thuật ngữ không có trong glossary → đánh dấu [?].
```

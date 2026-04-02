# Case G — Prompt tạo Website Presentation

## Prompt 1: Tạo cấu trúc website

```
Tôi cần tạo một website presentation cho buổi sharing kiến thức.

Yêu cầu:
- Single Page Application (HTML + CSS + JS)
- Sidebar navigation bên trái (hiện danh sách sections)
- Main content area bên phải (render markdown → HTML)
- Dark/Light mode toggle
- Mobile responsive (sidebar collapse thành hamburger)
- Phím tắt: ← → để chuyển section, Escape đóng sidebar mobile
- Progress bar hiện % đã xem
- Nút Previous/Next ở footer

Cấu trúc file:
- index.html (entry point)
- css/style.css (theming với CSS Variables)
- js/content.js (SECTIONS array — chứa markdown)
- js/app.js (navigation logic)

SECTIONS format:
const SECTIONS = [
  {
    id: 0,
    title: 'Tên section đầy đủ',
    shortTitle: 'Tên ngắn (sidebar)',
    time: '10 phút',
    icon: '📊',
    markdown: `nội dung markdown`
  },
  ...
];

Hãy tạo đầy đủ 4 files với placeholder cho 3 sections đầu tiên.
```

---

## Prompt 2: Thêm Demo File Viewer

```
Thêm tính năng Demo File Viewer:
- Khi user click link markdown file (href chứa .md), thay vì mở file mới:
  1. Fetch file content
  2. Render markdown → HTML
  3. Hiện trong modal overlay
- Modal có: tiêu đề file, nút Close, scroll nội dung
- Có nút Copy Raw để copy markdown gốc
- Click outside modal hoặc Escape để đóng
```

---

## Prompt 3: Sinh content cho từng section

```
Bây giờ hãy viết content cho Section 3 (Bảo mật & Compliance).

Context: Đối tượng là BrSE/Comtor làm outsourcing Nhật Bản.
Survey data: 10/12 lo ngại bảo mật, 7/12 bị hạn chế bởi quy định dự án.

Nội dung cần cover:
- Phân loại data: 🟢 Safe, 🟡 Cần xử lý, 🔴 Cấm
- 3 giải pháp: Anonymize, NotebookLM, Copilot/Claude Pro
- Bảng so sánh 3 giải pháp
- Takeaway

Format: Markdown với tables, emoji, blockquotes.
Bắt đầu bằng câu hỏi mở (engage audience).
```

---

## Tips khi dùng prompt này

1. **Tạo skeleton trước** → Fill content sau (dễ iterate)
2. **Content riêng file** (content.js) → Không đụng code khi sửa nội dung
3. **1 section / 1 prompt** → AI focus hơn, output tốt hơn
4. **Template literal cẩn thận** → Escape backticks trong markdown code blocks
5. **Cache busting** → Thêm ?v=N vào script tags khi update

## Spec được AI sinh ra từ ý tưởng thô

> Đây là bản trích lược — spec đầy đủ dài 13 trang

---

## 1. Tổng quan
Ứng dụng Calculator Online — công cụ tính toán cá nhân trên trình duyệt web, hỗ trợ các phép tính từ cơ bản đến phức tạp. Deploy trên Netlify dưới dạng static site.

## 2. Tech Stack

| Thành phần | Công nghệ |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (CSS Variables cho theming) |
| Logic | Vanilla JavaScript (ES6+) |
| Parsing | Thuật toán Shunting-yard (Dijkstra) |
| Storage | LocalStorage |
| Deploy | Netlify (static site) |

## 3. Chức năng chi tiết

### Phép tính cơ bản
| Phép tính | Ký hiệu | Ví dụ |
|---|---|---|
| Cộng | + | 5 + 3 = 8 |
| Trừ | - | 10 - 4 = 6 |
| Nhân | × | 6 × 7 = 42 |
| Chia | ÷ | 15 ÷ 3 = 5 |

### Phép tính nâng cao
| Chức năng | Ký hiệu | Ví dụ |
|---|---|---|
| Phần trăm | % | 200 × 15% = 30 |
| Căn bậc 2 | √ | √144 = 12 |
| Bình phương | x² | 5² = 25 |
| Nghịch đảo | 1/x | 1/4 = 0.25 |
| Đổi dấu | ± | 5 → -5 |

### Keyboard Shortcut
| Phím | Action |
|---|---|
| 0-9, . | Nhập số |
| +, -, *, / | Phép tính |
| Enter | Tính kết quả |
| Escape | Clear All (AC) |
| Backspace | Xóa ký tự cuối |
| H | Toggle lịch sử |
| T | Toggle theme |

## 4. File Structure (AI đề xuất)
```
calculator/
├── index.html          # Entry point
├── css/
│   └── style.css       # Theming + layout
└── js/
    ├── app.js           # Main init
    ├── calculator.js    # Core logic (Shunting-yard)
    ├── display.js       # DOM manipulation
    ├── history.js       # LocalStorage + UI
    ├── keyboard.js      # Keyboard events
    └── theme.js         # Dark/Light toggle
```

---

## Nhận xét
- AI tự thêm **Shunting-yard algorithm** — giải quyết vấn đề operator precedence mà mình chưa nghĩ tới
- **CSS Variables** cho theming — thay vì duplicate CSS, chỉ cần swap variables
- **Module hóa JS** — 6 files riêng biệt, maintain dễ
- **Edge cases** được cover: chia cho 0, overflow, multiple decimal points

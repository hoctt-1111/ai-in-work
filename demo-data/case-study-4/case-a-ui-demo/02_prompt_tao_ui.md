# Case A — Prompt tạo UI Demo

## Prompt chính (gửi cho Claude / Copilot Agent)

```
Bạn là chuyên gia UI design. Hãy tạo 1 file HTML duy nhất cho màn hình admin demo dựa theo yêu cầu bên dưới.

## Yêu cầu
- Hệ thống quản lý nông nghiệp "MARIC+" — màn hình quản trị
- 1 file duy nhất (HTML + CSS + JS inline)
- Mở trình duyệt là chạy, không cần server

## Cấu trúc màn hình
1. Dashboard — KPI cards (số nông trại, tổng diện tích, sản lượng tháng này, user active) + biểu đồ đường + thông báo mới nhất
2. Quản lý nông trại — Bảng danh sách (tên nông trại, vị trí, diện tích, cây trồng, trạng thái) + filter + pagination
3. Quản lý cây trồng — Hiển thị dạng card (image placeholder + tên + status badge mỗi loại cây)
4. Báo cáo — Biểu đồ cột theo tháng + so sánh year-over-year + nút Export CSV/PDF
5. Quản lý user — Bảng (tên, email, role, lần login cuối) + role badge

## Yêu cầu design
- Sidebar navigation (bên trái, nền tối)
- Header có thanh tìm kiếm + user icon
- Màu: Primary #1a56db, Sidebar #1e293b
- Font: system font (sans-serif)
- Responsive
- Bảng có hover effect
- Dummy data bằng tiếng Nhật (tên nhân viên, tên nông trại, ngày tháng format Nhật)

## Ví dụ dummy data
- Nông trại: 北海道第一農場, 千葉中央農場, 静岡西部農場
- Nhân viên: 田中太郎, 佐藤花子, 鈴木一郎
- Cây trồng: 水稲（コシヒカリ）, トマト, いちご, 枝豆
```

---

## Follow-up prompt (chỉnh sửa sau lần đầu)

```
Hãy chỉnh sửa như sau:
1. Biểu đồ đường ở Dashboard vẽ bằng Canvas (JS thuần, không dùng library)
2. Thêm highlight cho trạng thái active của sidebar
3. Thêm chức năng tìm kiếm cho bảng (client-side filter)
4. Chuyển đổi giữa các màn hình mượt hơn (CSS transition)
5. Trên mobile: sidebar chuyển thành hamburger menu
```

---

## Tips khi dùng prompt này
1. **Dùng Claude hoặc Copilot Agent** — context dài, output ổn định
2. **Chia nhỏ nếu output bị cắt**: "Tiếp tục từ phần [tên section]"
3. **Dummy data nên giống thật** — khách hàng sẽ impressed hơn
4. **Không cần perfect** — mục đích là visualize, không phải production
5. **Chỉnh CSS trước, logic sau** — vì demo chỉ cần "trông đẹp"

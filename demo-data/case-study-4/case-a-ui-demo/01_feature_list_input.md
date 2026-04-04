## Tình huống
- **Dự án:** Hệ thống quản lý nông nghiệp (anonymize: "MARIC+ System")
- **Giai đoạn:** Proposal — khách muốn thấy hình dung sản phẩm
- **Thời gian chuẩn bị:** 2 ngày trước buổi họp
- **Yêu cầu:** Demo UI để khách hàng visualize — KHÔNG cần functional

---

## Danh sách chức năng (từ khách hàng)

### Màn hình chính:
1. **ダッシュボード (Dashboard)**
   - Tổng quan số liệu: số nông trại, diện tích, sản lượng
   - Biểu đồ tình trạng cây trồng
   - Thông báo gần đây

2. **農場管理 (Quản lý nông trại)**
   - Danh sách nông trại (bảng)
   - Filter theo khu vực, loại cây trồng
   - Chi tiết nông trại (popup/page)

3. **作物管理 (Quản lý cây trồng)**
   - Danh sách giống cây
   - Lịch canh tác (calendar view)
   - Trạng thái: 播種 → 生育 → 収穫

4. **レポート (Báo cáo)**
   - Báo cáo sản lượng theo tháng/quý
   - Export CSV/PDF
   - So sánh year-over-year

5. **ユーザー管理 (Quản lý user)**
   - Danh sách user + role
   - Phân quyền theo nông trại

---

## Yêu cầu phong cách
- Admin dashboard kiểu Japanese enterprise
- Clean, professional, sidebar navigation
- Color scheme: xanh dương + trắng (corporate feel)
- Dummy data tiếng Nhật (tên nhân viên, nông trại...)
- Responsive (demo trên projector)

---

## Output mong muốn
- **1 file HTML duy nhất** (HTML + CSS + JS inline)
- Mở trình duyệt là chạy — không cần server
- Navigate giữa các màn hình bằng sidebar
- Dummy data giống thật

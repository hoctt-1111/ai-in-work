# Spec tiếng Việt — Chức năng Quản lý Nhập kho

**Mã chức năng:** INV-002
**Phiên bản:** 1.0

---

## 1. Tổng quan
Chức năng này cho phép nhân viên kho ghi nhận việc nhập kho nông sản từ các vườn sau khi thu hoạch.

## 2. Thiết kế màn hình

### 2.1 Màn hình Nhập kho (SCR-004)

**Các trường nhập liệu:**
| STT | Tên trường | Loại | Bắt buộc | Ghi chú |
| --- | --- | --- | --- | --- |
| 1 | Ngày giờ nhập kho | Ngày giờ | Có | Mặc định: thời điểm hiện tại |
| 2 | Kho | Danh sách chọn | Có | Chọn từ danh sách kho |
| 3 | Loại nông sản | Danh sách chọn | Có | |
| 4 | Hạng | Danh sách chọn | Có | Hạng: Đặc biệt / Tốt / Khá / Ngoại hạng |
| 5 | Số lượng nhập | Số | Có | Đơn vị: kg |
| 6 | Hạn sử dụng | Ngày | Có | Tự động tính từ số ngày bảo quản tiêu chuẩn |
| 7 | Mã lô thu hoạch | Chữ | Có | Liên kết với bản ghi thu hoạch |
| 8 | Nhiệt độ | Số | Không | Nhiệt độ kho tại thời điểm nhập |
| 9 | Ghi chú | Vùng văn bản | Không | |

### 2.2 Luồng xử lý
1. Nhân viên kho nhập thông tin
2. Nhấn nút "Nhập kho"
3. Hệ thống kiểm tra dung lượng kho
4. Nếu kho còn chỗ → Lưu thành công
5. Nếu kho đầy → Hiển thị lỗi, không cho nhập

### 2.3 Kiểm tra dung lượng kho
- Khi nhập kho, hệ thống tự động kiểm tra dung lượng còn lại
- Nếu vượt quá dung lượng tối đa → Lỗi, không cho đăng ký
- Nếu đạt 90% dung lượng trở lên → Cảnh báo, vẫn cho đăng ký

## 3. Quy tắc nghiệp vụ

### QT-001: Hạn sử dụng tự động
- Tự động tính hạn sử dụng dựa trên "Số ngày bảo quản tiêu chuẩn" trong bảng danh mục nông sản
- Có thể thay đổi thủ công (bắt buộc nhập lý do)

### QT-002: Liên kết lô thu hoạch
- Mỗi lần nhập kho phải liên kết với mã lô thu hoạch
- Một lô thu hoạch có thể nhập kho nhiều lần (chia ra nhiều kho)

## 4. Thông báo lỗi
| Mã | Điều kiện | Thông báo |
| --- | --- | --- |
| E-INV-001 | Chưa nhập trường bắt buộc | 「{Tên trường}を入力してください」 |
| E-INV-002 | Vượt dung lượng kho | 「倉庫の容量を超えています」 |
| W-INV-001 | Đạt 90% dung lượng | 「倉庫の使用率が90%を超えています」 |

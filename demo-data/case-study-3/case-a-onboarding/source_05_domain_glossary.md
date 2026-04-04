# Glossary Thuật ngữ Nghiệp vụ — Hệ thống Quản lý Tồn kho Nông sản

Tài liệu tra cứu nhanh các thuật ngữ domain cho developer mới. Đây là danh sách các từ thường xuyên xuất hiện trong spec và cuộc họp.

---

## Thuật ngữ nông nghiệp (農業用語)

| Tiếng Nhật | Phát âm | Tiếng Việt | Giải thích trong context hệ thống |
| --- | --- | --- | --- |
| 農産物 | nōsanbutsu | Nông sản | Đối tượng quản lý chính của hệ thống (rau, củ, quả) |
| 圃場 | hojō | Vườn / Ruộng | Địa điểm canh tác cụ thể. Là master data trong hệ thống |
| 収穫 | shūkaku | Thu hoạch | Hành động nhập nông sản vào kho sau khi thu hoạch |
| 廃棄 | haiki | Hủy hàng / Thải bỏ | Loại bỏ nông sản hỏng hoặc hết hạn. Có quy trình phê duyệt 2 bước |
| 廃棄ロス | haiki rosu | Tổn thất do hủy hàng | Giá trị hàng hóa bị thải bỏ. KPI quan trọng của hệ thống |
| 防除暦 | bōjoreki | Lịch phòng trừ sâu bệnh | Lịch dự kiến phun thuốc/xử lý — cần check trước khi xuất hàng |
| 賞味期限 | shōmi kigen | Hạn sử dụng | Ngày hết hạn của nông sản. Hệ thống cảnh báo khi gần hết hạn |
| 品目 | hinmoku | Danh mục mặt hàng | Loại nông sản (ví dụ: Cà chua, Dưa leo). Là master data |

---

## Thuật ngữ kho vận (物流用語)

| Tiếng Nhật | Phát âm | Tiếng Việt | Giải thích trong context hệ thống |
| --- | --- | --- | --- |
| 入庫 | nyūko | Nhập kho | Đăng ký hàng hóa vào kho (sau thu hoạch hoặc mua vào) |
| 出庫 | shukko | Xuất kho | Hàng hóa rời khỏi kho (theo chỉ thị xuất hàng) |
| 出荷 | shukka | Xuất hàng / Giao hàng | Quá trình đóng gói và giao hàng đến điểm nhận |
| 出荷先 | shukka-saki | Điểm nhận hàng | Nơi nhận hàng (siêu thị, nhà hàng, v.v.). Là master data |
| 出荷予定 | shukka yotei | Kế hoạch xuất hàng | Lịch dự kiến xuất hàng. Cần lập trước khi thực hiện xuất kho |
| 出荷指示 | shukka shiji | Chỉ thị xuất hàng | Lệnh chính thức yêu cầu xuất hàng. Trạng thái: Chưa xuất / Đã xuất |
| 棚卸 | tanaoroshi | Kiểm kê kho | Đối chiếu tồn kho thực tế với số liệu hệ thống. Làm định kỳ |
| 棚卸差異 | tanaoroshi sai | Sai lệch kiểm kê | Chênh lệch giữa tồn kho thực tế và trên hệ thống. Cần ghi rõ nguyên nhân |
| 在庫 | zaiko | Tồn kho | Lượng hàng hóa hiện có trong kho tại thời điểm hiện tại |
| 倉庫 | sōko | Nhà kho / Kho | Địa điểm lưu trữ hàng hóa. Là master data |

---

## Thuật ngữ hệ thống (システム用語)

| Tiếng Nhật | Phát âm | Tiếng Việt | Giải thích trong context hệ thống |
| --- | --- | --- | --- |
| マスタ | masuta | Master data | Dữ liệu danh mục cố định (品目, 倉庫, 出荷先, ユーザー) |
| プルダウン | purudaun | Dropdown | Ô chọn từ danh sách. Thường lấy từ master data |
| 一覧 | ichiran | Danh sách / Trang list | Màn hình hiển thị danh sách records (ví dụ: 棚卸一覧) |
| 登録 | tōroku | Đăng ký / Tạo mới | Hành động thêm record mới vào hệ thống |
| 承認 | shōnin | Phê duyệt | Quy trình duyệt (ví dụ: phê duyệt hủy hàng) |
| エビデンス | ebidensu | Evidence / Bằng chứng | Screenshot hoặc log chứng minh đã test |
| ステータス | sutētasu | Trạng thái | Status của record (ví dụ: 未出荷, 出荷済) |
| 未出荷 | mi-shukka | Chưa xuất hàng | Trạng thái của đơn xuất hàng chưa được thực hiện |
| 出荷済 | shukka-zumi | Đã xuất hàng | Trạng thái đơn đã hoàn thành xuất hàng |
| キャンセル | kyanseru | Hủy | Hủy đơn xuất hàng hoặc đơn kiểm kê |

---

## Thuật ngữ dự án / giao tiếp (プロジェクト用語)

| Tiếng Nhật | Phát âm | Tiếng Việt | Ghi chú |
| --- | --- | --- | --- |
| 仕様書 | shiyōsho | Tài liệu spec | Tài liệu mô tả chi tiết chức năng |
| 要件定義 | yōken teigi | Phân tích yêu cầu | Giai đoạn đầu dự án, làm rõ requirements |
| 基本設計 | kihon sekkei | Basic design | Thiết kế tổng thể (màn hình, DB, API outline) |
| 詳細設計 | shōsai sekkei | Detailed design | Thiết kế chi tiết từng chức năng cụ thể |
| 納期 | nōki | Deadline giao hàng | Ngày phải bàn giao sản phẩm cho khách |
| 不具合 | fuguai | Bug / Lỗi hệ thống | Từ lịch sự hơn "バグ" khi nói với khách hàng |
| 確認事項 | kakunin jikō | Các điểm cần xác nhận | Danh sách câu hỏi gửi khách hàng |
| 議事録 | gijiroku | Biên bản cuộc họp | Ghi lại nội dung, quyết định, action items của meeting |
| Sprint | - | Sprint | Chu kỳ phát triển 2 tuần. Sprint Review cuối mỗi sprint |
| UAT | - | User Acceptance Testing | Khách hàng test và xác nhận hệ thống trước khi release |

---

## Cách đọc status thường gặp trong code

```
// Entity Status
UNSHIPPED    = 未出荷  (chưa xuất hàng)
SHIPPED      = 出荷済  (đã xuất hàng)
CANCELLED    = キャンセル (đã hủy)
PENDING      = 承認待ち (đang chờ duyệt)
APPROVED     = 承認済み (đã được duyệt)
REJECTED     = 却下    (bị từ chối)
```

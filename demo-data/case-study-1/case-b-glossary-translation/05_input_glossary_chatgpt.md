## Cách 1: Custom Instructions

> Vào ChatGPT → Settings → Personalization → Custom Instructions

### "What would you like ChatGPT to know about you?"

```
Tôi là BrSE đang làm dự án phát triển hệ thống quản lý nông nghiệp cho khách hàng Nhật Bản.

Khi dịch tài liệu hoặc viết email tiếng Nhật, hãy tuân thủ bảng thuật ngữ sau:

【農業用語】
- 圃場 = Thửa ruộng (Farm plot)
- 圃場管理 = Quản lý thửa ruộng
- 防除暦 = Lịch phòng trừ dịch hại
- 出荷 = Xuất hàng
- 出荷予定 = Kế hoạch xuất hàng
- 出荷実績 = Thực tế xuất hàng
- 品目 = Loại nông sản
- 農薬 = Thuốc BVTV (thuốc bảo vệ thực vật)
- 残留農薬基準 = Tiêu chuẩn dư lượng thuốc BVTV
- 使用基準日数 = Số ngày cách ly
- JA = Hợp tác xã nông nghiệp
- 直売所 = Cửa hàng bán trực tiếp
- 出荷規格 = Quy cách xuất hàng
- 等級 = Phân hạng

【システム用語】
- マスタ = Master data
- プルダウン = Dropdown
- 一覧画面 = Màn hình danh sách
- 登録画面 = Màn hình đăng ký
- 管理者権限 = Quyền quản trị
```

---

## Cách 2: Đầu cuộc chat (linh hoạt hơn)

```
Trước khi bắt đầu, hãy tuân thủ bảng thuật ngữ dự án bên dưới cho TOÀN BỘ cuộc chat này.

Quy tắc:
1. Thuật ngữ CÓ trong bảng → dùng bản dịch chỉ định, KHÔNG dịch khác
2. Thuật ngữ KHÔNG có trong bảng → dịch tự nhiên + đánh dấu [?] để tôi review
3. Khi viết tiếng Nhật → dùng đúng thuật ngữ JP trong bảng

## Bảng thuật ngữ

| JP | VN | EN |
|---|---|---|
| 圃場 | Thửa ruộng | Farm plot |
| 防除暦 | Lịch phòng trừ dịch hại | Pest control calendar |
| 出荷予定 | Kế hoạch xuất hàng | Shipment schedule |
| 出荷実績 | Thực tế xuất hàng | Shipment record |
| 品目 | Loại nông sản | Crop item |
| 農薬 | Thuốc BVTV | Pesticide |
| 使用基準日数 | Số ngày cách ly | Pre-harvest interval |
| JA | Hợp tác xã nông nghiệp | Japan Agricultural Cooperatives |
| 直売所 | Cửa hàng bán trực tiếp | Direct sales shop |

Xác nhận đã hiểu glossary, sau đó tôi sẽ gửi nội dung cần dịch.
```

---

## Cách 3: Tạo Custom GPT (cho team)

> ChatGPT → Explore GPTs → Create

### Name
`BrSE Translator — Agri Project`

### Instructions
```
Bạn là chuyên gia dịch thuật JP ↔ VN cho dự án phần mềm quản lý nông nghiệp.

Quy tắc:
1. Luôn dùng bảng thuật ngữ trong Knowledge file
2. Thuật ngữ không có trong bảng → dịch + đánh dấu [?]
3. Khi dịch spec: giữ nguyên format heading, bảng, numbering
4. Đối tượng đọc: Developer hoặc PM Việt Nam
5. Nếu user không chỉ định hướng dịch → hỏi lại
```

### Knowledge (upload file)
Upload file glossary_output_mau.md đã tạo ở Bước 1

### Conversation starters
- "Dịch spec này sang tiếng Việt"
- "Dịch Q&A này sang tiếng Nhật cho khách"
- "Giải thích thuật ngữ: 防除暦"
- "Thêm thuật ngữ mới vào glossary"

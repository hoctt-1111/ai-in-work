# Daily Report — Thứ Hai 2025/06/09

**Dự án:** 農産物在庫管理システム（Sprint 15）
**Người báo cáo:** Nguyen V.A (BrSE)

---

## Tiến độ team hôm nay

### Tran T.B (Backend Senior)
- ✅ Hoàn thành API `GET /api/stocktaking/list` — 棚卸一覧 endpoint
- 🔄 Bắt đầu API `POST /api/stocktaking/register` — 棚卸登録
- Estimate: 3 ngày (hoàn thành thứ 4)

### Le V.C (Frontend)
- 🔄 棚卸一覧画面 đang làm — khoảng 70% done
- Component table + filter đã xong, đang integrate với API của Tran
- Gặp issue nhỏ: pagination hiển thị sai khi filter theo 倉庫

### Pham T.D (Backend Junior)
- 🔄 Bug fix 入庫管理 từ sprint trước — ticket INV-234
- Bug: khi nhập số lượng bằng 0, hệ thống vẫn accept → cần thêm validation
- Fix xong, đang viết unit test

### Hoang M.E (QA)
- 🔄 Viết test case cho 出荷管理 chức năng — 15/25 case done
- Preview: coverage cho happy path đã đủ, đang viết edge case

---

## Issues / Blockers

1. **🔴 DB Performance issue:** Pham D phát hiện query 在庫一覧 chạy > 3 giây khi có > 10,000 records. Hiện tại dev DB chỉ có 500 records nên không thấy. Cần investigate thêm.

2. **🟡 Spec question:** 棚卸登録 — khi số lượng thực tế khác hệ thống, có cần nhập lý do (差異理由) không? Spec chỉ nói "差異が生じた場合は調査を行う" nhưng không rõ flow trên màn hình.

---

## Kế hoạch ngày mai
- Tran B: Tiếp tục 棚卸登録 API
- Le C: Hoàn thành 棚卸一覧, fix pagination bug
- Pham D: Finish bug fix INV-234, merge PR
- Hoang E: Tiếp tục test case 出荷管理
- BrSE (tôi): Gửi câu hỏi spec cho khách về 差異理由 flow

# Daily Report — Thứ Ba 2025/06/10

**Dự án:** 農産物在庫管理システム（Sprint 15）
**Người báo cáo:** Nguyen V.A (BrSE)

---

## Tiến độ team hôm nay

### Tran T.B (Backend Senior)
- 🔄 棚卸登録 API — 40% done
- Phát hiện spec không rõ quy tắc làm tròn: 品目の重量が小数点以下の場合、どのように丸めるか？（四捨五入？切り捨て？）
- Tạm dừng phần calculation, chờ clarify từ khách

### Le V.C (Frontend)
- ✅ 棚卸一覧画面 hoàn thành — pagination bug đã fix
- ✅ Submit PR #187, đang chờ review
- 🔄 Bắt đầu viết unit test cho 棚卸一覧

### Pham T.D (Backend Junior)
- 🔄 DB performance issue đang investigate
- Thử thêm composite index trên (warehouse_id, product_id, created_at) — giảm từ 3.2s → 1.8s nhưng vẫn chưa đạt target < 1s
- Cân nhắc thêm caching layer hoặc optimize query JOIN

### Hoang M.E (QA)
- ✅ Test case 出荷管理 hoàn thành — 25/25 case
- 🐛 Phát hiện 2 bugs khi test:
  - BUG-301: 出荷数量 cho phép nhập số âm
  - BUG-302: CSV export bị lỗi ký tự 文字化け (encoding Shift-JIS/UTF-8 conflict)

---

## Issues / Blockers

1. **🔴 Spec ambiguity — Rounding rule:** Tran B cần answer từ khách về cách làm tròn trọng lượng. Đã gửi email qua 鈴木さん lúc 14:00. Chưa reply.

2. **🟡 DB performance chưa resolved:** Pham D đang thử approach khác. Nếu thứ 4 chưa xong sẽ cần support từ Tran B.

3. **🟡 2 bugs mới từ QA:** BUG-301 (medium), BUG-302 (high — ảnh hưởng export chức năng). Cần assign và estimate.

---

## Kế hoạch ngày mai
- Tran B: Nếu có reply rounding → tiếp tục API. Nếu chưa → chuyển sang 棚卸結果出力 API
- Le C: Start 棚卸登録画面
- Pham D: Tiếp tục DB optimize. Thử materialized view approach
- Hoang E: Bắt đầu regression test 入庫管理 (sau fix của Pham D sprint trước)
- BrSE: Follow up rounding question với 鈴木さん

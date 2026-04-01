# Daily Report — Thứ Tư 2025/06/11

**Dự án:** 農産物在庫管理システム（Sprint 15）
**Người báo cáo:** Nguyen V.A (BrSE)

---

## Tiến độ team hôm nay

### Tran T.B (Backend Senior)
- Rounding question chưa reply → chuyển sang 棚卸結果出力 API
- 🔄 棚卸結果出力 API — 30% done (PDF export bằng JasperReports)
- Note: PDF template cần confirm layout với khách, tạm dùng draft layout

### Le V.C (Frontend)
- 🔄 棚卸登録画面 — started
- Component form layout done, đang implement validation rules
- Note: có dependency với rounding rule → validation cho trường 重量 tạm hardcode 小数第2位

### Pham T.D (Backend Junior)
- ✅ DB performance issue RESOLVED
- Solution: composite index + optimize JOIN với subquery → query time 0.6s với 50,000 records
- ✅ Submit PR #189 for index migration
- 🔄 Chuyển sang 出荷指示 API development

### Hoang M.E (QA)
- 🔄 Regression test 入庫管理 — 80% done
- Không phát hiện regression sau DB fix
- Ghi chú nhỏ: tooltip 入庫日 hiển thị format date khác với spec (yyyy/MM/dd vs yyyy-MM-dd) — không phải bug mới, có từ trước. Tạo ticket reminder INV-267.

---

## Issues / Blockers

1. **🔴 Rounding spec — vẫn chưa reply (ngày thứ 2).** 鈴木さん OOO hôm nay? Cần escalate nếu mai chưa reply → contact trực tiếp 田中部長.

2. **🟢 DB performance resolved.** Close issue.

3. **🟡 BUG-302 (encoding CSV) chưa assign.** QA đang block test export function. Cần assign cho Tran B hoặc Pham D tuần tới.

4. **🟡 Date format inconsistency** (INV-267) — minor nhưng khách có thể point out. Nên fix trong sprint này nếu còn bandwidth.

---

## Kế hoạch ngày mai
- Tran B: Tiếp tục 棚卸結果出力 API
- Le C: Tiếp tục 棚卸登録画面 (60% target)
- Pham D: 出荷指示 API development
- Hoang E: Complete regression test, start 棚卸一覧 test execution
- BrSE: Escalate rounding question nếu chưa reply đến trưa
